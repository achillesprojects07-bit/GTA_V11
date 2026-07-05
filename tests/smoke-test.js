const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<div class="title">Καθημερινά <span class="versionMini">V14.2</span></div>',
  "const APP_VERSION='V14.2'",
  "const LS='gta_v12_state'",
  'Today</span></button><button data-view="survival" aria-label="Levels"',
  '<span>Levels</span>', '<span>Library</span>', '<span>Worksheets</span>', '<span>Review</span>',
  'const V14_MASTERY_LEVELS', 'const V14_CONCEPTS',
  'function v14StartWorksheet', 'window.v14StartWorksheet', 'window.v14AnswerWorksheet', 'window.v14FinishWorksheet',
  'v141EnsureMastery', 'v141MarkStudied', 'v141StartRepetitionRound', 'v141StartTodayPath', 'window.v141MasteryBar=v141MasteryBar', 'window.v141GateLabel=v141GateLabel',
  'V14.2 Full Curriculum Manifest + Verified Content Fields', 'V142_CURRICULUM_SCHEMA', 'v142BuildManifest', 'v142ShowManifestBrowser', 'v142ManifestSummaryPanel', 'v142LevelManifestPanel',
  'Level → Unit → Concept → Library lesson → Worksheet → Mastery', 'pending verification', 'Worksheet address', 'Full Curriculum Manifest',
  'Kumon-style Greek Mastery Engine', 'Study → worksheet → correction → repetition → mastery',
  'Start Today’s Path', 'Library lesson · study before worksheet', 'correctionQueue', 'repetitionQueue',
  'gta-v14-2-full-curriculum-manifest'
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!manifest.includes('Καθημερινά')){console.error('Manifest app name missing');process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v14-2-full-curriculum-manifest'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!readme.includes('# Καθημερινά V14.2 — Full Curriculum Manifest + Verified Content Fields')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"14.2.0"')){console.error('Package version mismatch');process.exit(1)}
const forbidden=["APP_VERSION='V13.6.44'",'gta-v13-6-44-weakspots-warmup','Jump to today’s worksheet','<span class="versionMini">V14.1A</span>','gta-v14-1a-kumon-mastery-engine-hotfix'];
const bad=forbidden.filter(x=>html.includes(x)||sw.includes(x)||pkg.includes(x));
if(bad.length){console.error('Old/forbidden active labels remain:',bad.join(', '));process.exit(1)}
const script=html.split('<script>')[1].split('</script>')[0];
fs.writeFileSync('/tmp/kathimerina-v14-2.js',script);
try{execSync('node --check /tmp/kathimerina-v14-2.js',{stdio:'pipe'})}catch(e){console.error('SYNTAX ERROR:\n'+e.stderr.toString().slice(0,3000));process.exit(1)}
console.log('Καθημερινά V14.2 Full Curriculum Manifest smoke test passed.');
