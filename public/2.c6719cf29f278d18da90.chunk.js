(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{105:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(30);function s(t){return Array.from(t.childNodes).map(t=>3===t.nodeType?Object(i.a)(t.textContent):t.outerHTML).join("")}},106:function(t,e,n){"use strict";function i(t,e){return t.closest(`[${e}]`)}n.d(e,"a",(function(){return i}))},107:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));const i={bold:{match:'[style*="bold"], [style*="font-weight: 700"], [style*="font-weight: 600"], [style*="font-weight:700"], [style*="font-weight:600"], b, strong',entityName:"messageEntityBold"},underline:{match:'[style*="underline"], u, ins',entityName:"messageEntityUnderline"},italic:{match:'[style*="italic"], i, em',entityName:"messageEntityItalic"},monospace:{match:'[style*="monospace"], [face*="monospace"], pre',entityName:"messageEntityCode"},strikethrough:{match:'[style*="line-through"], strike, del, s',entityName:"messageEntityStrike"},link:{match:"A:not(.follow)",entityName:"messageEntityTextUrl"},mentionName:{match:"A.follow",entityName:"messageEntityMentionName"},spoiler:{match:'[style*="spoiler"]',entityName:"messageEntitySpoiler"}},s=new Set(["DIV","P","BR","LI","SECTION","H6","H5","H4","H3","H2","H1","TR"]);function a(t,e,n,o,r,l,u={offset:0}){if(3===t.nodeType){let e=t.nodeValue;if(o===t?n.push(e.substr(0,r)+""+e.substr(r)):n.push(e),l&&e.length&&t.parentNode){const n=t.parentElement;for(const t in i){const s=i[t],a=n.closest(s.match+", [contenteditable]");null===(null==a?void 0:a.getAttribute("contenteditable"))&&("messageEntityTextUrl"===s.entityName?l.push({_:s.entityName,url:a.href,offset:u.offset,length:e.length}):"messageEntityMentionName"===s.entityName?l.push({_:s.entityName,offset:u.offset,length:e.length,user_id:a.dataset.follow.toUserId()}):l.push({_:s.entityName,offset:u.offset,length:e.length}))}}return void(u.offset+=e.length)}if(1!==t.nodeType)return;const c=o===t,h=s.has(t.tagName);if(h&&n.length)e.push(n.join("")),n.splice(0,n.length),++u.offset;else if(t instanceof HTMLImageElement){const e=t.alt;e&&(n.push(e),u.offset+=e.length)}c&&!r&&n.push("");const d=t.matches('[style*="table-cell"], th, td'),p=null==l?void 0:l.length;let m=t.firstChild;for(;m;)a(m,e,n,o,r,l,u),m=m.nextSibling;if(c&&r&&n.push(""),d&&t.nextSibling&&(n.push(" "),++u.offset,void 0!==p))for(let t=p,e=l.length;t<e;++t)++l[t].length;const f=n.length;h&&f&&(e.push(n.join("")),n.splice(0,f),++u.offset),f&&"P"===t.tagName&&t.nextSibling&&(e.push(""),++u.offset)}},117:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(96);function s(t){return t.hasAttribute("contenteditable")||"INPUT"!==t.tagName?!Object(i.a)(t,!1).value.trim():!t.value.trim()}},187:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(9),s=n(47),a=function(t,e,n,i){return new(n||(n=Promise))((function(s,a){function o(t){try{l(i.next(t))}catch(t){a(t)}}function r(t){try{l(i.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,r)}l((i=i.apply(t,e||[])).next())}))};var o=new class{constructor(){this.blobSupported=!0;try{Object(s.a)([],"")}catch(t){this.blobSupported=!1}}isAvailable(){return this.blobSupported}getFakeFileWriter(t,e,n){let i=new Uint8Array(e);return{write:(t,e)=>a(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;i.set(t,e)})),truncate:()=>{i=new Uint8Array},trim:t=>{i=i.slice(0,t)},finalize:(e=!0)=>{const a=Object(s.a)(i,t);return e&&n&&n(a),a},getParts:()=>i,replaceParts:t=>{i=t}}}},r=function(t,e,n,i){return new(n||(n=Promise))((function(s,a){function o(t){try{l(i.next(t))}catch(t){a(t)}}function r(t){try{l(i.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,r)}l((i=i.apply(t,e||[])).next())}))};class l{constructor(t){this.dbName=t,this.useStorage=!0,i.a.test&&(this.dbName+="_test"),l.STORAGES.length&&(this.useStorage=l.STORAGES[0].useStorage),this.openDatabase(),l.STORAGES.push(this)}openDatabase(){var t;return null!==(t=this.openDbPromise)&&void 0!==t?t:this.openDbPromise=caches.open(this.dbName)}delete(t){return this.timeoutOperation(e=>e.delete("/"+t))}deleteAll(){return caches.delete(this.dbName)}get(t){return this.timeoutOperation(e=>e.match("/"+t))}save(t,e){return this.timeoutOperation(n=>n.put("/"+t,e))}getFile(t,e="blob"){return this.get(t).then(t=>{if(!t)throw"NO_ENTRY_FOUND";return t[e]()})}saveFile(t,e){e instanceof Blob||(e=Object(s.a)(e));const n=new Response(e,{headers:{"Content-Length":""+e.size}});return this.save(t,n).then(()=>e)}timeoutOperation(t){return this.useStorage?new Promise((e,n)=>r(this,void 0,void 0,(function*(){let i=!1;const s=setTimeout(()=>{n(),i=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const s=yield t(n);if(i)return;e(s)}catch(t){n(t)}clearTimeout(s)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(t,e,n){const i=o.getFakeFileWriter(n,e,e=>this.saveFile(t,e).catch(()=>e));return Promise.resolve(i)}static toggleStorage(t){return Promise.all(this.STORAGES.map(e=>{if(e.useStorage=t,!t)return e.deleteAll()}))}}l.STORAGES=[]},59:function(t,e,n){"use strict";function i(t,e){if("string"==typeof e)return void(t.innerHTML=e);const n=t.firstChild;n?t.lastChild===n?n.replaceWith(e):(t.textContent="",t.append(e)):t.append(e)}n.d(e,"a",(function(){return i}))},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n(114),s=n(105),a=n(106),o=n(96),r=n(117);var l=n(66),u=n(7),c=n(27),h=n(74);let d=()=>{document.addEventListener("paste",t=>{if(!Object(a.a)(t.target,'contenteditable="true"'))return;let e,n;t.preventDefault();let i=(t.originalEvent||t).clipboardData.getData("text/plain"),r=!0,l=(t.originalEvent||t).clipboardData.getData("text/html");if(l.trim()){l=l.replace(/<style([\s\S]*)<\/style>/,""),l=l.replace(/<!--([\s\S]*)-->/,"");const t=l.match(/<body>([\s\S]*)<\/body>/);t&&(l=t[1].trim());let s=document.createElement("span");s.innerHTML=l;let a=s.firstChild;for(;a;){let t=a.nextSibling;3===a.nodeType&&(a.nodeValue.trim()||a.remove()),a=t}const u=Object(o.a)(s,!0);if(u.value.replace(/\s/g,"").length===i.replace(/\s/g,"").length){e=u.value,n=u.entities,r=!1;let t=c.b.parseEntities(e);t=t.filter(t=>"messageEntityEmoji"===t._||"messageEntityLinebreak"===t._),c.b.mergeEntities(n,t)}}r&&(e=i,n=c.b.parseEntities(e),n=n.filter(t=>"messageEntityEmoji"===t._||"messageEntityLinebreak"===t._));const u=c.b.wrapDraftText(e,{entities:n});e=Object(s.a)(u),window.document.execCommand("insertHTML",!1,e)}),d=null};var p;!function(t){t[t.Neutral=0]="Neutral",t[t.Valid=1]="Valid",t[t.Error=2]="Error"}(p||(p={}));e.b=class{constructor(t={}){this.options=t,this.container=document.createElement("div"),this.container.classList.add("input-field"),this.required=t.required,this.validate=t.validate,void 0!==t.maxLength&&void 0===t.showLengthOn&&(t.showLengthOn=Math.min(40,Math.round(t.maxLength/3)));const{placeholder:e,maxLength:n,showLengthOn:i,name:s,plainText:a,canBeEdited:l=!0}=t;let c,h,p=t.label||t.labelText;if(a)this.container.innerHTML=`\n      <input type="text" ${s?`name="${s}"`:""} autocomplete="off" ${p?'required=""':""} class="input-field-input">\n      `,c=this.container.firstElementChild;else{d&&d(),this.container.innerHTML=`\n      <div contenteditable="${String(!!l)}" class="input-field-input"></div>\n      `,c=this.container.firstElementChild;const e=new MutationObserver(()=>{h&&h()});c.addEventListener("input",()=>{Object(r.a)(c)&&(c.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=c.innerHTML,this.onFakeInput())}),e.observe(c,{characterData:!0,childList:!0,subtree:!0}),t.animate&&(c.classList.add("scrollable","scrollable-y"),this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=c.className+" input-field-input-fake")}if(c.setAttribute("dir","auto"),e&&(Object(u.b)(c,e,void 0,"placeholder"),this.inputFake&&Object(u.b)(this.inputFake,e,void 0,"placeholder")),p||e){const t=document.createElement("div");t.classList.add("input-field-border"),this.container.append(t)}if(p&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),n){const t=this.container.lastElementChild;let e=!1;h=()=>{const s=c.classList.contains("error"),r=a?c.value.length:[...Object(o.a)(c,!1).value].length,l=n-r,u=l<0;c.classList.toggle("error",u),u||l<=i?(this.setLabel(),t.append(` (${n-r})`),e||(e=!0)):(s&&!u||e)&&(this.setLabel(),e=!1)},c.addEventListener("input",h)}this.input=c}select(){this.value&&(this.options.plainText?this.input.select():function(t){const e=document.createRange();e.selectNodeContents(t);const n=window.getSelection();n.removeAllRanges(),n.addRange(e)}(this.input))}setLabel(){this.label.textContent="",this.options.labelText?Object(l.a)(this.label,this.options.labelText):this.label.append(Object(u.d)(this.options.label,this.options.labelOptions))}onFakeInput(t=!0){const{scrollHeight:e}=this.inputFake,n=+this.input.style.height.replace("px","");if(n===e)return;const i=Math.round(50*Math.log(Math.abs(e-n)));this.input.style.transitionDuration=i+"ms",t&&(this.input.style.height=e?e+"px":"");Object(h.a)(this.input,"is-changing-height",!0,i,()=>{this.input.classList.remove("is-changing-height")})}get value(){return this.options.plainText?this.input.value:Object(o.a)(this.input,!1).value}set value(t){this.setValueSilently(t,!1),Object(i.a)(this.input,"input")}setValueSilently(t,e=!0){this.options.plainText?this.input.value=t:(this.input.innerHTML=t,this.inputFake&&(this.inputFake.innerHTML=t,e&&this.onFakeInput()))}isChanged(){return this.value!==this.originalValue}isValid(){return!this.input.classList.contains("error")&&(!this.validate||this.validate())&&(!this.required||!Object(r.a)(this.input))}isValidToChange(){return this.isValid()&&this.isChanged()}setDraftValue(t="",e=!1){this.options.plainText||(t=Object(s.a)(c.b.wrapDraftText(t))),e?this.setValueSilently(t,!1):this.value=t}setOriginalValue(t="",e=!1){this.originalValue=t,this.setDraftValue(t,e)}setState(t,e){e&&(this.label.textContent="",this.label.append(Object(u.d)(e,this.options.labelOptions))),this.input.classList.toggle("error",!!(t&p.Error)),this.input.classList.toggle("valid",!!(t&p.Valid))}setError(t){this.setState(p.Error,t)}}},66:function(t,e,n){"use strict";function i(t,e){t.setAttribute("dir","auto"),"string"==typeof e?e?t.innerHTML=e:t.textContent="":(t.textContent="",t.append(e))}n.d(e,"a",(function(){return i}))},74:function(t,e,n){"use strict";var i=n(0);const s=(t,e,n,a,o,r)=>{const{timeout:l,raf:u}=t.dataset;if(void 0!==l&&clearTimeout(+l),void 0!==u&&(window.cancelAnimationFrame(+u),r||delete t.dataset.raf),r&&i.a.settings.animationsEnabled&&a)return void(t.dataset.raf=""+window.requestAnimationFrame(()=>{delete t.dataset.raf,s(t,e,n,a,o,r-1)}));n&&e&&t.classList.add(e);const c=()=>{delete t.dataset.timeout,!n&&e&&t.classList.remove("backwards",e),t.classList.remove("animating"),o&&o()};if(!i.a.settings.animationsEnabled||!a)return t.classList.remove("animating","backwards"),void c();t.classList.add("animating"),t.classList.toggle("backwards",!n),t.dataset.timeout=""+setTimeout(c,a)};e.a=s},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(1),s=n(27),a=n(107);function o(t,e=!0){const n=[],i=[],o=e?[]:void 0;Object(a.a)(t,n,i,void 0,void 0,o),i.length&&n.push(i.join(""));let r=n.join("\n");return r=r.replace(/\u00A0/g," "),(null==o?void 0:o.length)&&(s.b.combineSameEntities(o),s.b.sortEntities(o)),{value:r,entities:o}}i.a.getRichValue=o}}]);
//# sourceMappingURL=2.c6719cf29f278d18da90.chunk.js.map