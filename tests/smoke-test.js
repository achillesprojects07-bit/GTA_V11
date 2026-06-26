const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const required=[
  'GTA V12.8',
  'V12.8.0-release-candidate-cleanup',
  'section id="progress"',
  "function renderProgress",
  "function buildIntegrityPanel",
  "function releaseEmptyStatesPanel",
  "function renderMore",
  "function contentReviewPanel",
  "function speakWithFeedback",
  "function nav",
  "function renderSurvival",
  "function renderHome",
  "Progress</span>",
  "Release Candidate Cleanup"
];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
const script=html.split('<script>')[1]?.split('</script>')[0]||'';
if(!script.includes("if(id==='progress')renderProgress()")){console.error('Progress nav hook missing'); process.exit(1);}
console.log('GTA V12.8 release candidate smoke test passed.');
