const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V14.7A</span></div>',
  "const APP_VERSION='V14.7A'",
  "const LS='gta_v12_state'",
  'V14.7A Full Ladder Audit',
  'V14.7A — Full Ladder Audit + Foundation-First Fix',
  'c0_vowels',
  "unit:'L0.01'",
  "id:'c0_gavros'",
  "unit:'L0.10'",
  'v147aSortedConcepts',
  'v147aPrereqsMet',
  'v147aLadderAuditPanel',
  'gta-v14-7a-ladder-audit-foundation-first',
  'Listening + Speaking Worksheet Engine',
  'Concept study is outside the worksheet timer',
  'Corrections are outside the worksheet timer'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v14-7a-ladder-audit-foundation-first'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V14.7A — Full Ladder Audit + Foundation-First Fix')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"14.7.1"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V14.7';",'<span class="versionMini">V14.7</span>','gta-v14-7-listening-speaking-worksheet-engine'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v14-7a.js',script);
try{execSync('node --check /tmp/kathimerina-v14-7a.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,3000));process.exit(1)}
const auditBlock=html.slice(html.indexOf("const V147A_LADDER"));
if(auditBlock.indexOf("id:'c0_vowels'")<0||auditBlock.indexOf("id:'c0_gavros'")<0||auditBlock.indexOf("id:'c0_vowels'")>auditBlock.indexOf("id:'c0_gavros'")){console.error('V14.7A ladder order incorrect: γαύρος appears before vowels in audited ladder');process.exit(1)}
console.log('Καθημερινά V14.7A Ladder Audit smoke test passed.');
