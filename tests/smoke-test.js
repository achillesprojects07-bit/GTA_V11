const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.15</span></div>',
  "const APP_VERSION='V13.6.15'",
  "const LS='gta_v12_state'",
  'function buildAdaptiveSession',
  'function dailyConversationCoachCard',
  'function startConversationCoach',
  'function realGreekListeningCard',
  'function todayRealGreekListeningScene',
  'function renderRealGreekListening',
  'function finishRealGreekListening',
  'function startRealGreekListeningPractice',
  'function speakGreekListeningText',
  'Understanding Real Greek',
  'Slow listening',
  'Normal speed',
  'Reveal text + questions',
  'I caught words',
  'I got the main idea',
  'I understood most',
  'gta-v13-6-15-real-greek-listening'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-15-real-greek-listening'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.15 — Understanding Real Greek Listening')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.15"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.14</span>','APP_VERSION=\'V13.6.14\'','gta-v13-6-14-conversation-coach','V13.6.13</span>','APP_VERSION=\'V13.6.13\'','gta-v13-6-13-six-month-plan'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/kathimerina-v13615.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v13615.js'],{stdio:'inherit'});
const renderHomeChunk=script.match(/function renderHome\(\)[\s\S]*?function cardMini/);
if(!renderHomeChunk){console.error('renderHome not found');process.exit(1)}
const home=renderHomeChunk[0];
['sixMonthConfidencePanel()','dailyConversationCoachCard()','realGreekListeningCard()','adaptiveSessionPanel()'].forEach(x=>{if(!home.includes(x)){console.error('Home missing '+x);process.exit(1)}});
if(!script.includes('completeGuidedListeningLadder')){console.error('Guided listening ladder fallback missing');process.exit(1)}
console.log('GTA V13.6.15 Καθημερινά understanding real Greek listening smoke test passed.');
