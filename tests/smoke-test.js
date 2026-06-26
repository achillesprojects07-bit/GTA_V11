const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const must=['id="home"','id="practice"','id="survival"','id="more"','const SRS_LADDER=[1,3,7,21,60]','serviceWorker','function renderHome','function renderPractice','function renderSurvival','function renderMore'];
const missing=must.filter(x=>!html.includes(x));
const phraseMatch=html.match(/"phrases":\[/);
const vocabMatch=html.match(/"vocab":\[/);
if(missing.length || !phraseMatch || !vocabMatch){
  console.error('Smoke test failed. Missing:', missing);
  process.exit(1);
}
console.log('Smoke test passed: core views, SRS ladder, service worker, and embedded content are present.');
