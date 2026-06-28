const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.8</span></div>',
  "const APP_VERSION='V13.6.8'",
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
  'Extra practice, not today’s guided path.',
  'Each button starts the exact activity it names.',
  'Choose one. It starts immediately.',
  'function startPracticeMode',
  'function startDuePractice',
  'function renderPracticeCategoryBrowser',
  'function showPracticeCategory',
  'Back to Today’s session',
  'No hidden second step',
  'function coverageProgressPanel',
  'function todayCoverageLine',
  'function adaptiveCoverageItems',
  'function adaptiveCoverageDialogues',
  'Next coverage:',
  'state.coverage',
  'Coverage progression',
  'function quizHubPanel',
  'function startDialogueList',
  'function playDialogueConversation',
  'function startDialogueRehearsal',
  'DATA.dialogues',
  'dlg_w1_25','dlg_w2_25','dlg_w3_25','dlg_w4_20','dlg_w5_15',
  'function examImportPanel',
  'function importExamContentJson',
  'function phraseOfDayPanel',
  'return [5,15,30,45,60].includes(v)?v:15',
  '[5,15,30,45,60].map',
  "gta-v13-6-8-learning-path-flow"
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-8-learning-path-flow'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.8 — Learning Path Flow Repair')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.8"')){console.error('Package version mismatch');process.exit(1)}
if(html.includes('V13.6.7')||html.includes('gta-v13-6-7')||html.includes('session state lock')||html.includes('V13.6.6')||html.includes('gta-v13-6-6')){console.error('Old version labels remain in app files');process.exit(1)}
if(html.includes('Pick one card mode')||html.includes('renderModeStart()">${labelMode(m)}')||html.includes('Start Recognize')||html.includes('Start Recall')||html.includes('Start Speak')||html.includes('Start Converse')){console.error('Old dead-end card mode UX remains');process.exit(1)}
if(html.includes('Practice partner roleplay')||html.includes('Suggested path, not a gate')||html.includes('One practice room, four depths')){console.error('Confusing Practice copy remains');process.exit(1)}
if(html.includes('onclick="startDue()">Due reviews')){console.error('Practice due reviews still calls home-oriented startDue');process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
const practiceChunk=script.match(/function renderPractice\(\)[\s\S]*?function labelMode/);
if(!practiceChunk){console.error('renderPractice chunk not found');process.exit(1)}
if(practiceChunk[0].includes('onclick="renderCategoryBrowser()">Browse categories')){console.error('Practice category button still routes to More category browser');process.exit(1)}
fs.writeFileSync('/tmp/kathimerina-v1368.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v1368.js'],{stdio:'inherit'});
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
if(!home.includes('todayCoverageLine()')){console.error('Today coverage line not rendered');process.exit(1)}
if(!script.includes("addItems('coverage',adaptiveCoverageItems()")){console.error('Session builder does not include coverage block');process.exit(1)}
if(html.includes('Today’s 5 preview')||html.includes('Begin Today’s 5')){console.error('Old Today’s 5 preview still appears on Home');process.exit(1)}
if(html.includes('coverage · Next uncovered content')||html.includes('Next uncovered content · Stage')){console.error('Developer coverage labels still visible in session rows');process.exit(1)}
for (const requiredSessionCopy of ['Today includes:','New phrase','Learn this today','Start today’s session']){
  if(!html.includes(requiredSessionCopy)){console.error('Missing simplified session copy: '+requiredSessionCopy);process.exit(1)}
}
if(!script.includes('function guidedSessionIsLocked')||!script.includes('guidedSessionIsLocked(s)')){console.error('Guided session state lock helper missing');process.exit(1)}
if(script.includes('s.started=false;save();renderHome()')){console.error('Task screen can still reset to Start mid-session');process.exit(1)}
console.log('GTA V13.6.8 Καθημερινά learning-path-flow smoke test passed.');
