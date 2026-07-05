const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V14.4A</span></div>',
  "const APP_VERSION='V14.4A'",
  "const LS='gta_v12_state'",
  'const V14_MASTERY_LEVELS','const V14_CONCEPTS',
  'v141EnsureMastery','v141MarkStudied','v141StartRepetitionRound','v141StartTodayPath',
  'Full Curriculum Manifest','V142_CURRICULUM_SCHEMA','v142BuildManifest',
  'V143_GRAMMAR_TOPICS','v143ShowGrammarLibrary','Topic Grammar Pages',
  'V144_WORKBOOK_LADDER','v144LevelWorkbookCard','v144FamilySequenceForConcept','v144StartWorksheetFamily',
  '2,820','target micro-rounds',
  'Recognition worksheet','Production worksheet','Correction round','Repetition round','Mixed review','Mastery check',
  'V14.4A Worksheet Time Contract + Mastery Enforcement',
  'v144aWorksheetMinutes','v144aPlanForMinutes','v144aStartWorksheetBlock','v144aTimeContractPanel','v144aCompleteSession',
  '60 minutes means 60 minutes of answer-work',
  'Concept study is outside the timer',
  'correctionOutsideTimer',
  'gta-v14-4a-worksheet-time-contract-mastery'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v14-4a-worksheet-time-contract-mastery'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V14.4A — Worksheet Time Contract + Mastery Enforcement')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"14.4.1"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V13.6.44'",'gta-v13-6-44-weakspots-warmup','Jump to today’s worksheet','<span class="versionMini">V14.3</span>','gta-v14-3-grammar-concept-library-topic-pages','<span class="versionMini">V14.2</span>','gta-v14-2-full-curriculum-manifest','<span class="versionMini">V14.1A</span>','<span class="versionMini">V14.4</span>','gta-v14-4-comprehensive-progression-ladder-volume-map'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v14-4a.js',script);
try{execSync('node --check /tmp/kathimerina-v14-4a.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,3000));process.exit(1)}
console.log('Καθημερινά V14.4A Worksheet Time Contract smoke test passed.');
