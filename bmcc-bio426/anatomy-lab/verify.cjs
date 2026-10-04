const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map();function el(){return {innerHTML:'',textContent:'',value:'',setAttribute(){},classList:{toggle(){}},focus(){},querySelectorAll(){return []},querySelector(s){return s==='svg'?{setAttribute(){}}:null;}}}
const document={getElementById(id){if(!elements.has(id))elements.set(id,el());return elements.get(id);}};
const ctx=vm.createContext({document,console});vm.runInContext(fs.readFileSync(__dirname+'/data.js','utf8')+'\n'+fs.readFileSync(__dirname+'/app.js','utf8'),ctx);
vm.runInContext(`
if(JSON.stringify(sections.map(s=>s.items.length))!=='[30,38,10,21]')throw Error('Missing terms');
for(const s of sections)for(const item of s.items){if(!item.path||!item.job||!item.location||!item.key||!s.views[item.view])throw Error('Incomplete '+item.name);if(!accepts(item.name,item))throw Error('Canonical answer failed');for(const alias of item.aliases)if(!accepts(alias,item))throw Error('Alias failed');}
const carotid=sections[0].items.find(i=>i.name==='Internal Carotid Artery');
for(const answer of ['Internal Carotid',' internal CAROTID artery ','internal-carotid artery'])if(!accepts(answer,carotid))throw Error('Normalization failed');
for(const answer of ['Carotid','External Carotid','Internal',''])if(accepts(answer,carotid))throw Error('Overly permissive matching');
for(let s=0;s<4;s++){chooseSection(s);startQuiz();if(new Set(queue.map(i=>i.id)).size!==sections[s].items.length)throw Error('Repeat in quiz');const total=queue.length;while(position<total){grade(selected.name);grade(selected.name);position++;setTarget();render();}if(correct!==total||missed.length)throw Error('Scoring failed');}
chooseSection(0);startQuiz();grade('wrong answer');if(missed.length!==1||correct!==0)throw Error('Miss tracking failed');startQuiz([...missed]);if(queue.length!==1)throw Error('Retry failed');
console.log('PASS: 99 complete terms, all canonical names and aliases, strict carotid distinctions, four full rounds, duplicate-submit protection, missed-term retry.');
`,ctx);
for(const file of ['index.html','style.css','data.js','app.js'])assert(fs.statSync(__dirname+'/'+file).size>0);
