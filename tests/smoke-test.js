const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.4</span></div>',
  "const APP_VERSION='V13.4'",
  'V13.4 phone UX checklist',
  'Return rhythm · V13.4',
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
  'unverified',
  'window.__gtaAutoBackup',
  'function gtaRecoverIfEmpty',
  'aria-current="page"',
  'role="main"',
  'lang="el"',
  'gta-v13-4-backup-'
];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing'); process.exit(1);}
if(manifest.includes('V13.4')){console.error('Manifest should not carry version label'); process.exit(1);}
if(fs.readFileSync('README.md','utf8').includes('# GTA V13.3')||fs.readFileSync('README.md','utf8').includes('# GTA V13.4 —')){console.error('README heading still contains old GTA heading'); process.exit(1);}
if(html.includes('GTA V13.3 Companion')||html.includes('Greek Conversation App')||html.includes('GTA Greek')){console.error('Old app name still visible'); process.exit(1);}
if(html.includes('V13.2')||html.includes('V13.3')){console.error('Old V13.2/V13.3 labels remain in index.html'); process.exit(1);}
if(html.includes('prompt(\'Self-score this ')){console.error('Mock self-score prompt remains'); process.exit(1);}
if(!html.includes('function completeMockSelfScore')){console.error('Mock self-score buttons missing'); process.exit(1);}
if(!sw.includes('gta-v13-5-0-wave2-daily-texture')){console.error('Service worker cache version missing'); process.exit(1);}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/gta-v13-4-script.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/gta-v13-4-script.js'],{stdio:'inherit'});
if(!script.includes("if(left===null||left<=0)return days")){console.error('Daily-mode SRS guard missing'); process.exit(1);}
if(!script.includes("state.checkins") || !script.includes("state.captures")){console.error('Conversation capture state missing'); process.exit(1);}
if(!script.includes("dailyMinutes:30") || !script.includes("fieldReadyCount")){console.error('On-track progress defaults missing'); process.exit(1);}
if(!script.includes("checkins:state.checkins||{}") || !script.includes("captures:state.captures||[]")){console.error('Reset preservation for conversation capture missing'); process.exit(1);}
if(!script.includes("itemMeta:state.itemMeta||{}") || !script.includes("examAnswers:state.examAnswers||{}") || !script.includes("mockRuns:state.mockRuns||{}")){console.error('Exam prep backup/reset preservation missing'); process.exit(1);}
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
console.log('GTA V13.5.0 Καθημερινά wave-2 smoke test passed.');
