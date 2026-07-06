const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V14.7</span></div>',
  "const APP_VERSION='V14.7'",
  "const LS='gta_v12_state'",
  'V14.1','V14.2','V14.3','V14.4','V14.4A','V14.5','V14.6',
  'V14.7 Listening + Speaking Worksheet Engine',
  'v147GenerateLSQuestions','v147StartListeningSpeaking','v147Panel','v147OpenLibrary','v147RoadmapPanel',
  'listenChoose','listenType','shadow','speakingTurn','dialogueTurn',
  'listeningVersion:\'V14.7\'',
  'gta-v14-7-listening-speaking-worksheet-engine',
  '60-minute worksheet block now includes',
  'Concept study is outside the worksheet timer',
  'Corrections are outside the worksheet timer'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v14-7-listening-speaking-worksheet-engine'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V14.7 — Listening + Speaking Worksheet Engine')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"14.7.0"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V13.6.44'",'gta-v13-6-44-weakspots-warmup','Jump to today’s worksheet','<span class="versionMini">V14.6</span>','gta-v14-6-accent-lab-sound-ladder'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v14-7.js',script);
try{execSync('node --check /tmp/kathimerina-v14-7.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,3000));process.exit(1)}
console.log('Καθημερινά V14.7 Listening + Speaking smoke test passed.');
