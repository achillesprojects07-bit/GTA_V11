const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const required=['GTA V12.7','V12.7.0-real-phone-ux-test-fixes','function phoneUxPanel','function speakWithFeedback','function nav','function renderSurvival','function renderHome','function contentReviewPanel'];
const missing=required.filter(x=>!html.includes(x));
if(missing.length){console.error('Missing:', missing.join(', ')); process.exit(1);}
console.log('GTA V12.7 smoke test passed.');
