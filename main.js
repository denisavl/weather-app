(()=>{"use strict";var n,e,t,r,a,o,i,s,p,c,d,l,u,f,g={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),p=t.n(s),c=new URL(t(145),t.b),d=i()(a());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Acme&display=swap);"]);var l=p()(c);d.push([n.id,`body,\nhtml {\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(to bottom, #0080ff, #00bfff);\n  background-attachment: fixed;\n  color: #fff;\n  font-family: 'Acme', sans-serif;\n}\n\n.main-page {\n  height: 100%;\n}\n\n.top-nav {\n  display: flex;\n  justify-content: space-between;\n  padding: 35px;\n  align-items: center;\n}\n\n.logo{\n display: flex;\n align-items: center;\n gap:5px;\n}\n\n#logo-img{\n  width: 55px;\n  height: 55px;\n}\n\n.logo-name{\n  font-size: 24px;\n}\n\n.buttons > button{\n  padding: 7px 40px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: transparent;\n  margin-left: 10px;\n  cursor: pointer;\n  background-color: #ece5e5;\n  font-family: 'Acme', sans-serif;\n}\n\n.custom-button {\n  background: transparent;\n  border: none; \n  cursor: pointer;\n}\n\n.custom-button img {\n  width: 30px;\n  height: 30px;\n}\n\nform{\n  border-radius: 8px;\n  background-color: #ece5e5;\n}\n\nbutton[type="submit"] {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 50px;\n  border: 1px solid transparent;\n  background: transparent url(${l}) no-repeat center;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\ninput[type="search"] {\n  border: none;\n  background: transparent;\n  padding: 7px;\n  font-size: 18px;\n  border: 1px solid transparent;\n  width: 350px;\n  font-family: 'Acme', sans-serif;\n}\n\ninput[type="search"]:focus {\n  border-color: transparent;\n  outline: none;\n}\n\n.center{\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n\n.degree{\n margin-top: 10px;\n  display: flex; \n  flex-direction: column;\n  align-items: center;\n  font-size: 90px; \n  font-weight: bold; \n}\n\n.city-name{\n  font-size: 36px;\n  text-align: center;\n  letter-spacing: 1px;\n  font-family: 'Lucida Sans', sans-serif;\n}\n\n.date{\n  font-size: 22px;\n  text-align: center;\n  color: #e6e5e5;\n  letter-spacing: 1px;\n  margin-top: 3px;\n}\n\n.weather-description{\n  font-size: 26px;\n  text-align: center;\n}\n\n.week-temp{\n  display: flex;\n  justify-content: center;\n  gap:20px;\n  margin:20px;\n  letter-spacing: 1px;\n}\n\n.week-temp>div{\n  padding: 10px 15px;\n  font-size: 18px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.daily-temp{\n  font-size: 24px;\n  margin: 5px;\n}\n\n.daily-temp-description{\n  font-size: 16px;\n  color: #e6e5e5;\n}\n\n.right-side{\n  padding: 30px;\n  text-align: center;\n  letter-spacing: 1px;\n}\n\n.greeting,\n.day{\n  font-size: 24px;\n  padding: 10px;\n  font-family: 'Lucida Sans', sans-serif;\n}\n\n.details-container{\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  width: 490px;\n  height: 400px;\n  /* margin-left: auto;\n  margin-right: auto; */\n  margin: 40px auto 50px auto;\n  gap:30px;\n}\n\n.details-container> div{\n  background-color: #127eca;\n  border-radius: 8px;\n  font-size: 22px;\n}\n\n.details-title{\n  color: #e6e5e5;\n}\n\n.right-grade{\n  font-size: 36px;\n}\n\n.feels-like{\n  font-size: 20px;\n  color: #e6e5e5;\n  text-align: center;\n}`,""]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(i[p]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var p=n[s],c=r.base?p[0]+r.base:p[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var u=t(l),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var p=r(n,a),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},145:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2718%27 height=%2718%27 class=%27bi bi-search%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z%27%3E%3C/path%3E%3C/svg%3E"}},x={};function m(n){var e=x[n];if(void 0!==e)return e.exports;var t=x[n]={id:n,exports:{}};return g[n](t,t.exports,m),t.exports}m.m=g,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),a=m(569),o=m.n(a),i=m(565),s=m.n(i),p=m(216),c=m.n(p),d=m(589),l=m.n(d),u=m(426),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,async function(){const n=await fetch("https://api.openweathermap.org/data/2.5/weather?q=bucharest,&appid=9f82adb2a6b93acd11a40b897a094e1b"),e=await n.json();console.log(e)}()})();