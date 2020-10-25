!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1);addEventListener("fetch",t=>{t.respondWith(async function(t){const e=new r;e.get("/links",()=>new Response(JSON.stringify(o),{headers:{"content-type":"application/json"}})),e.get("/.*",t=>async function(t){let e=await fetch("https://static-links-page.signalnerve.workers.dev");return(new HTMLRewriter).on("div#links",new l(o,s)).on("div#profile",new l(o,s)).on("div#social",new l(o,s)).on("img#avatar",new u).on("h1#name",new a).on("title",new c).on("body",new i).transform(e)}());return await e.route(t)}(t.request))});const o=[{name:"WebTv",url:"https://github.com/NeelShah9/Web-Development-Tools-and-Methods/tree/master/project"},{name:"Cloudflare",url:"https://www.cloudflare.com/"},{name:"Northeastern University",url:"https://www.northeastern.edu/"},{name:"SignalNerve",url:"https://github.com/signalnerve"}],s=[{name:"Twitter",url:"https://twitter.com/iamneelshah9",icon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>'},{name:"LinkedIn",url:"https://www.linkedin.com/in/neel-shah-0909/",icon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>'},{name:"GitHub",url:"https://github.com/NeelShah9",icon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>'}];class i{async element(t){t.setAttribute("class","bg-red-700")}}class a{async element(t){"name"===t.getAttribute("id")&&t.setInnerContent("Neel Shah")}}class l{constructor(t,e){this.links=t,this.socialLinks=e}async element(t){"links"===t.getAttribute("id")?this.links.forEach(e=>{t.append(`<a href="${e.url}">${e.name}</a>`,{html:!0})}):"profile"===t.getAttribute("id")?t.removeAttribute("style"):"social"===t.getAttribute("id")&&(t.removeAttribute("style"),this.socialLinks.forEach(e=>{t.append(`<a href="${e.url}">${e.icon}</a>`,{html:!0})}))}}class u{async element(t){"avatar"===t.getAttribute("id")&&t.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpdigZ2Z6YXzpqcXEQPHjzTHjSmvYIzgOlRA&usqp=CAU")}}class c{async element(t){t.setInnerContent("Neel Shah")}}},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),o=n("delete"),s=n("get"),i=n("head"),a=n("options"),l=n("patch"),u=n("post"),c=n("put"),h=n("trace"),d=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[],this.defaultRoutes={connect:null,delete:null,get:null,head:null,options:null,patch:null,put:null,trace:null,all:null}}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}handleDefault(t,e,n){return this.defaultRoutes[t]={url:e,handler:n},this}setDefaultRoute(t,e,n){return this.handleDefault(t.toLowerCase(),d(e),n)}connect(t,e){return this.handle([r,d(t)],e)}delete(t,e){return this.handle([o,d(t)],e)}get(t,e){return this.handle([s,d(t)],e)}head(t,e){return this.handle([i,d(t)],e)}options(t,e){return this.handle([a,d(t)],e)}patch(t,e){return this.handle([l,d(t)],e)}post(t,e){return this.handle([u,d(t)],e)}put(t,e){return this.handle([c,d(t)],e)}trace(t,e){return this.handle([h,d(t)],e)}all(t){return this.handle([],t)}async route(t){const e=this.resolve(t);if(e)return await e.handler(t);const n=this.defaultRoutes[t.method.toLowerCase()];return n?await n.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}}]);