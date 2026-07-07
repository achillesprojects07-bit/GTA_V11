const BUILD_VERSION='V15.6AA';
const CACHE_NAME='gta-v15-6a-loop-free-study-path';
const OLD_CACHE_PREFIX=/^gta-/i;
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./kathimerina-tile-1024.png'];

async function freshRequest(url){
  return fetch(new Request(url,{cache:'reload'}));
}

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    await Promise.all(ASSETS.map(async asset=>{
      try{
        const res=await freshRequest(asset);
        if(res && res.ok) await cache.put(asset,res.clone());
      }catch(e){
        try{await cache.add(asset)}catch(_e){}
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.map(k=>OLD_CACHE_PREFIX.test(k)&&k!==CACHE_NAME?caches.delete(k):Promise.resolve(false)));
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    clients.forEach(client=>client.postMessage({type:'APP_VERSION',version:BUILD_VERSION,cache:CACHE_NAME}));
  })());
});

self.addEventListener('message',event=>{
  const data=event.data||{};
  if(data.type==='SKIP_WAITING') self.skipWaiting();
  if(data.type==='CLEAR_CACHES'){
    event.waitUntil((async()=>{
      const keep=data.keep||CACHE_NAME;
      const keys=await caches.keys();
      await Promise.all(keys.map(k=>OLD_CACHE_PREFIX.test(k)&&k!==keep?caches.delete(k):Promise.resolve(false)));
    })());
  }
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;
  const accepts=req.headers.get('accept')||'';
  const isNav=req.mode==='navigate'||accepts.includes('text/html');

  if(isNav){
    event.respondWith((async()=>{
      try{
        const res=await fetch(req,{cache:'no-store'});
        const cache=await caches.open(CACHE_NAME);
        cache.put('./index.html',res.clone()).catch(()=>{});
        return res;
      }catch(e){
        return (await caches.match('./index.html')) || (await caches.match('./')) || new Response('App is offline and no cached copy is available.',{status:503,headers:{'Content-Type':'text/plain'}});
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(req);
    const fetchPromise=fetch(req,{cache:'no-store'}).then(async res=>{
      if(res && res.ok){
        const cache=await caches.open(CACHE_NAME);
        cache.put(req,res.clone()).catch(()=>{});
      }
      return res;
    }).catch(()=>null);
    return cached || await fetchPromise || new Response('',{status:504});
  })());
});
