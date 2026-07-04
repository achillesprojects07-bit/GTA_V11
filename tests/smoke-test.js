const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.41</span></div>',
  "const APP_VERSION='V13.6.41'",
  "const LS='gta_v12_state'",
  'function renderHome',
  'function renderGuidedDialogueTask',
  'function startGuidedTurnsPractice',
  'function renderGuidedTurnsPracticePanel',
  'function recordGuidedTurn',
  'function cancelAppAudioForRecording',
  'function isMicRecording',
  'Stop recording before playing the model voice',
  'Recording only your voice',
  'This is your voice only',
  'function saveGuidedTurnAndNext',
  'Next without saving',
  'Delete + redo',
  'Practice my turns',
  'function renderSoundDrills',
  'Alphabet + hard sounds',
  'γαύρος',
  'Greek speech recognition',
  'Tap-to-Translate',
  'function saveTranslationMatch',
  'async function saveRecordingClip',
  'async function deleteRecordingClip',
  'gta-v13-6-41-review-weakspots-fallback'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-41-review-weakspots-fallback'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.41 — Review Weak Spots Fallback Fix')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.41"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.38</span>',"APP_VERSION='V13.6.38'",'gta-v13-6-38-guided-turns-repair'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v13639.js',script);
try{execSync('node --check /tmp/kathimerina-v13639.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,1000));process.exit(1)}
console.log('GTA V13.6.41 Review Weak Spots Fallback Fix smoke test passed.');
