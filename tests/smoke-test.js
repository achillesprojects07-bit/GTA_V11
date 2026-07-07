const fs=require('fs');
const {execSync}=require('child_process');
const html=fs.readFileSync('index.html','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const readme=fs.readFileSync('README.md','utf8');
const pkg=fs.readFileSync('package.json','utf8');
const manifest=fs.readFileSync('manifest.json','utf8');
const required=[
  '<title>Καθημερινά</title>',
  '<span class="versionMini">V15.4</span>',
  "const APP_VERSION='V15.4'",
  "const LS='gta_v12_state'",
  'V15.4 SERVICE WORKER / CACHE HARDENING',
  'Levels restored gradually',
  'Library restored gradually',
  'Worksheets restored gradually',
  'Review restored gradually',
  'v153TopTabs',
  'v154RefreshAppVersion',
  'v154ClearAppCaches',
  'v154CheckCacheStatus',
  'gta-v15-4-cache-hardening',
  'CLEAR_CACHES',
  'SKIP_WAITING',
  'updateViaCache',
  'c0_vowels',
  "unit:'L0.01'",
  "id:'c0_gavros'",
  "unit:'L0.10'"
];
const missing=required.filter(x=>!html.includes(x)&&!sw.includes(x)&&!readme.includes(x)&&!manifest.includes(x));
if(missing.length){console.error('Missing:',missing.join(' | '));process.exit(1)}
if(!sw.includes("const CACHE_NAME='gta-v15-4-cache-hardening'")){console.error('Service worker cache mismatch');process.exit(1)}
if(!sw.includes("cache:'no-store'")){console.error('SW should use no-store fetches');process.exit(1)}
if(!readme.includes('# Καθημερινά V15.4')){console.error('README heading mismatch');process.exit(1)}
if(!pkg.includes('"version":"15.4.0"')){console.error('Package version mismatch');process.exit(1)}
if(!manifest.includes('./index.html?v=15.4')){console.error('Manifest start_url mismatch');process.exit(1)}
let scripts=[];let pos=0;
while(true){let s=html.indexOf('<script',pos);if(s<0)break;let start=html.indexOf('>',s);let e=html.indexOf('</script>',start);if(e<0){console.error('Unclosed script');process.exit(1)}scripts.push(html.slice(start+1,e));pos=e+9}
if(scripts.length<5){console.error('Expected main script plus extension scripts');process.exit(1)}
scripts.forEach((script,i)=>{let f=`/tmp/kathimerina-v15-4-${i}.js`;fs.writeFileSync(f,script);try{execSync(`node --check ${f}`,{stdio:'pipe'});}catch(e){console.error(`SYNTAX ERROR script ${i}:\n`+e.stderr.toString().slice(0,3000));process.exit(1)}});
const afterHtml=html.slice(html.lastIndexOf('</html>')+'</html>'.length).trim();
if(afterHtml){console.error('Code/text found after </html>');process.exit(1)}
if(html.includes('<span class="versionMini">V15.3</span>')){console.error('Old V15.3 visible version remains');process.exit(1)}
console.log('Καθημερινά V15.4 Service Worker / Cache Hardening smoke test passed.');
