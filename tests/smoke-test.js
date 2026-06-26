const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const required=[
  'GTA V13.1',
  'V13.1-conversation-companion',
  "const LS='gta_v12_state'",
  'let ITEMS=[]',
  'function buildItems',
  'function dialogueTurnItems',
  'DATA.dialogues',
  'function goalLabel',
  'function isFutureGoal',
  'function compressedSrsDays',
  'function startDialogueList',
  'function startDialogue',
  'function renderDialogueTurn',
  'function gradeDialogue',
  'function conversationTierPanel',
  'function tierForItem',
  'function searchAll',
  'function phraseBuilderPanel',
  'translate.google.com/?sl=en&tl=el',
  'window.__gtaAutoBackup',
  'function gtaRecoverIfEmpty',
  'aria-current="page"',
  'role="main"',
  'lang="el"',
  'gta-v13-1-backup-'
];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
if(!manifest.includes('GTA Greek Conversation Companion V13.1')){console.error('Manifest version missing'); process.exit(1);}
if(!sw.includes('gta-v13-1-conversation-companion')){console.error('Service worker cache version missing'); process.exit(1);}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
fs.writeFileSync('/tmp/gta-v13-1-script.js',script);
require('child_process').execFileSync(process.execPath,['--check','/tmp/gta-v13-1-script.js'],{stdio:'inherit'});
if(!script.includes("if(left===null||left<=0)return days")){console.error('Daily-mode SRS guard missing'); process.exit(1);}
if(!script.includes("if(id==='progress')renderProgress()")){console.error('Progress nav hook missing'); process.exit(1);}
if(!fs.existsSync('.nojekyll')){console.error('.nojekyll missing'); process.exit(1);}
console.log('GTA V13.1 conversation companion smoke test passed.');
