const fs = require('node:fs');
const crypto = require('node:crypto');
const path = require('node:path');
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
for (const file of ['style.css', 'data.js', 'atlas.js', 'app.js']) {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname, file))).digest('hex').slice(0, 12);
  const attribute = file.endsWith('.css') ? 'href' : 'src';
  const pattern = new RegExp(`${attribute}="${file.replace('.', '\\.')}[^\"]*"`);
  if (!pattern.test(html)) throw new Error(`Missing asset: ${file}`);
  html = html.replace(pattern, `${attribute}="${file}?v=${hash}"`);
}
fs.writeFileSync(indexPath, html);
console.log('Updated content versions for all application assets.');
