const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const context = vm.createContext({});
for (const file of ['data.js','atlas.js']) vm.runInContext(fs.readFileSync(`${__dirname}/${file}`,'utf8'), context);
const sections = vm.runInContext('sections',context);
const plates = vm.runInContext('textbookPlates',context);
assert.deepEqual(Array.from(sections,s=>s.items.length),[30,38,10,21]);
const ids = new Set();
for(const section of sections) for(const item of section.items){
 assert(!ids.has(item.id),`Duplicate ${item.id}`);ids.add(item.id);
 const plate=plates[item.plate];assert(plate,`Missing plate for ${item.name}`);
 const [x,y]=item.anchor,[cx,cy,w,h]=plate.crop;
 assert(x>=cx&&x<=cx+w&&y>=cy&&y<=cy+h,`Target outside crop: ${item.name}`);
 assert(section.views[item.view],`Missing view: ${item.name}`);
 for(const field of ['name','location','job','key']) assert(item[field],`${item.name}: empty ${field}`);
 assert(fs.statSync(`${__dirname}/plates/${plate.file}`).size>1000);
}
console.log('PASS: 99 unique, complete course terms, sourced plates, and targets inside their intended crops.');
