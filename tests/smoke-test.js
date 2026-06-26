const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const required=[
  'GTA V13.4',
  'V13.4-ellinomatheia-exam-prep',
  "const LS='gta_v12_state'",
  'let ITEMS=[]',
  'function buildItems',
  'function dialogueTurnItems',
  'DATA.dialogues',
  'function goalLabel',
  'function compressedSrsDays',
  'function startDialogueList',
  'function conversationTierPanel',
  'function searchAll',
  'function phraseBuilderPanel',
  'function todayKey',
  'function ensureConversationCaptureState',
  'function conversationStreak',
  'function winsThisWeek',
  'function markSpokeToday',
  'function addConversationWin',
  'function captureWantedPhrase',
  'function capturesToTranslatePanel',
  'function saveCaptureTranslation',
  'function addCustomPhraseFromParts',
  'function onTrackProgressPanel',
  'function actualFieldReadyCurve',
  'function progressExpectedSeries',
  'function setDailyMinutes',
  'PROGRESS_RATE',
  'rough guide, not a target',
  'machine-translated — verify',
  'translate.google.com/?sl=en&tl=el',
  'DATA.grammar',
  'DATA.reading',
  'DATA.listening',
  'DATA.writing',
  'DATA.speaking',
  'DATA.mock',
  'function ensureItemMetaState',
  'function itemMetaFor',
  'function levelProgressPanel',
  'function renderExamPrep',
  'function gradeMcq',
  'function selfGradeExam',
  'function startMock',
  'REPLACE WITH VERIFIED CONTENT',
  'unverified',
  'window.__gtaAutoBackup',
  'function gtaRecoverIfEmpty',
  'aria-current="page"',
  'role="main"',
  'lang="el"',
  'gta-v13-3-backup-'
];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
if(!manifest.includes('GTA Greek Conversation Companion V13.4')){console.error('Manifest version missing'); process.exit(1);}
if(!sw.includes('gta-v13-4-ellinomatheia-exam-prep')){console.error('Service worker cache version missing'); process.exit(1);}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/gta-v13-4-script.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/gta-v13-4-script.js'],{stdio:'inherit'});
if(!script.includes("if(left===null||left<=0)return days")){console.error('Daily-mode SRS guard missing'); process.exit(1);}
if(!script.includes("state.checkins") || !script.includes("state.captures")){console.error('Conversation capture state missing'); process.exit(1);}
if(!script.includes("dailyMinutes:30") || !script.includes("fieldReadyCount")){console.error('On-track progress defaults missing'); process.exit(1);}
if(!script.includes("checkins:state.checkins||{}") || !script.includes("captures:state.captures||[]")){console.error('Reset preservation for conversation capture missing'); process.exit(1);}
if(!script.includes("itemMeta:state.itemMeta||{}") || !script.includes("examAnswers:state.examAnswers||{}") || !script.includes("mockRuns:state.mockRuns||{}")){console.error('Exam prep backup/reset preservation missing'); process.exit(1);}
if(!script.includes("if(id==='progress')renderProgress()")){console.error('Progress nav hook missing'); process.exit(1);}
if(!fs.existsSync('.nojekyll')){console.error('.nojekyll missing'); process.exit(1);}
console.log('GTA V13.4 Ellinomatheia exam prep smoke test passed.');
