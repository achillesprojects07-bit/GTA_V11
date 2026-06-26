const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const required=[
  'GTA V13.0',
  'V13.0.0-public-stable-new-repo-release',
  'section id="progress"',
  'function renderProgress',
  'function buildIntegrityPanel',
  'function stableLaunchPanel',
  'Stable launch checklist',
  'function releaseEmptyStatesPanel',
  'function renderMore',
  'function contentReviewPanel',
  'function speakWithFeedback',
  'function nav',
  'function renderSurvival',
  'function renderHome',
  'Progress</span>',
  'Public Stable Release',
  'gta-v13-0-backup-'
];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
if(!manifest.includes('GTA Greek Travel App V13.0')){console.error('Manifest version missing'); process.exit(1);}
if(!sw.includes('gta-v13-0-public-stable-new-repo-release')){console.error('Service worker cache version missing'); process.exit(1);}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
if(!script.includes("if(id==='progress')renderProgress()")){console.error('Progress nav hook missing'); process.exit(1);}
if(!fs.existsSync('.nojekyll')){console.error('.nojekyll missing'); process.exit(1);}
console.log('GTA V13.0 public stable smoke test passed.');
