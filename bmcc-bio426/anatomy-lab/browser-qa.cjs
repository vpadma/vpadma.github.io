const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const output = path.resolve(process.env.QA_OUTPUT || 'qa-output');
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
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const file = path.resolve(__dirname, '.' + (pathname === '/' ? '/index.html' : pathname));
      if (!file.startsWith(__dirname + path.sep)) { res.writeHead(403).end(); return; }
      if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
      res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.jpg') ? 'image/jpeg' : file.endsWith('.png') ? 'image/png' : 'text/html');
      res.end(fs.readFileSync(file));
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    url = `http://127.0.0.1:${server.address().port}/`;
  }
  const browser = await chromium.launch({ executablePath: process.env.QA_CHROME || undefined });
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
        const box = await selected.locator('.vessel, .target-center').first().evaluate(el => {
          const b = el.getBBox(); return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
        });
        await page.getByRole('button', { name: 'Zoom in', exact: true }).click();
        const center = await page.locator('#diagram svg').evaluate(el => {
          const b = el.viewBox.baseVal; return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
        });
        check(`Zoom centers ${name}`, Math.abs(center.x - box.x) < 1 && Math.abs(center.y - box.y) < 1,
          `expected ${box.x},${box.y}; actual ${center.x},${center.y}`);
        await page.getByRole('button', { name: 'Fit', exact: true }).click();
        if (await selected.locator('.target-center').count()) {
          const pin = await selected.locator('.target-center').boundingBox();
          const targetId = await selected.getAttribute('data-id');
          const otherPin = page.locator(`.plate-target:not([data-id="${targetId}"]) .target-center`).first();
          if (await otherPin.count()) {
            await otherPin.scrollIntoViewIfNeeded();
            const otherBox = await otherPin.boundingBox();
            await page.mouse.click(otherBox.x + otherBox.width/2, otherBox.y + otherBox.height/2);
            check(`Can leave ${name} through the diagram`, (await page.locator('#panel h2').textContent()) !== name);
          }
          await page.locator(`[data-id="${targetId}"] .target-center`).scrollIntoViewIfNeeded();
          const currentPin = await page.locator(`[data-id="${targetId}"] .target-center`).boundingBox();
          await page.mouse.click(currentPin.x + currentPin.width / 2, currentPin.y + currentPin.height / 2);
          check(`Diagram target selects ${name}`, (await page.locator('#panel h2').textContent()) === name);
          await page.locator('#labels').click();
          check(`Source labels shown for ${name}`, await page.locator('#diagram .label-mask').count() === 0);
          await page.locator('#labels').click();
          check(`Source labels hidden for ${name}`, await page.locator('#diagram .label-mask').count() > 0);
          await page.locator('.atlas').screenshot({path: `${output}/target-${await selected.getAttribute('data-id')}.png`});
        }
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
    await page.locator('.structure[aria-label="Left Ventricle"] .vessel, .structure[aria-label="Left Ventricle"] .target-center').first().scrollIntoViewIfNeeded();
    const chamber = await page.locator('.structure[aria-label="Left Ventricle"] .vessel, .structure[aria-label="Left Ventricle"] .target-center').first().boundingBox();
    await page.mouse.click(chamber.x + chamber.width / 2, chamber.y + chamber.height / 2);
    check('Clicking inside a chamber selects it', (await page.locator('#panel h2').textContent()) === 'Left Ventricle');
    // Exercise complete rounds through the UI, including the final result screen.
    await page.setViewportSize({ width: 1440, height: 1050 });
    for (let si = 0; si < 4; si++) {
      await page.getByRole('button', { name: 'Learn', exact: true }).click();
      await page.locator('#tabs button').nth(si).click();
      await page.getByRole('button', { name: 'Quiz yourself', exact: true }).click();
      const total = [30, 38, 10, 21][si];
      const seen = new Set();
      for (let qi = 0; qi < total; qi++) {
        check(`Section ${si+1} question ${qi+1}: labels unavailable in quiz`, await page.locator('#labels').isHidden());
        const target = await page.evaluate(() => ({id: selected.id, name: selected.name, aliases: selected.aliases}));
        seen.add(target.id);
        if (qi === 0) {
          await page.getByRole('button', { name: 'Check answer', exact: true }).click();
          check(`Section ${si+1}: empty answer does not advance`, await page.locator('#show').count() === 1);
        }
        check(`Question does not expose plate notes for ${target.name}`, await page.locator('#plate-credit p').count() === 0);
        const answer = target.aliases[0] || target.name.replace(/\b(Artery|Vein)\b/g, '').trim();
        await page.locator('#answer').fill(answer);
        await page.locator('#answer').press('Enter');
        check(`Quiz accepts ${answer}`, (await page.locator('#feedback').textContent()).startsWith('Correct.'));
        await page.locator('#next').click();
      }
      check(`Section ${si+1}: complete round has no repeats`, seen.size === total);
      check(`Section ${si+1}: perfect score`, (await page.locator('#panel h2').textContent()) === `${total} / ${total} identified`);
      check(`Section ${si+1}: no missed retry for perfect score`, await page.locator('#retry').count() === 0);
      await page.locator('#restart').click();
      check(`Section ${si+1}: restart resets score`, (await page.locator('.stats').textContent()).includes('0 correct'));
      // One miss and one reveal must both appear in the retry round.
      const missedNames = [];
      for (let qi = 0; qi < total; qi++) {
        const name = await page.evaluate(() => selected.name);
        if (qi < 2) missedNames.push(name);
        if (qi === 1) await page.locator('#show').click();
        else {
          await page.locator('#answer').fill(qi === 0 ? 'not an anatomical structure' : name);
          await page.locator('#answer').press('Enter');
        }
        await page.locator('#next').click();
      }
      check(`Section ${si+1}: missed score is exact`, (await page.locator('#panel h2').textContent()) === `${total-2} / ${total} identified`);
      await page.locator('#retry').click();
      const retried = [];
      for (let qi = 0; qi < 2; qi++) {
        const name = await page.evaluate(() => selected.name);
        retried.push(name);
        await page.locator('#answer').fill(name);
        await page.locator('#answer').press('Enter');
        await page.locator('#next').click();
      }
      check(`Section ${si+1}: retry contains only missed and revealed targets`, retried.sort().join('|') === missedNames.sort().join('|'));
      check(`Section ${si+1}: retry score resets`, (await page.locator('#panel h2').textContent()) === '2 / 2 identified');
    }
    await page.getByRole('button', { name: 'Learn', exact: true }).click();
    await page.locator('#tabs button').nth(0).focus();
    for (const [key, index] of [['End',3],['ArrowRight',0],['ArrowLeft',3],['Home',0]]) {
      await page.keyboard.press(key);
      check(`Keyboard tabs: ${key}`, await page.locator('#tabs button').nth(index).getAttribute('aria-selected') === 'true');
    }
    for (const width of [390, 768]) {
      await page.setViewportSize({ width, height: 844 });
      for (let section = 0; section < 4; section++) {
        await page.locator('#tabs button').nth(section).click();
        check(`No page overflow at ${width}px, section ${section+1}`, await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        await page.screenshot({ path: `${output}/width-${width}-section-${section + 1}.png`, fullPage: true });
      }
    }
    await page.getByRole('button', { name: 'Learn', exact: true }).click();
    await page.locator('#tabs button').nth(3).click();
    const keyboardTarget = page.locator('.structure[aria-label="Left Atrium"]');
    await keyboardTarget.focus();
    await page.keyboard.press('Enter');
    check('Keyboard activates and retains focus on diagram target',
      await page.locator('#panel h2').textContent() === 'Left Atrium' &&
      await page.evaluate(() => document.activeElement.getAttribute('aria-label')) === 'Left Atrium');
    const aliases = await page.evaluate(() => sections.flatMap(s=>s.items).flatMap(item => [item.name,...item.aliases].map(answer=>({answer,passed:accepts(answer,item)}))));
    for (const result of aliases) check(`Accepted name: ${result.answer}`, result.passed);
    check('Rejects an explicitly incorrect vessel type', await page.evaluate(() =>
      !accepts('Internal Carotid Vein',sections[0].items.find(i=>i.name==='Internal Carotid Artery')) &&
      !accepts('Femoral Artery',sections[1].items.find(i=>i.name==='Femoral Vein'))));
    for (let i=0;i<12;i++) await page.locator('#zoomin').click();
    check('Zoom respects maximum', await page.evaluate(()=>zoom===4));
    for (let i=0;i<12;i++) await page.locator('#zoomout').click();
    check('Zoom respects minimum', await page.evaluate(()=>zoom===1));
    await page.locator('footer summary').click();
    check('Reference notes expand', await page.locator('footer details').getAttribute('open') !== null);
    await page.locator('footer summary').click();
    check('Reference notes collapse', await page.locator('footer details').getAttribute('open') === null);
    await page.locator('.brand').click();
    check('Brand returns to initial learning view', await page.locator('#learn').getAttribute('aria-pressed') === 'true' && await page.locator('#tabs button').first().getAttribute('aria-selected') === 'true');
    const touchPage = await browser.newPage({ viewport:{width:390,height:844}, isMobile:true, hasTouch:true });
    touchPage.on('pageerror', error => errors.push(error.message));
    await touchPage.goto(url,{waitUntil:'networkidle'});
    for(let si=0;si<4;si++){
      await touchPage.locator('#learn').tap();
      await touchPage.locator('#tabs button').nth(si).tap();
      const termIds=await touchPage.locator('#terms button').evaluateAll(els=>els.map(el=>el.dataset.term));
      for(const id of termIds){
        await touchPage.locator(`[data-term="${id}"]`).tap();
        await touchPage.locator(`[data-id="${id}"] .hit`).tap();
        check(`Mobile tap selects ${id}`, await touchPage.locator(`[data-term="${id}"]`).getAttribute('aria-pressed')==='true');
      }
      await touchPage.locator('#quiz').tap();
      const name=await touchPage.evaluate(()=>selected.name);
      await touchPage.locator('#answer').fill(name);
      await touchPage.getByRole('button',{name:'Check answer',exact:true}).tap();
      check(`Mobile quiz section ${si+1}`, (await touchPage.locator('#feedback').textContent()).startsWith('Correct.'));
      await touchPage.locator('#next').tap();
      await touchPage.locator('#show').tap();
      check(`Mobile reveal section ${si+1}`, (await touchPage.locator('#feedback').textContent()).startsWith('Answer revealed.'));
    }
    await touchPage.close();
    check('No browser errors or failed assets' , errors.length === 0, errors.join('\n'));
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
