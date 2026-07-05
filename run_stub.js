const fs=require('fs'), vm=require('vm');
let code=fs.readFileSync('script0.js','utf8');
const elMap={};
function mkEl(id){return elMap[id]||(elMap[id]={id,innerHTML:'',textContent:'',value:'',className:'',style:{},dataset:{},classList:{add(){},remove(){},contains(){return id==='home'}},setAttribute(){},removeAttribute(){},appendChild(){},addEventListener(){},scrollIntoView(){},focus(){},querySelector(){return mkEl('qs')},querySelectorAll(){return []}})}
const doc={getElementById:(id)=>mkEl(id),querySelector:(sel)=>mkEl(sel),querySelectorAll:(sel)=>[],createElement:(tag)=>mkEl('create-'+tag),addEventListener(){}};
const store={};
const ctx={console, setTimeout:(fn,t)=>0, clearTimeout(){}, Date, Math, JSON, Array, Object, String, Number, Boolean, RegExp, Error, Promise,
 window:null, document:doc, addEventListener(){}, removeEventListener(){}, localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=String(v)},removeItem:k=>delete store[k]},
 navigator:{storage:{persist:()=>Promise.resolve()},serviceWorker:{register:()=>({catch(){}})},clipboard:{writeText:()=>Promise.resolve()}},
 speechSynthesis:{getVoices:()=>[],cancel(){},speak(){},onvoiceschanged:null},
 SpeechSynthesisUtterance:function(t){this.text=t},
 Notification:{permission:'denied'}, location:{href:'file://'}, URL:{createObjectURL:()=>''}, Blob:function(){}, FileReader:function(){}, indexedDB:{open(){return {onsuccess:null,onerror:null,onupgradeneeded:null}}},
};
ctx.window=ctx;
try{vm.createContext(ctx); vm.runInContext(code,ctx,{filename:'script0.js'}); console.log('OK'); console.log('home length', mkEl('home').innerHTML.length); console.log(mkEl('home').innerHTML.slice(0,200));}
catch(e){console.error('ERR', e && e.stack || e)}
