const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V14.4</span></div>',
  "const APP_VERSION='V14.4'",
  "const LS='gta_v12_state'",
  'const V14_MASTERY_LEVELS', 'const V14_CONCEPTS',
  'v141EnsureMastery', 'v141MarkStudied', 'v141StartRepetitionRound', 'v141StartTodayPath',
  'Full Curriculum Manifest', 'V142_CURRICULUM_SCHEMA', 'v142BuildManifest',
  'V143_GRAMMAR_TOPICS', 'v143ShowGrammarLibrary', 'Topic Grammar Pages',
  'V14.4 Comprehensive Progression Ladder + Worksheet Volume Map',
  'V144_WORKBOOK_LADDER', 'v144LevelWorkbookCard', 'v144FamilySequenceForConcept', 'v144StartWorksheetFamily',
  'Comprehensive progression ladder', '2,820', 'target micro-rounds',
  'Recognition worksheet', 'Production worksheet', 'Correction round', 'Repetition round', 'Mixed review', 'Mastery check',
  'gta-v14-4-comprehensive-progression-ladder-volume-map'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v14-4-comprehensive-progression-ladder-volume-map'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V14.4 — Comprehensive Progression Ladder + Worksheet Volume Map')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"14.4.0"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V13.6.44'",'gta-v13-6-44-weakspots-warmup','Jump to today’s worksheet','<span class="versionMini">V14.3</span>','gta-v14-3-grammar-concept-library-topic-pages','<span class="versionMini">V14.2</span>','gta-v14-2-full-curriculum-manifest','<span class="versionMini">V14.1A</span>'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v14-4.js',script);
try{execSync('node --check /tmp/kathimerina-v14-4.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,3000));process.exit(1)}
console.log('Καθημερινά V14.4 Comprehensive Progression Ladder smoke test passed.');
