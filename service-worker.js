const CACHE_NAME='gta-v13-6-36-alphabet-sound-drill';
const APP_SHELL=['./','index.html','manifest.json','apple-touch-icon.png','icon-192.png','icon-512.png','kathimerina-tile-1024.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{let copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy)).catch(()=>{});return resp}).catch(()=>caches.match('index.html'))))});
