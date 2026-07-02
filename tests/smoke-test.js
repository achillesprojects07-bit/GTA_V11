const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.14</span></div>',
  "const APP_VERSION='V13.6.14'",
  "const LS='gta_v12_state'",
  'function buildItems',
  'function nextDueDate',
  'function fieldReady',
  'function speakWithFeedback',
  'function buildAdaptiveSession',
  'function beginAdaptiveSession',
  'function renderGuidedAdaptiveTask',
  'function guidedSessionIsLocked',
  'Start today’s session',
  'Next task',
  'End today’s session',
  'Do you want to continue?',
  'Browse Practice',
  'function startPracticeMode',
  'function examImportPanel',
  'function importExamContentJson',
  'function importedExamCount',
  'function grammarPanel',
  'function stageForecastPanel',
  'function sixMonthConfidencePanel',
  'function dailyConversationCoachCard',
  'function startConversationCoach',
  'function finishConversationCoach',
  'function conversationStats',
  'function startSoloPartnerMission',
  'function markPartnerPractice',
  'function addDailyConfidenceSteps',
  'function renderGuidedGrammarTask',
  'function renderGuidedListeningTask',
  'function renderGuidedPartnerTask',
  'Partner unavailable · Practice with app',
  'Practice with partner',
  'Daily Conversation Coach',
  'Listen → Repeat → Understand → Answer → Record',
  '✓ Natural',
  'I froze',
  '60 minutes/day · best setting',
  'Conversation Coach present',
  'gta-v13-6-14-conversation-coach'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-14-conversation-coach'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.14 — Daily Conversation Coach + Partner/App Practice')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.14"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.13</span>','APP_VERSION=\'V13.6.13\'','gta-v13-6-13-six-month-plan','V13.6.12</span>','APP_VERSION=\'V13.6.12\'','gta-v13-6-12-grammar-forecast','V13.6.10</span>','gta-v13-6-10','V13.6.9</span>','gta-v13-6-9'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/kathimerina-v13614.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v13614.js'],{stdio:'inherit'});
if(!script.includes("addDailyConfidenceSteps(add,remaining,minChoice);")){console.error('Session builder does not inject confidence steps');process.exit(1)}
if(!script.includes("state.settings.dailyMinutes=Number(v)||15")){console.error('Daily minutes setter missing');process.exit(1)}
const renderHomeChunk=script.match(/function renderHome\(\)[\s\S]*?function cardMini/);
if(!renderHomeChunk){console.error('renderHome not found');process.exit(1)}
const home=renderHomeChunk[0];
['sixMonthConfidencePanel()','dailyConversationCoachCard()','adaptiveSessionPanel()','todayCoverageLine()'].forEach(x=>{if(!home.includes(x)){console.error('Home missing '+x);process.exit(1)}});
if(html.includes('Today’s 5 preview')||html.includes('Begin Today’s 5')){console.error('Old Today’s 5 preview still appears');process.exit(1)}
console.log('GTA V13.6.14 Καθημερινά daily conversation coach smoke test passed.');
