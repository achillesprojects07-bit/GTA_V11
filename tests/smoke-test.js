const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.17</span></div>',
  "const APP_VERSION='V13.6.17'",
  "const LS='gta_v12_state'",
  'function buildAdaptiveSession',
  'function dailyConversationCoachCard',
  'function realGreekListeningCard',
  'function conversationMemoryCard',
  'function todayConversationMemory',
  'function startConversationMemory',
  'function ensureA2GrammarGapState',
  'function a2GrammarGapCard',
  'function startA2GrammarGap',
  'function finishA2GrammarGap',
  'function renderA2GrammarGapLibrary',
  'function a2GrammarGapStatsPanel',
  'A2_GRAMMAR_GAP_UNITS',
  'A2 Grammar Gap Repair',
  'g-gap-a2-001',
  'g-gap-a2-008',
  'genitive',
  'prepositions',
  '-μαι verbs',
  'gta-v13-6-17-a2-grammar-gap-repair'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-17-a2-grammar-gap-repair'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.17 — A2 Grammar Gap Repair')){console.error('README heading mismatch');process.exit(1)}
if(!readme.includes('App header shows `Καθημερινά V13.6.17`')){console.error('README verification section mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.17"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.16</span>','APP_VERSION=\'V13.6.16\'','gta-v13-6-16-real-conversation-memory','V13.6.15</span>','APP_VERSION=\'V13.6.15\'','gta-v13-6-15-real-greek-listening'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x)||readme.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/kathimerina-v13617.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v13617.js'],{stdio:'inherit'});
const renderHomeChunk=script.match(/function renderHome\(\)[\s\S]*?function cardMini/);
if(!renderHomeChunk){console.error('renderHome not found');process.exit(1)}
const home=renderHomeChunk[0];
['sixMonthConfidencePanel()','dailyConversationCoachCard()','conversationMemoryCard()','realGreekListeningCard()','a2GrammarGapCard()','adaptiveSessionPanel()'].forEach(x=>{if(!home.includes(x)){console.error('Home missing '+x);process.exit(1)}});
if(!script.includes('state.a2GrammarGapLog.unshift')){console.error('A2 grammar gap log capture missing');process.exit(1)}
if(!script.includes('a2GrammarGapStatsPanel()')){console.error('Progress A2 grammar panel missing');process.exit(1)}
console.log('GTA V13.6.17 Καθημερινά A2 grammar gap repair smoke test passed.');
