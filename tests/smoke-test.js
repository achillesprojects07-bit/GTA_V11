const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.6</span></div>',
  "const APP_VERSION='V13.6.6'",
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
  'Do you want to continue?',
  'Continue 5 more min',
  'I’m done for today',
  'function continueAdaptiveSession',
  'function finishTodayAndRest',
  'Browse Practice',
  'Choose freely. Today’s guided session is separate.',
  'function coverageProgressPanel',
  'function todayCoverageLine',
  'function adaptiveCoverageItems',
  'function adaptiveCoverageDialogues',
  'function markCoverageItem',
  'function markCoverageDialogueByIndex',
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
  "gta-v13-6-6-guided-next-step"
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(', '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-6-guided-next-step'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.6 — Guided Session Next-Step + Continue Choice')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.6"')){console.error('Package version mismatch');process.exit(1)}
if(html.includes('V13.6.5')||html.includes('gta-v13-6-5')||html.includes('session language cleanup')||html.includes('V13.6.3')||html.includes('gta-v13-6-3')||html.includes('guided daily flow repair')){console.error('Old version labels remain');process.exit(1)}
if(html.includes('Priority-ordered for ${s.minutes} minutes')||html.includes('startAdaptiveStep(')||html.includes('markAdaptiveStepDone(')){console.error('Old checklist session UX remains');process.exit(1)}
if(html.includes('One practice room, four depths')||html.includes('Suggested path, not a gate')||html.includes('Practice partner roleplay')){console.error('Confusing Practice copy remains');process.exit(1)}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/kathimerina-v1366.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/kathimerina-v1366.js'],{stdio:'inherit'});
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

console.log('GTA V13.6.6 Καθημερινά guided-next-step smoke test passed.');
