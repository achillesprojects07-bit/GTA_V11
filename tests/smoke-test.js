const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V14.12</span></div>',
  "const APP_VERSION='V14.12'",
  "const LS='gta_v12_state'",
  'V14.7A Full Ladder Audit',
  'V14.10 Full Worksheet Volume Fill by Level',
  'V14.11 Strict Mastery Lock + Unlock Enforcement',
  'V14.12 Tutor / Partner Correction Mode',
  'v1411StrictMastered',
  'v1411PrereqsMet',
  'v1412StartTutor',
  'v1412MarkTutor',
  'v1412TutorPanel',
  'Partner correction supports pronunciation and speaking confidence',
  'Three tries are enough',
  'partner review supports mastery, it never bypasses it',
  'gta-v14-12-tutor-partner-correction-mode',
  'c0_vowels',
  "unit:'L0.01'",
  "id:'c0_gavros'",
  "unit:'L0.10'"
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v14-12-tutor-partner-correction-mode'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V14.12 — Tutor / Partner Correction Mode')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"14.12.0"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V14.11';",'<span class="versionMini">V14.11</span>','gta-v14-11-strict-mastery-lock-unlock'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
let scripts=[];let pos=0;
while(true){let s=html.indexOf('<script>',pos);if(s<0)break;let e=html.indexOf('</script>',s);if(e<0){console.error('Unclosed script');process.exit(1)}scripts.push(html.slice(s+8,e));pos=e+9}
if(scripts.length<5){console.error('Expected main script plus V14 extension scripts');process.exit(1)}
scripts.forEach((script,i)=>{let f=`/tmp/kathimerina-v14-12-${i}.js`;fs.writeFileSync(f,script);try{execSync(`node --check ${f}`,{stdio:'pipe'});}catch(e){console.error(`SYNTAX ERROR script ${i}:\n`+e.stderr.toString().slice(0,3000));process.exit(1)}});
const afterHtml=html.slice(html.lastIndexOf('</html>')+'</html>'.length).trim();
if(afterHtml){console.error('Code/text found after </html>; extension scripts must be executable, not plain text.');process.exit(1)}
const auditBlock=html.slice(html.indexOf('const V147A_LADDER'));
if(auditBlock.indexOf("id:'c0_vowels'")<0||auditBlock.indexOf("id:'c0_gavros'")<0||auditBlock.indexOf("id:'c0_vowels'")>auditBlock.indexOf("id:'c0_gavros'")){console.error('V14.7A ladder order incorrect: γαύρος appears before vowels in audited ladder');process.exit(1)}
if(html.indexOf('window.v1412StartTutor')<html.indexOf('V14.11 Strict Mastery Lock + Unlock Enforcement')){console.error('V14.12 extension should be after V14.11');process.exit(1)}
console.log('Καθημερινά V14.12 Tutor / Partner Correction Mode smoke test passed.');
