const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const required=[
  'GTA V13.0.2',
  'V13.0.2-search-builder-durable',
  "const LS='gta_v12_state'",
  'let ITEMS=[]',
  'function buildItems',
  'function normalizeCustomItem',
  'function byId',
  'function searchAll',
  'function openSearch',
  'function practiceItem',
  'function phraseBuilderPanel',
  'function saveCustomPhrase',
  'function editCustomPhrase',
  'function deleteCustomPhrase',
  'translate.google.com/?sl=en&tl=el',
  'window.__gtaAutoBackup',
  'function gtaRecoverIfEmpty',
  'function isEmptyProgress',
  'aria-current="page"',
  'role="main"',
  'lang="el"',
  'function renderHome',
  'function renderMore',
  'function speakWithFeedback',
  'gta-v13-0-2-backup-'
];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
if(!manifest.includes('GTA Greek Travel App V13.0.2')){console.error('Manifest version missing'); process.exit(1);}
if(!sw.includes('gta-v13-0-2-search-builder-durable')){console.error('Service worker cache version missing'); process.exit(1);}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/gta-v13-0-2-script.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/gta-v13-0-2-script.js'],{stdio:'inherit'});
if(!script.includes("if(id==='progress')renderProgress()")){console.error('Progress nav hook missing'); process.exit(1);}
if(!fs.existsSync('.nojekyll')){console.error('.nojekyll missing'); process.exit(1);}
console.log('GTA V13.0.2 search + builder + durable storage smoke test passed.');
