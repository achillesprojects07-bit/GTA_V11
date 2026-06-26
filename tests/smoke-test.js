const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.5.9</span></div>',
  "const APP_VERSION='V13.5.9'",
    "const LS='gta_v12_state'",
  'let ITEMS=[]',
  'function buildItems',
  'class="versionMini"',
  'function dialogueTurnItems',
  'DATA.dialogues',
  'function goalLabel',
  'function compressedSrsDays',
  'function startDialogueList',
  'function dialogueLevelCounts',
  'function dialogueFilterMatch',
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
  'What did you wish you could say today?',
  'Review captured gaps',
  'function addCaptureToPractice',
  'function reviewConversationGaps',
  'function normalizeCapture',
  'Tutor/native reviewed',
  'Add to Practice',
  'translate.google.com/?sl=en&tl=el',
  'DATA.grammar',
  'DATA.reading',
  'DATA.listening',
  'DATA.writing',
  'DATA.speaking',
  'DATA.mock',
  'PRACTICE_ONLY_EXAM_BANK',
  'mock-practice-a1-everyday-01',
  'mock-practice-a2-daily-life-01',
  'mock-practice-a2-family-trip-01',
  'r-practice-a2-message-01',
  'l-practice-a2-appointment-01',
  'w-practice-a2-email-01',
  's-practice-a2-roleplay-doctor-01',
  'function ensureItemMetaState',
  'function itemMetaFor',
  'function levelProgressPanel',
  'function renderExamPrep',
  'function gradeMcq',
  'function selfGradeExam',
  'function startMock',
  'function quizHubPanel',
  'function startDailyQuiz',
  'function buildQuizQuestions',
  'function finishQuiz',
  'function answerQuizQuestion',
  'instant feedback',
  'milestonePasses',
  'A1 ready',
  'practice milestone, not an official exam score',
  'function ensureDialogueReviewState',
  'function dialogueReviewPanel',
  'function setDialogueReviewStatus',
  'function saveDialogueReviewNote',
  'Dialogue native-review workflow',
  'Mark what is truly safe to say',
  'revise before use',
  'Reviewer / source',
  'function dialogueReviewProgressPanel',
  'function phraseOfDayPanel',
  'function phraseOfDayCapture',
  'function todayDialogueReviewLine',
  'function playDialogueFull',
  'function practiceDialogueTurns',
  'function speakGreekText',
  'Phrase from your life today',
  'Play full exchange',
  'Practice my turns',
  'Exam prep needs verified fuel',
  'Review next unreviewed dialogue',
  'dialogue review progress',
  'All 143 dialogues are playable here',
  'Dialogues still open',
  'Practice dialogue library',
  'function verificationStats',
  'dlg_partner_morning',
  'dlg_family_recipe',
  'dlg_home_evening',
  'dlg_eat_taverna',
  'dlg_feelings_quiet_moment',
  'practice-only',
  'native-reviewed',
  'dialogueBadge',
  'Dialogue waves by level',
  'dlg_w1_25',
  'dlg_w2_01',
  'dlg_w2_25',
  'dlg_w3_01',
  'dlg_w3_25',
  'dlg_w4_01',
  'dlg_w4_20',
  'dlg_w5_01',
  'dlg_w5_15',
  'dlg_w1_01',
  'function verificationPipelinePanel',
  'source status',
  'official-source',
  'tutor-checked',
  'Better engine, not new fuel yet',
  'verified preferred',
  'Today’s Quiz',
  'A1 Milestone Quiz',
  'Weak Spots Quiz',
  'REPLACE WITH VERIFIED CONTENT',
  'function normalizeExamContentState',
  'function examImportTemplate',
  'function examImportPanel',
  'function importExamContentJson',
  'function clearImportedExamContent',
  'state.examContent',
  'Verified exam content loader',
  'Import exam content',
  'g-verified-a1-001',
  'mock-verified-a1-001',
  'unverified',
  'window.__gtaAutoBackup',
  'function gtaRecoverIfEmpty',
  'aria-current="page"',
  'role="main"',
  'lang="el"',
  'kathimerina-v13-5-9-backup-'
];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing'); process.exit(1);}
if(manifest.includes('V13.4')){console.error('Manifest should not carry version label'); process.exit(1);}
if(fs.readFileSync('README.md','utf8').includes('# GTA V13.3')||fs.readFileSync('README.md','utf8').includes('# GTA V13.4 —')){console.error('README heading still contains old GTA heading'); process.exit(1);}
if(html.includes('GTA V13.3 Companion')||html.includes('Greek Conversation App')||html.includes('GTA Greek')){console.error('Old app name still visible'); process.exit(1);}
if(html.includes('V13.2')||html.includes('V13.3')||html.includes('V13.5.4')||html.includes('V13.5.5')||html.includes('V13.5.8')){console.error('Old version labels remain in index.html'); process.exit(1);}
if(html.includes('prompt(\'Self-score this ')){console.error('Mock self-score prompt remains'); process.exit(1);}
if(!html.includes('function completeMockSelfScore')){console.error('Mock self-score buttons missing'); process.exit(1);}
if(!sw.includes('gta-v13-5-9-exam-content-loader')){console.error('Service worker cache version missing'); process.exit(1);}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/gta-v13-4-script.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/gta-v13-4-script.js'],{stdio:'inherit'});
if(!script.includes("if(left===null||left<=0)return days")){console.error('Daily-mode SRS guard missing'); process.exit(1);}
if(!script.includes("state.checkins") || !script.includes("state.captures")){console.error('Conversation capture state missing'); process.exit(1);}
if(!script.includes("dailyMinutes:30") || !script.includes("fieldReadyCount")){console.error('On-track progress defaults missing'); process.exit(1);}
if(!script.includes("checkins:state.checkins||{}") || !script.includes("captures:state.captures||[]")){console.error('Reset preservation for conversation capture missing'); process.exit(1);}
if(!script.includes("itemMeta:state.itemMeta||{}") || !script.includes("examAnswers:state.examAnswers||{}") || !script.includes("mockRuns:state.mockRuns||{}") || !script.includes("examContent:state.examContent")){console.error('Exam prep backup/reset preservation missing'); process.exit(1);}
if(!script.includes("quizRuns:state.quizRuns||[]") || !script.includes("state.quizRuns=Array.isArray(state.quizRuns)?state.quizRuns:[]")){console.error('Quiz run state preservation missing'); process.exit(1);}
if(!script.includes("el.textContent=d===null?'Rhythm':d>0?d+'d':d===0?'Today':'Rhythm'")){console.error('Short countdown pill missing'); process.exit(1);}
if(html.includes('Build real Greek for your partner')||html.includes('travel survival')||html.includes('Practice five useful lines, handle what is due')){console.error('Home slogan copy still present'); process.exit(1);}
if(!script.includes("if(id==='progress')renderProgress()")){console.error('Progress nav hook missing'); process.exit(1);}
if(!fs.existsSync('.nojekyll')){console.error('.nojekyll missing'); process.exit(1);}
const dlgIds=[...html.matchAll(/id:'(dlg_[^']+)'/g)].map(m=>m[1]);
if(new Set(dlgIds).size!==dlgIds.length){console.error('Duplicate dialogue ids found'); process.exit(1);}
const w1=[...html.matchAll(/id:'dlg_w1_[^']+'[\s\S]*?level:'A1'[\s\S]*?nativeReview:false/g)];
if(w1.length!==25){console.error('Wave 1 A1 dialogue count mismatch:',w1.length); process.exit(1);}
const w2=[...html.matchAll(/id:'dlg_w2_[^']+'[\s\S]*?level:'A2'[\s\S]*?nativeReview:false/g)];
if(w2.length!==25){console.error('Wave 2 A2 dialogue count mismatch:',w2.length); process.exit(1);}
if(!html.includes("title:'What I did today',level:'A2'")||!html.includes("title:'How do you feel',level:'A2'")){console.error('Wave 2 endpoints missing'); process.exit(1);}
const w3=[...html.matchAll(/id:'dlg_w3_[^']+'[\s\S]*?level:'B1'[\s\S]*?nativeReview:false/g)];
if(w3.length!==25){console.error('Wave 3 B1 dialogue count mismatch:',w3.length); process.exit(1);}
if(!html.includes("title:'A quiet moment',level:'B1'")||!html.includes("title:'After a tense day',level:'B1'")){console.error('Wave 3 endpoints missing'); process.exit(1);}

const w4=[...html.matchAll(/id:'dlg_w4_[^']+'[\s\S]*?level:'B1'[\s\S]*?nativeReview:false/g)];
if(w4.length!==20){console.error('Wave 4 B1 dialogue count mismatch:',w4.length); process.exit(1);}
if(!html.includes("title:'Running into a neighbor',level:'B1'")||!html.includes("title:'Between Manila and Greece',level:'B1'")){console.error('Wave 4 endpoints missing'); process.exit(1);}


const w5=[...html.matchAll(/id:'dlg_w5_[^']+'[\s\S]*?level:'B2'[\s\S]*?nativeReview:false/g)];
if(w5.length!==15){console.error('Wave 5 B2 dialogue count mismatch:',w5.length); process.exit(1);}
if(!html.includes("title:'About my day',level:'B2'")||!html.includes("title:'An honest reflective exchange',level:'B2'")){console.error('Wave 5 endpoints missing'); process.exit(1);}


if(!html.includes('function reviewNextUnreviewedDialogue')){console.error('Review next dialogue function missing'); process.exit(1);}
if(!html.includes('function dialogueReviewProgressPanel')){console.error('Dialogue review progress panel missing'); process.exit(1);}
if(!html.includes("'revise'")){console.error('Revise filter/status missing'); process.exit(1);}
if(!html.includes('All 143 dialogues are playable here through level and review filters')){console.error('Practice reachability note missing'); process.exit(1);}
if(!html.includes('Phrase from your life today')||!html.includes('Practice my turns')||!html.includes('Play full exchange')){console.error('Daily loop polish features missing'); process.exit(1);}
if(!html.includes('Ellinomatheia A1/A2 · import-ready')||!html.includes('Verified exam content loader')||!html.includes('function importExamContentJson')){console.error('Exam import-ready loader missing'); process.exit(1);}
if(!html.includes('dialogueReviewStats().open')){console.error('Open dialogue review count missing'); process.exit(1);}
const readme=fs.readFileSync('README.md','utf8');
if(!readme.includes('# Καθημερινά V13.5.9 — Verified Exam Content Loader')){console.error('README heading does not match V13.5.9 exam-content-loader build'); process.exit(1);}
if(!html.includes('<div class="title">Καθημερινά <span class="versionMini">V13.5.9</span></div>')){console.error('Visible app header version does not show V13.5.9'); process.exit(1);}
if(!html.includes("const APP_VERSION='V13.5.9'")){console.error('APP_VERSION is not V13.5.9'); process.exit(1);}
if(!html.includes('<div class="integrityItem"><b>V13.5.9</b><span class="muted">Version label</span></div>')){console.error('Build Integrity panel does not show V13.5.9'); process.exit(1);}

const renderHomeChunk=script.match(/function renderHome\(\)[\s\S]*?function cardMini/);
if(!renderHomeChunk){console.error('renderHome function not found'); process.exit(1);}
const home=renderHomeChunk[0];
['phoneUxMini()','capturesToTranslatePanel()','conversationTierPanel()'].forEach(x=>{if(home.includes(x)){console.error('Home still renders clutter card:',x); process.exit(1);}});
['Real phone '+'polish','Built for one hand and weak '+'signal','V12'+'.7'].forEach(x=>{if(html.includes(x)){console.error('Old phone-polish/developer copy remains:',x); process.exit(1);}});
console.log('GTA V13.5.9 Καθημερινά exam-content-loader smoke test passed.');
