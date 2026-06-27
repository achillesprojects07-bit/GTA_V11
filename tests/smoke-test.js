const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.3</span></div>',
  "const APP_VERSION='V13.6.3'",
  "const LS='gta_v12_state'",
  'function buildItems',
  'function nextDueDate',
  'function fieldReady',
  'function speakWithFeedback',
  'function buildAdaptiveSession',
  'function beginAdaptiveSession',
  'function renderGuidedAdaptiveTask',
  'function renderGuidedCardTask',
  'function renderGuidedQuizTask',
  'function renderGuidedDialogueTask',
  'Start today’s session',
  'Next →',
  'End today’s session',
  'Browse Practice',
  'Choose freely. Today’s guided session is separate.',
  'Practice is now clarified as optional Browse Practice',
  'function quizHubPanel',
  'function startDialogueList',
  'function playDialogueConversation',
  'function startDialogueRehearsal',
  'DATA.dialogues',
  'dlg_w1_25','dlg_w2_25','dlg_w3_25','dlg_w4_20','dlg_w5_15',
  'function examImportPanel',
  'function importExamContentJson',
  'function phraseOfDayPanel',
  'function dialogueReviewProgressPanel',
  'state.adaptiveSession',
  'return [5,15,30,45,60].includes(v)?v:15',
  '[5,15,30,45,60].map',
  'addDialogueRehearsals(minChoice>=60?2:1)',
  'gta-v13-6-3-guided-daily-flow'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-3-guided-daily-flow'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.3 — Guided Daily Flow Repair')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.3"')){console.error('Package version mismatch');process.exit(1)}
if(html.includes('V13.6.2')||html.includes('gta-v13-6-2')||html.includes('extended adaptive session release')){console.error('Old V13.6.2 labels remain');process.exit(1)}
if(html.includes('Priority-ordered for ${s.minutes} minutes')||html.includes('startAdaptiveStep(')||html.includes('markAdaptiveStepDone(')){console.error('Old checklist session UX remains');process.exit(1)}
if(html.includes('One practice room, four depths')||html.includes('Suggested path, not a gate')||html.includes('Practice partner roleplay')){console.error('Confusing Practice copy remains');process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/kathimerina-v1363.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v1363.js'],{stdio:'inherit'});
const dlgIds=[...html.matchAll(/id:'(dlg_[^']+)'/g)].map(m=>m[1]);
if(new Set(dlgIds).size!==dlgIds.length){console.error('Duplicate dialogue ids found');process.exit(1)}
if((html.match(/id:'dlg_w1_/g)||[]).length!==25){console.error('Wave 1 count mismatch');process.exit(1)}
if((html.match(/id:'dlg_w2_/g)||[]).length!==25){console.error('Wave 2 count mismatch');process.exit(1)}
if((html.match(/id:'dlg_w3_/g)||[]).length!==25){console.error('Wave 3 count mismatch');process.exit(1)}
if((html.match(/id:'dlg_w4_/g)||[]).length!==20){console.error('Wave 4 count mismatch');process.exit(1)}
if((html.match(/id:'dlg_w5_/g)||[]).length!==15){console.error('Wave 5 count mismatch');process.exit(1)}
const renderHomeChunk=script.match(/function renderHome\(\)[\s\S]*?function cardMini/);
if(!renderHomeChunk){console.error('renderHome not found');process.exit(1)}
const home=renderHomeChunk[0];
['phoneUxMini()','capturesToTranslatePanel()','conversationTierPanel()'].forEach(x=>{if(home.includes(x)){console.error('Home clutter remains: '+x);process.exit(1)}});
console.log('GTA V13.6.3 Καθημερινά guided-daily-flow smoke test passed.');
