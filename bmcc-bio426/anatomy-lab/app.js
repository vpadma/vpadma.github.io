let showLabels=false;
let zoomCenter=null;
const $=id=>document.getElementById(id);
let section=0,mode='learn',selected=sections[0].items[0],view=0,zoom=1,queue=[],position=0,correct=0,missed=[],answered=false,reveal=false;
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function normalize(s){return s.toLowerCase().normalize('NFKD').replace(/\([^)]*\)/g,'').replace(/[’']/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\b(arteries|artery|veins|vein)\b/g,'').replace(/\s+/g,' ').trim();}
function accepts(value,item){if(item.vesselType==='artery'&&/\bveins?\b/i.test(value))return false;if(item.vesselType==='vein'&&/\b(artery|arteries)\b/i.test(value))return false;const n=normalize(value);return !!n&&[item.name,...item.aliases].some(a=>normalize(a)===n);}
function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
function startQuiz(items=sections[section].items){mode='quiz';queue=shuffle(items);position=0;correct=0;missed=[];answered=false;reveal=false;setTarget();render();}
function setTarget(){selected=queue[position]||queue[queue.length-1];if(selected){view=selected.view;zoom=1;}answered=false;reveal=false;}
function chooseSection(index){section=index;view=0;zoom=1;selected=sections[section].items[0];if(mode==='quiz')startQuiz();else render();}
function chooseItem(item){selected=item;view=item.view;zoomCenter=null;render();}
function draw(){drawPlate();}
function drawPlate(){
 const plate=textbookPlates[selected.plate], quiz=mode==='quiz', labels=showLabels&&!quiz;
 $('labels').hidden=quiz;
 $('labels').textContent=labels?'Hide labels':'Show labels';
 $('labels').setAttribute('aria-pressed',String(labels));
 $('orientation').textContent=plate.orientation;
 const crop=labels?(plate.labeledCrop||[0,0,...plate.size]):plate.crop;
 const [x,y,w,h]=crop;
 if(zoom===1)zoomCenter=null;
 const center=zoomCenter||selected.anchor;
 const cx=zoom>1?center[0]:x+w/2, cy=zoom>1?center[1]:y+h/2;
 const bounds=$('diagram').getBoundingClientRect();
 const pixelsPerUnit=Math.min(bounds.width/(w/zoom),bounds.height/(h/zoom));
 const selectedRadius=14/pixelsPerUnit;
 const visible=sections[section].items.filter(i=>i.plate===selected.plate);
 $('diagram').innerHTML=`<svg viewBox="${cx-w/zoom/2} ${cy-h/zoom/2} ${w/zoom} ${h/zoom}" xmlns="http://www.w3.org/2000/svg" aria-label="Interactive anatomy plate">
 <defs><clipPath id="plate-clip"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath></defs><g clip-path="url(#plate-clip)">
 <image href="plates/${plate.file}" width="${plate.size[0]}" height="${plate.size[1]}"/>
 ${labels?'':plate.masks.map(([mx,my,mw,mh])=>`<rect class="label-mask" x="${mx}" y="${my}" width="${mw}" height="${mh}" fill="white"/>`).join('')}</g>
 ${visible.filter(i=>!quiz||i===selected).map(i=>`<g class="structure plate-target ${i===selected?'is-selected':''}" data-id="${i.id}" ${quiz?'':`tabindex="0" role="button" aria-label="${escapeHTML(i.name)}"`}>
 ${i===selected?`<circle class="selection-pulse" cx="${i.anchor[0]}" cy="${i.anchor[1]}" r="${selectedRadius}"/><circle class="selection-outline" cx="${i.anchor[0]}" cy="${i.anchor[1]}" r="${selectedRadius}"/>`:''}
 <circle class="${i===selected?'selected-halo':'locator-ring'}" cx="${i.anchor[0]}" cy="${i.anchor[1]}" r="${i===selected?selectedRadius:7}"/>
 <circle class="target-center" cx="${i.anchor[0]}" cy="${i.anchor[1]}" r="2"/>
 <circle class="hit" cx="${i.anchor[0]}" cy="${i.anchor[1]}" r="20"/>
 ${quiz?'':`<title>${escapeHTML(i.name)}</title>`}</g>`).join('')}</svg>`;
 if(!quiz)$('diagram').querySelectorAll('.structure').forEach(el=>{
   const action=()=>{const id=el.dataset.id;chooseItem(visible.find(i=>i.id===id));$('diagram').querySelector(`[data-id="${id}"]`).focus({preventScroll:true});};
   el.onclick=action;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();action();}};
 });
 let caption=$('plate-credit');
 if(!caption){caption=document.createElement('div');caption.id='plate-credit';$('diagram').after(caption);}
 caption.innerHTML=`${quiz&&!reveal?'':`<p>${plate.note}</p>`}<a href="${plate.source}" target="_blank" rel="noreferrer">${plate.credit}</a> · ${plate.license}`;
}
$('diagram').addEventListener('wheel',e=>{
 // Leave browser pinch-to-zoom and horizontal page gestures available.
 if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)||!e.deltaY)return;
 const svg=$('diagram').querySelector('svg'), matrix=svg?.getScreenCTM();
 if(!matrix)return;
 e.preventDefault();
 const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?$('diagram').clientHeight:1);
 const next=Math.max(1,Math.min(4,zoom*Math.exp(-Math.max(-100,Math.min(100,delta))*.002)));
 if(next===zoom)return;
 const point=new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse());
 const box=svg.viewBox.baseVal, ratio=zoom/next;
 zoomCenter=[point.x+(box.x+box.width/2-point.x)*ratio,point.y+(box.y+box.height/2-point.y)*ratio];
 zoom=next;
 draw();
},{passive:false});
$('labels').onclick=()=>{showLabels=!showLabels;zoom=1;draw();};
function detail(item){return `<span class="badge">STRUCTURE ${sections[section].items.indexOf(item)+1} / ${sections[section].items.length}</span><h2>${escapeHTML(item.name)}</h2><h3>Where to find it</h3><p>${item.location}</p><h3>What it does</h3><p>${item.job}</p><div class="key"><strong>Remember this</strong>${item.key}</div>`;}
function renderPanel(){const panel=$('panel');if(mode==='learn'){panel.innerHTML=detail(selected)+`<p class="help">Select a marked structure to explore. Use + to focus on your selection, or scroll over the image to zoom.</p>`;return;}
if(position>=queue.length){panel.innerHTML=`<span class="badge">ROUND COMPLETE</span><h2>${correct} / ${queue.length} identified</h2><p>${missed.length?'Review the structures below, then try them again.':'You identified every structure in this round.'}</p>${missed.length?`<h3>To revisit</h3><p>${missed.map(i=>escapeHTML(i.name)).join('<br>')}</p>`:''}<div class="actions"><button class="primary" id="restart">New full round</button>${missed.length?'<button class="secondary" id="retry">Retry missed</button>':''}</div>`;$('restart').onclick=()=>startQuiz();if($('retry'))$('retry').onclick=()=>startQuiz([...missed]);return;}
panel.innerHTML=`<div class="stats"><span>Question ${position+1} of ${queue.length}</span><span>${correct} correct</span></div><div class="progress"><span style="width:${position/queue.length*100}%"></span></div><span class="badge">IDENTIFY THE HIGHLIGHTED STRUCTURE</span><h2>What is this called?</h2><p class="help">Identify the structure at the center of the bright amber ring. Zoom in for a closer look.</p><form id="answer-form"><label for="answer">Your answer</label><input id="answer" name="answer" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type the structure’s name" ${answered?'disabled':''}><p class="help">Common names and abbreviations accepted. “Artery” and “vein” are optional.</p><div class="actions">${answered?'<button class="primary" type="button" id="next">'+(position===queue.length-1?'See results':'Next structure')+'</button>':'<button class="primary" type="submit">Check answer</button><button class="secondary" type="button" id="show">Reveal answer</button>'}</div></form><div id="feedback" aria-live="polite"></div>`;
$('answer-form').onsubmit=e=>{e.preventDefault();const input=$('answer').value;if(input.trim())grade(input);else $('answer').focus();};if($('show'))$('show').onclick=()=>grade(null);if($('next'))$('next').onclick=()=>{position++;setTarget();render();if($('answer'))$('answer').focus();};}
function grade(answer){if(answered)return;const ok=answer!==null&&accepts(answer,selected);answered=true;reveal=true;if(ok)correct++;else missed.push(selected);renderPanel();$('answer').value=answer||'';$('feedback').innerHTML=`<strong class="${ok?'correct':'incorrect'}">${ok?'Correct.':answer===null?'Answer revealed.':'Not quite.'}</strong><p><strong>${escapeHTML(selected.name)}</strong></p><p>${selected.job}</p><p class="help">${selected.key}</p>`;draw();$('next').focus();}
function render(){const s=sections[section];$('learn').setAttribute('aria-pressed',mode==='learn');$('quiz').setAttribute('aria-pressed',mode==='quiz');$('tabs').innerHTML=sections.map((x,i)=>`<button role="tab" id="tab-${i}" aria-controls="workspace" aria-selected="${section===i}" tabindex="${section===i?0:-1}"><span class="tabnum">0${i+1}</span>${x.title}</button>`).join('');$('tabs').querySelectorAll('button').forEach((b,i)=>{b.onclick=()=>chooseSection(i);b.onkeydown=e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%4;else if(e.key==='ArrowLeft')n=(i+3)%4;else if(e.key==='Home')n=0;else if(e.key==='End')n=3;else return;e.preventDefault();chooseSection(n);$('tab-'+n).focus();};});$('workspace').setAttribute('aria-labelledby',`tab-${section}`);$('section-title').textContent=s.subtitle;$('section-caption').textContent=mode==='learn'?'EXPLORE & UNDERSTAND':'ACTIVE RECALL';$('count').textContent=s.items.length+' structures';$('views').innerHTML=mode==='quiz'?'<span class="help">Identify the marked structure</span>':s.views.map((v,i)=>`<button aria-pressed="${i===view}" ${mode==='quiz'?'disabled':''}>${v}</button>`).join('');$('views').querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{view=i;selected=s.items.find(x=>x.view===view);zoom=1;render();});$('term-section').classList.toggle('hidden',mode==='quiz');$('terms').innerHTML=mode==='learn'?s.items.map(i=>`<button aria-pressed="${i===selected}" data-term="${i.id}">${escapeHTML(i.name)}</button>`).join(''):'';$('terms').querySelectorAll('button').forEach(b=>b.onclick=()=>{const id=b.dataset.term;chooseItem(s.items.find(i=>i.id===id));$('terms').querySelector(`[data-term="${id}"]`).focus({preventScroll:true});});renderPanel();draw();}
$('learn').onclick=()=>{mode='learn';selected=selected||sections[section].items[0];view=selected.view;render();};$('quiz').onclick=()=>{if(mode!=='quiz')startQuiz();};$('zoomin').onclick=()=>{zoomCenter=null;zoom=Math.min(4,zoom+.5);draw();};$('zoomout').onclick=()=>{zoom=Math.max(1,zoom-.5);draw();};$('resetzoom').onclick=()=>{zoom=1;draw();};render();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'start_anatomy_quiz',description:'Start a fresh identification quiz for one of the four anatomy sections.',inputSchema:{type:'object',properties:{section:{type:'integer',minimum:1,maximum:4}},required:['section'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!Number.isInteger(input.section)||input.section<1||input.section>4)throw new Error('section must be 1–4');section=input.section-1;startQuiz();return {section:sections[section].title,questions:queue.length};}})).catch(()=>{});}catch{}}

window.addEventListener('resize',draw);
