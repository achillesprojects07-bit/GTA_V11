const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V15.0</span></div>',
  "const APP_VERSION='V15.0'",
  "const LS='gta_v12_state'",
  'V14.7A Full Ladder Audit',
  'V14.10 Full Worksheet Volume Fill by Level',
  'V14.11 Strict Mastery Lock + Unlock Enforcement',
  'V14.12 Tutor / Partner Correction Mode',
  'V14.13 Writing + Sentence Production Engine',
  'V14.14 · A1/A2 Exam Simulation Layer',
  'V15.0 · True Greek Fluency Path',
  'v150ContinuePath',
  'v150OpenCommandCenter',
  'v150CommandPanel',
  'Library study → timed worksheet answer-work → correction outside timer → repetition outside timer',
  'gta-v15-0-true-greek-fluency-path',
  'c0_vowels',
  "unit:'L0.01'",
  "id:'c0_gavros'",
  "unit:'L0.10'"
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v15-0-true-greek-fluency-path'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V15.0 — True Greek Fluency Path')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"15.0.0"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V14.14';",'<span class="versionMini">V14.14</span>','gta-v14-14-exam-simulation-layer'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
let scripts=[];let pos=0;
while(true){let s=html.indexOf('<script',pos);if(s<0)break;let start=html.indexOf('>',s);let e=html.indexOf('</script>',start);if(e<0){console.error('Unclosed script');process.exit(1)}scripts.push(html.slice(start+1,e));pos=e+9}
if(scripts.length<8){console.error('Expected main script plus V14/V15 extension scripts');process.exit(1)}
scripts.forEach((script,i)=>{let f=`/tmp/kathimerina-v15-${i}.js`;fs.writeFileSync(f,script);try{execSync(`node --check ${f}`,{stdio:'pipe'});}catch(e){console.error(`SYNTAX ERROR script ${i}:\n`+e.stderr.toString().slice(0,3000));process.exit(1)}});
const afterHtml=html.slice(html.lastIndexOf('</html>')+'</html>'.length).trim();
if(afterHtml){console.error('Code/text found after </html>; extension scripts must be executable, not plain text.');process.exit(1)}
const auditBlock=html.slice(html.indexOf('const V147A_LADDER'));
if(auditBlock.indexOf("id:'c0_vowels'")<0||auditBlock.indexOf("id:'c0_gavros'")<0||auditBlock.indexOf("id:'c0_vowels'")>auditBlock.indexOf("id:'c0_gavros'")){console.error('V14.7A ladder order incorrect: γαύρος appears before vowels in audited ladder');process.exit(1)}
if(html.indexOf('window.v150ContinuePath')<html.indexOf('V14.14 · A1/A2 Exam Simulation Layer')){console.error('V15.0 extension should be after V14.14');process.exit(1)}
console.log('Καθημερινά V15.0 True Greek Fluency Path smoke test passed.');
