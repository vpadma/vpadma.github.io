const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const output = path.resolve('qa-output');
fs.mkdirSync(output, { recursive: true });
const findings = [];
const errors = [];
function check(label, condition, detail = '') {
  findings.push({ label, passed: Boolean(condition), detail });
}
async function main() {
  let server;
  let url = 'https://vinaypadma.com/bmcc-bio426/anatomy-lab/';
  if (process.env.QA_TARGET === 'checkout') {
    server = http.createServer((req, res) => {
      const file = path.join(__dirname, path.basename(new URL(req.url, 'http://localhost').pathname) || 'index.html');
      if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
      res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html');
      res.end(fs.readFileSync(file));
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    url = `http://127.0.0.1:${server.address().port}/`;
  }
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1050 } });
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    const response = await page.goto(url, { waitUntil: 'networkidle' });
    check('Page loads successfully', response.ok(), String(response.status()));
    await page.screenshot({ path: `${output}/desktop-overview.png`, fullPage: true });
    for (let section = 0; section < 4; section++) {
      await page.locator('#tabs button').nth(section).click();
      const names = await page.locator('#terms button').allTextContents();
      check(`Section ${section + 1} term count`, names.length === [30, 38, 10, 21][section], String(names.length));
      const viewNames = await page.locator('#views button').allTextContents();
      for (let view = 0; view < viewNames.length; view++) {
        await page.locator('#views button').nth(view).click();
        await page.locator('.atlas').screenshot({ path: `${output}/section-${section + 1}-view-${view + 1}.png` });
      }
      for (const name of names) {
        await page.locator('#terms').getByRole('button', {name: name, exact: true }).click();
        const title = await page.locator('#panel h2').textContent();
        const selected = page.locator('.structure').filter({ has: page.locator('.selected-halo') });
        check(`Select ${name}`, title === name && await selected.count() === 1);
        const box = await selected.locator('.vessel').first().evaluate(el => {
          const b = el.getBBox(); return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
        });
        await page.getByRole('button', { name: 'Zoom in', exact: true }).click();
        const center = await page.locator('#diagram svg').evaluate(el => {
          const b = el.viewBox.baseVal; return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
        });
        check(`Zoom centers ${name}`, Math.abs(center.x - box.x) < 1 && Math.abs(center.y - box.y) < 1,
          `expected ${box.x},${box.y}; actual ${center.x},${center.y}`);
        await page.getByRole('button', { name: 'Fit', exact: true }).click();
      }
    }
    await page.locator('#tabs button').nth(0).click();
    await page.getByRole('button', { name: 'Quiz yourself', exact: true }).click();
    check('Quiz hides the term list', await page.locator('#term-section').isHidden());
    check('Quiz removes SVG answer titles', await page.locator('#diagram title').count() === 0);
    await page.locator('.atlas').screenshot({ path: `${output}/quiz-target.png` });
    await page.locator('#answer').fill('intentionally incorrect');
    await page.getByRole('button', { name: 'Check answer', exact: true }).click();
    check('Wrong answer shows feedback', (await page.locator('#feedback').textContent()).includes('Not quite'));
    await page.getByRole('button', { name: 'Next structure', exact: true }).click();
    await page.getByRole('button', { name: 'Reveal answer', exact: true }).click();
    check('Reveal shows feedback', (await page.locator('#feedback').textContent()).includes('Answer revealed'));
    await page.getByRole('button', { name: 'Learn', exact: true }).click();
    await page.locator('#tabs button').nth(3).click();
    await page.locator('#terms').getByRole('button', {name: 'Left Ventricle', exact: true }).click();
    await page.locator('#terms').getByRole('button', {name: 'Right Atrium', exact: true }).click();
    await page.locator('.structure[aria-label="Left Ventricle"] .vessel').first().scrollIntoViewIfNeeded();
    const chamber = await page.locator('.structure[aria-label="Left Ventricle"] .vessel').first().boundingBox();
    await page.mouse.click(chamber.x + chamber.width / 2, chamber.y + chamber.height / 2);
    check('Clicking inside a chamber selects it', (await page.locator('#panel h2').textContent()) === 'Left Ventricle');
    for (const width of [390, 768]) {
      await page.setViewportSize({ width, height: 844 });
      for (let section = 0; section < 4; section++) {
        await page.locator('#tabs button').nth(section).click();
        check(`No page overflow at ${width}px, section ${section+1}`, await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        await page.screenshot({ path: `${output}/width-${width}-section-${section + 1}.png`, fullPage: true });
      }
    }
    check('No browser errors or failed assets', errors.length === 0, errors.join('\n'));
  } finally {
    await browser.close();
    if (server) server.close();
    fs.writeFileSync(`${output}/findings.json`, JSON.stringify({ target: url, findings, errors }, null, 2));
    const failed = findings.filter(item => !item.passed);
    console.log(JSON.stringify({ total: findings.length, failed }, null, 2));
    if (failed.length) process.exitCode = 1;
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
