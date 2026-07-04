const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.31</span></div>',
  "const APP_VERSION='V13.6.31'",
  "const LS='gta_v12_state'",
  'function renderHome',
  'function stepHowTo',
  'function practiceModeHowTo',
  'function speakEnglishText',
  'function speakGreekText',
  'function showTranslationForText',
  'function findTranslationMatch',
  'function collectTranslationPairs',
  'function saveTranslationMatch',
  'Tap-to-Translate',
  'Greek → English',
  'English → Greek',
  'Save to review',
  'xlateGreek',
  'gta-v13-6-31-tap-to-translate'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-31-tap-to-translate'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.31 — Tap-to-Translate Everywhere')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.31"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.30</span>',"APP_VERSION='V13.6.30'",'gta-v13-6-30-scores-english-voice'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v13631.js',script);
try{execSync('node --check /tmp/kathimerina-v13631.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,1000));process.exit(1)}
console.log('GTA V13.6.31 Tap-to-Translate smoke test passed.');
