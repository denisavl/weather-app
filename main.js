(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),a=t.n(r),o=t(645),s=t.n(o),i=t(667),c=t.n(i),d=new URL(t(145),t.b),u=s()(a());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Acme&display=swap);"]);var p=c()(d);u.push([e.id,`body,\nhtml {\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(to bottom, #0080ff, #00bfff);\n  background-attachment: fixed;\n  color: #fff;\n  font-family: 'Acme', sans-serif;\n}\n\n.main-page {\n  height: 100%;\n}\n\n.top-nav {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px;\n  align-items: center;\n}\n\n.logo{\n display: flex;\n align-items: center;\n gap:5px;\n}\n\n#logo-img{\n  width: 55px;\n  height: 55px;\n}\n\n.logo-name{\n  font-size: 24px;\n}\n\n.buttons > button{\n  padding: 7px 40px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: transparent;\n  margin-left: 10px;\n  cursor: pointer;\n  background-color: #ece5e5;\n  font-family: 'Acme', sans-serif;\n}\n\n.custom-button {\n  background: transparent;\n  border: none; \n  cursor: pointer;\n}\n\n.custom-button img {\n  width: 30px;\n  height: 30px;\n}\n\nform{\n  border-radius: 8px;\n  background-color: #ece5e5;\n}\n\nbutton[type="submit"] {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 50px;\n  border: 1px solid transparent;\n  background: transparent url(${p}) no-repeat center;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\ninput[type="search"] {\n  border: none;\n  background: transparent;\n  padding: 7px;\n  font-size: 18px;\n  border: 1px solid transparent;\n  width: 350px;\n  font-family: 'Acme', sans-serif;\n}\n\ninput[type="search"]:focus {\n  border-color: transparent;\n  outline: none;\n}\n\n.center{\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n\n.degree{\n margin-top: 10px;\n  display: flex; \n  flex-direction: column;\n  align-items: center;\n  font-size: 90px; \n  font-weight: bold; \n}\n\n.location-name{\n  font-size: 36px;\n  text-align: center;\n  letter-spacing: 1px;\n  font-family: 'Lucida Sans', sans-serif;\n}\n\n.date{\n  font-size: 22px;\n  text-align: center;\n  color: #e6e5e5;\n  letter-spacing: 1px;\n  margin-top: 3px;\n}\n\n.weather-description{\n  font-size: 26px;\n  text-align: center;\n}\n\n.week-temp{\n  display: flex;\n  justify-content: center;\n  gap:20px;\n  margin:20px;\n  letter-spacing: 1px;\n}\n\n.week-temp>div{\n  padding: 10px 15px;\n  font-size: 18px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.daily-temp{\n  font-size: 24px;\n  margin: 5px;\n}\n\n.daily-temp-description{\n  font-size: 16px;\n  color: #e6e5e5;\n}\n\n.right-side{\n  padding: 30px;\n  text-align: center;\n  letter-spacing: 1px;\n}\n\n.greeting,\n.day{\n  font-size: 24px;\n  padding: 10px;\n  font-family: 'Lucida Sans', sans-serif;\n}\n\n.details-container{\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  width: 490px;\n  height: 400px;\n  /* margin-left: auto;\n  margin-right: auto; */\n  margin: 40px auto 50px auto;\n  gap:30px;\n}\n\n.details-container> div{\n  background-color: #127eca;\n  border-radius: 8px;\n  font-size: 22px;\n}\n\n.details-title{\n  color: #e6e5e5;\n}\n\n.right-grade{\n  font-size: 36px;\n}\n\n.feels-like{\n  font-size: 20px;\n  color: #e6e5e5;\n  text-align: center;\n}\n\n.error-message{\n  text-align: center;\n  color: red;\n  padding: 5px;\n  display: none;\n}`,""]);const l=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],u=o[d]||0,p="".concat(d," ").concat(u);o[d]=u+1;var l=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var g=a(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=t(o[s]);n[i].references--}for(var c=r(e,a),d=0;d<o.length;d++){var u=t(o[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},145:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2718%27 height=%2718%27 class=%27bi bi-search%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z%27%3E%3C/path%3E%3C/svg%3E"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),s=t.n(o),i=t(565),c=t.n(i),d=t(216),u=t.n(d),p=t(589),l=t.n(p),m=t(426),g={};g.styleTagTransform=l(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){function e(e){let n,t=e.split(":"),r=parseInt(t[0],10),a=parseInt(t[1].split(" ")[0],10),o=t[1].split(" ")[1];return"PM"===o&&12!==r?r+=12:"AM"===o&&12===r&&(r=0),n=`${r.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`,n}return{city:async function(e,n){e||(e="bucharest");const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}/?key=8SS9SMC786ZB9KE3VULV3CXAM&lang=en&unitGroup=${n}&iconSet=icons2 `,{mode:"cors"}),r=await t.json();return console.log(r),r},forecastData:async function(e){e||(e="bucharest");const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c6aa9b9a03f6449b82b131854232809&q=${e}`,{mode:"cors"});return await n.json()},weatherDetails:function(n){return{wind:n.current.wind_kph,humidity:n.current.humidity,UV:n.current.uv,pressure:n.current.pressure_mb,rain:n.forecast.forecastday[0].day.daily_chance_of_rain,precip:n.current.precip_mm,sunrise:e(n.forecast.forecastday[0].astro.sunrise),sunset:e(n.forecast.forecastday[0].astro.sunset),clouds:n.current.cloud}}}}(),h=(()=>{function e(e){return e.split(" ")[0]}return{createDate:function(e){document.querySelector(".date").textContent=e},extractLocation:function(e){document.querySelector(".city-name").textContent=e.resolvedAddress},searchCity:function(){return document.querySelector("#search").value},displayTemp:function(e,n){const t=document.querySelector(".temperature"),r=document.querySelector(".feels-like-degree"),a=document.querySelector(".today-temp");"metric"===n?(t.textContent=Math.round(e.currentConditions.temp)+" °C",r.textContent=Math.round(e.currentConditions.feelslike)+" °C",a.textContent=Math.round(e.currentConditions.temp)+" °C"):"us"===n&&(t.textContent=Math.round(e.currentConditions.temp)+" °F",r.textContent=Math.round(e.currentConditions.feelslike)+" °F",a.textContent=Math.round(e.currentConditions.temp)+" °F")},weatherDescription:function(e){const n=document.querySelector(".weather-description"),t=e.currentConditions.conditions;n.textContent=t,document.querySelector(".today-descrip").textContent=t},displayDetails:function(e){const n=document.querySelector(".data-wind"),t=document.querySelector(".data-humidity"),r=document.querySelector(".data-UV"),a=document.querySelector(".data-pressure"),o=document.querySelector(".data-rain"),s=document.querySelector(".data-precip"),i=document.querySelector(".data-sunrise"),c=document.querySelector(".data-sunset"),d=document.querySelector(".data-clouds");n.textContent=Math.round(e.wind),t.textContent=e.humidity,r.textContent=e.UV,a.textContent=e.pressure,o.textContent=e.rain,s.textContent=e.precip,i.textContent=e.sunrise,c.textContent=e.sunset,d.textContent=e.clouds},display5DaysWeather:function(n,t){const r=document.querySelectorAll(".day"),a=document.querySelectorAll(".daily-temp"),o=document.querySelectorAll(".daily-temp-description"),s=new Date,i=new Date(s);if("metric"===t)for(let t=1;t<6;t++)i.setDate(s.getDate()+t),r[t].textContent=e(i.toDateString()),a[t].textContent=Math.round(n.days[t].temp)+" °C",o[t].textContent=n.days[t].conditions;else if("us"===t)for(let t=1;t<6;t++)i.setDate(s.getDate()+t),r[t].textContent=e(i.toDateString()),a[t].textContent=Math.round(n.days[t].temp)+" °F",o[t].textContent=n.days[t].conditions},changeWeatherIcon:function(e){const n=document.querySelector("#weather-icon");switch(e.currentConditions.icon){case"clear-day":n.src="../dist/images/clear-day.svg";break;case"clear-night":n.src="../dist/images/clear-night.png";break;case"cloudy":n.src="../dist/images/cloudy.png";break;case"fog":n.src="../dist/images/fog.svg";break;case"hail":n.src="../dist/images/fog.png";break;case"partly-cloudy-day":case"partly-cloudy-night":n.src="../dist/images/partly-cloudy-day.png";break;case"rain-snow-showers-day":n.src="../dist/images/rain-snow-showers-day.svg";break;case"rain-snow-showers-night":n.src="../dist/images/rain-snow-showers-night.svg";break;case"rain-snow":n.src="../dist/images/rain-snow.png";break;case"rain":n.src="../dist/images/rain.png";break;case"showers-day":n.src="../dist/images/showers-day.png";break;case"showers-night":n.src="../dist/images/showers-night.svg";break;case"sleet":n.src="../dist/images/sleet.png";break;case"snow-showers-day":n.src="../dist/images/snow-showers-day.svg";break;case"snow-showers-night":n.src="../dist/images/snow-showers-night.svg";break;case"snow":n.src="../dist/images/snow.png";break;case"thunder-rain":n.src="../dist/images/thunder-rain.png";break;case"thunder-showers-day":n.src="../dist/images/thunder-showers-day.svg";break;case"thunder-showers-night":n.src="../dist/images/thunder-showers-night.svg";break;case"thunder":n.src="../dist/images/thunder.png";break;case"wind":n.src="../dist/images/wind.png"}}}})();let y="metric";async function x(e){try{document.querySelector(".error-message").style.display="none";const t=await f.city(e,y),r=await f.forecastData(e),a=f.weatherDetails(r),o=(n=r.location.localtime,new Date(n).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}));h.extractLocation(t),h.displayTemp(t,y),h.weatherDescription(t),h.displayDetails(a),h.createDate(o),h.display5DaysWeather(t,y),h.changeWeatherIcon(t)}catch(e){document.querySelector(".error-message").style.display="block"}var n}document.querySelector(".submit-btn").addEventListener("click",(async e=>{e.preventDefault(),x(h.searchCity())})),document.querySelector(".C-F").addEventListener("click",(function(){y="metric"===y?"us":"metric",x(h.searchCity())})),document.addEventListener("DOMContentLoaded",(()=>{x("bucharest")}))})()})();