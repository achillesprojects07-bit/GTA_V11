const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V13.6.25</span></div>',
  "const APP_VERSION='V13.6.25'",
  "const LS='gta_v12_state'",
  'function renderHome',
  'function pauseAdaptiveSession',
  'function resumeAdaptiveSession',
  'function toggleMinutePicker',
  'function historyDayCount',
  'function stepHowTo',
  'function practiceModeHowTo',
  'How to do this step',
  'What each mode means',
  'Forecast unlocks',
  'Day ${info.day} of ~180',
  'Continue Today’s Path',
  'Pause session',
  'function buildAdaptiveSession',
  'function dailyConversationCoachCard',
  'function realGreekListeningCard',
  'function conversationMemoryCard',
  'function livingGreeceModeCard',
  'function ensureA2GrammarGapState',
  'function confidenceDashboardCard',
  'function confidenceDashboardPanel',
  'function confidenceEngineStats',
  'function renderConfidenceEngine',
  'function logConfidencePulse',
  'function confidenceMinimumChecklistCard',
  'Listen First library',
  'function dailyReadingPick',
  'function renderGuidedReadingTask',
  'function gradeGuidedReading',
  "if(minChoice>=15&&g)",
  "let seen=new Set(),out=[]",
  'gta-v13-6-25-today-reset-focus'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v13-6-25-today-reset-focus'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V13.6.25 — Today Reset + Session Focus')){console.error('README heading mismatch');process.exit(1)}
if(!readme.includes('App header shows `Καθημερινά V13.6.25`')){console.error('README verification mismatch');process.exit(1)}
if(!pkg.includes('"version":"13.6.25"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=['V13.6.24</span>',"APP_VERSION='V13.6.24'",'gta-v13-6-24-practice-only-daily-path','ONE BUTTON PATH ACTIVE','V13.6.22</span>','V13.6.21</span>'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old active labels remain:',bad.join(', '));process.exit(1)}
// focus-mode acceptance: renderHome must not render dashboards/explainers
const rh=html.slice(html.indexOf('function renderHome()'), html.indexOf('function pauseAdaptiveSession'));
const banned=['sixMonthConfidencePanel(','oneButtonLearningPathHelpCard(','oneButtonLearningPathCard(','confidenceDashboardCard(','dailyConversationCoachCard(','realGreekListeningCard(','conversationMemoryCard(','livingGreeceModeCard(','a2GrammarGapCard(','conversationCaptureCard(','progressivePathMapCard(','homeForecastLine('];
const leak=banned.filter(x=>rh.includes(x));
if(leak.length){console.error('renderHome still renders relocated cards:',leak.join(', '));process.exit(1)}
// how-to must be wired into guidedTaskHeader
const gh=html.slice(html.indexOf('function guidedTaskHeader'), html.indexOf('function guidedTaskHeader')+700);
if(!gh.includes('stepHowTo(step.type)')){console.error('guidedTaskHeader missing how-to layer');process.exit(1)}
// relocations landed
if(!html.includes('${practiceLandingHtml()}</div>${dailyConversationCoachCard()}')){console.error('Practice relocation missing');process.exit(1)}
if(!html.includes('${confidenceDashboardPanel()}${progressivePathMapCard()}${confidenceMinimumChecklistCard()}${returnNudgeCard()}')){console.error('Progress relocation missing');process.exit(1)}
// script syntax
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v13625.js',script);
try{execSync('node --check /tmp/kathimerina-v13625.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,800));process.exit(1)}
console.log('GTA V13.6.25 Καθημερινά Today Reset + Session Focus smoke test passed.');
