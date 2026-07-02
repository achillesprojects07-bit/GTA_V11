
const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.18</span></div>',
  "const APP_VERSION='V13.6.18'",
  "const LS='gta_v12_state'",
  'function buildAdaptiveSession',
  'function dailyConversationCoachCard',
  'function realGreekListeningCard',
  'function conversationMemoryCard',
  'function ensureA2GrammarGapState',
  'function livingGreeceModeCard',
  'function startLivingGreeceMode',
  'function finishLivingGreeceMode',
  'function renderLivingGreeceLibrary',
  'function livingGreeceStatsPanel',
  'LIVING_GREECE_SCENES',
  'Living in Greece Mode',
  'lg-home-001',
  'lg-repair-010',
  'At the pharmacy',
  'Talking to neighbors',
  'gta-v13-6-18-living-in-greece-mode'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-18-living-in-greece-mode'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.18 — Living in Greece Mode')){console.error('README heading mismatch');process.exit(1)}
if(!readme.includes('App header shows `Καθημερινά V13.6.18`')){console.error('README verification section mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.18"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.17</span>','APP_VERSION=\'V13.6.17\'','gta-v13-6-17-a2-grammar-gap-repair','V13.6.16</span>','APP_VERSION=\'V13.6.16\'','gta-v13-6-16-real-conversation-memory'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x)||readme.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/kathimerina-v13618.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v13618.js'],{stdio:'inherit'});
const renderHomeChunk=script.match(/function renderHome\(\)[\s\S]*?function cardMini/);
if(!renderHomeChunk){console.error('renderHome not found');process.exit(1)}
const home=renderHomeChunk[0];
['sixMonthConfidencePanel()','dailyConversationCoachCard()','conversationMemoryCard()','livingGreeceModeCard()','realGreekListeningCard()','a2GrammarGapCard()','adaptiveSessionPanel()'].forEach(x=>{if(!home.includes(x)){console.error('Home missing '+x);process.exit(1)}});
if(!script.includes('state.livingGreeceLog.unshift')){console.error('Living Greece log capture missing');process.exit(1)}
if(!script.includes('livingGreeceStatsPanel()')){console.error('Progress Living Greece panel missing');process.exit(1)}
console.log('GTA V13.6.18 Καθημερινά Living in Greece Mode smoke test passed.');
