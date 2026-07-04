const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.37</span></div>',
  "const APP_VERSION='V13.6.37'",
  "const LS='gta_v12_state'",
  'function renderHome',
  'function speakEnglishText',
  'function speakGreekText',
  'function showTranslationForText',
  'function findTranslationMatch',
  'function collectTranslationPairs',
  'function saveTranslationMatch',
  'function placeTranslatePop',
  'function recordComparePanel',
  'async function toggleRecording',
  'async function saveRecordingClip',
  'async function deleteRecordingClip',
  'function recordDb',
  'recordingBlobs',
  'Save recording',
  'Delete recording',
  'Practice dialogues · direct task',
  'function renderPracticeDirect',
  'function stopRehearsalRecording',
  'function saveRehearsalAndNext',
  'Next without saving',
  'Delete + Redo',
  'function renderSoundDrills',
  'Alphabet + hard sounds',
  'function startSoundCheck',
  'γαύρος',
  'Greek speech recognition',
  'Hardest first',
  'Diphthongs',
  'Hard combos',
  'γάτα',
  'ευχαριστώ',
  'IndexedDB',
  'Tap-to-Translate',
  'Greek → English',
  'English → Greek',
  'xlateGreek',
  'gta-v13-6-37-hard-sounds-diphthongs'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-37-hard-sounds-diphthongs'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.37 — Hard Letters + Diphthongs')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.37"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.33</span>',"APP_VERSION='V13.6.33'",'gta-v13-6-33-record-save-delete','V13.6.32</span>',"APP_VERSION='V13.6.32'",'gta-v13-6-32-translate-record-ux'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v13637.js',script);
try{execSync('node --check /tmp/kathimerina-v13637.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,1000));process.exit(1)}
console.log('GTA V13.6.37 Hard Letters + Diphthongs smoke test passed.');
