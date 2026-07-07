const CACHE_NAME='gta-v15-2c-stable-tabs';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./kathimerina-tile-1024.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  const req=event.request;
  const isNav=req.mode==='navigate'||(req.headers.get('accept')||'').includes('text/html');
  if(isNav){event.respondWith(fetch(req,{cache:'no-store'}).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html',copy)).catch(()=>{});return res;}).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./'))));return;}
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
});
