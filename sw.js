if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const d=e=>i(e,n),b={module:{uri:n},exports:r,require:d};a[n]=Promise.all(s.map((e=>b[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-b994f779"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.PN2FV3EY.css",revision:"078802cb969ce9276d84f3988737c0fa"},{url:"_app/immutable/assets/2.0ucXwBPV.css",revision:"a04480e03012f3900518291bab1149e3"},{url:"_app/immutable/chunks/index.SLGkXWj4.js",revision:"4c1a593ea1083ce490dd2452fecb1155"},{url:"_app/immutable/chunks/paths.jLXGspa9.js",revision:"2c2e4e4b0ed951590ffb60c4aa0cadb4"},{url:"_app/immutable/chunks/scheduler.DBUx310a.js",revision:"85eeebc3d4a478b0168068f56f048ddf"},{url:"_app/immutable/chunks/singletons.x8winBfq.js",revision:"6f806c39756c38cd37bf51de5bd29b5f"},{url:"_app/immutable/entry/app.mr4g9Xen.js",revision:"3679af63546745869699ff4e6ee591d9"},{url:"_app/immutable/entry/start.45kHGoWM.js",revision:"2fe0e89fdb2b1fa9c0dd5583a6d0286b"},{url:"_app/immutable/nodes/0.8kvO9PpX.js",revision:"71525ee41171e413d2a771841d146442"},{url:"_app/immutable/nodes/1.Ckrz_DzW.js",revision:"bda6b1548ea5205dc70b60581a0b2d05"},{url:"_app/immutable/nodes/2.r1hAOUev.js",revision:"9ca07b7cae819a4c57e53db75cc7def5"},{url:"caidat.svg",revision:"114b536b5e347491abc7dce8e5c78f31"},{url:"cat.png",revision:"61030d5ede9d4b3c0ad6a39e71dbf7e7"},{url:"favicon.png",revision:"9292ac2e75b7af6c0a94d93a88217053"},{url:"home.svg",revision:"1ae54bea6fd8da8b0a030d62d5f899a6"},{url:"icon-192x192.png",revision:"6d11a2e5968bcc270fa48e937ac4b96e"},{url:"icon-512x512.png",revision:"bb8bc520fc075bf6b0ea8eb4e77a25bc"},{url:"lich.svg",revision:"9154f4555ab4aea4b97db9d5dd4a7ef3"},{url:"loinhan.svg",revision:"e2308e5247548fd19d10585c50b603c1"},{url:"love.svg",revision:"1da04945f2c9c34676ca6cf647eefbe7"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"shiba.png",revision:"aac60f341d66f94b25c31464cad74cd4"},{url:"tinnhan.svg",revision:"46421acac11f07a7aec01645dead2c0c"},{url:"manifest.webmanifest",revision:"c80c847a176e947388b69475566a795a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/.*/,new e.CacheFirst({cacheName:"frontend-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:259200})]}),"GET")}));
