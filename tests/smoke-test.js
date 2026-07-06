const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V14.8</span></div>',
  "const APP_VERSION='V14.8'",
  "const LS='gta_v12_state'",
  'V14.7A Full Ladder Audit',
  'V14.8 Reading + A1/A2 Comprehension Worksheet Engine',
  'c0_vowels',
  "unit:'L0.01'",
  "id:'c0_gavros'",
  "unit:'L0.10'",
  'v147aSortedConcepts',
  'v147aPrereqsMet',
  'v147aLadderAuditPanel',
  'v148GenerateReadingQuestions',
  'v148StartReading',
  'readingVersion:VERSION',
  'Reading comprehension bank',
  'gta-v14-8-reading-a1-a2-comprehension',
  'Concept study is outside the worksheet timer',
  'Corrections are outside the worksheet timer'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v14-8-reading-a1-a2-comprehension'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V14.8 — Reading + A1/A2 Comprehension Worksheet Engine')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"14.8.0"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V14.7A';",'<span class="versionMini">V14.7A</span>','gta-v14-7a-ladder-audit-foundation-first'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
let scripts=[];let pos=0;
while(true){let s=html.indexOf('<script>',pos);if(s<0)break;let e=html.indexOf('</script>',s);if(e<0){console.error('Unclosed script');process.exit(1)}scripts.push(html.slice(s+8,e));pos=e+9}
if(scripts.length<2){console.error('Expected main script plus V14.7A/V14.8 extension script');process.exit(1)}
scripts.forEach((script,i)=>{let f=`/tmp/kathimerina-v14-8-${i}.js`;fs.writeFileSync(f,script);try{execSync(`node --check ${f}`,{stdio:'pipe'});}catch(e){console.error(`SYNTAX ERROR script ${i}:\n`+e.stderr.toString().slice(0,3000));process.exit(1)}});
const afterHtml=html.slice(html.lastIndexOf('</html>')+'</html>'.length).trim();
if(afterHtml){console.error('Code/text found after </html>; extension scripts must be executable, not plain text.');process.exit(1)}
const auditBlock=html.slice(html.indexOf('const V147A_LADDER'));
if(auditBlock.indexOf("id:'c0_vowels'")<0||auditBlock.indexOf("id:'c0_gavros'")<0||auditBlock.indexOf("id:'c0_vowels'")>auditBlock.indexOf("id:'c0_gavros'")){console.error('V14.7A ladder order incorrect: γαύρος appears before vowels in audited ladder');process.exit(1)}
if(auditBlock.indexOf('V14.8 Reading + A1/A2')<0){console.error('V14.8 extension missing after ladder audit');process.exit(1)}
console.log('Καθημερινά V14.8 Reading Comprehension smoke test passed.');
