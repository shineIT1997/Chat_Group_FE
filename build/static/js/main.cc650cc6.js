(()=>{"use strict";var e={197:(e,r,_)=>{var a=_(294),o=_(935);var n=_(749),t=_.n(n);const src_App=e=>a.createElement(t(),{appId:"350529136341118",autoLoad:!0,fields:"name,email,picture",callback:e=>console.log("resp : ",e),render:e=>{e.onClick}});o.render(a.createElement(src_App,null),document.getElementById("root")),function register(){"serviceWorker"in navigator&&window.addEventListener("load",(()=>{const e=`${process.env.PUBLIC_URL}/service-worker.js`;navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const r=e.installing;r.onstatechange=()=>{"installed"===r.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((e=>{console.error("Error during service worker registration:",e)}))}))}()}},r={};function __webpack_require__(_){var a=r[_];if(void 0!==a)return a.exports;var o=r[_]={exports:{}};return e[_].call(o.exports,o,o.exports,__webpack_require__),o.exports}__webpack_require__.m=e,(()=>{var e=[];__webpack_require__.O=(r,_,a,o)=>{if(!_){var n=1/0;for(i=0;i<e.length;i++){for(var[_,a,o]=e[i],t=!0,c=0;c<_.length;c++)(!1&o||n>=o)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(t=!1,o<n&&(n=o));t&&(e.splice(i--,1),r=a())}return r}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[_,a,o]}})(),__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var a,o,[n,t,c]=_,i=0;for(a in t)__webpack_require__.o(t,a)&&(__webpack_require__.m[a]=t[a]);for(c&&c(__webpack_require__),r&&r(_);i<n.length;i++)o=n[i],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[n[i]]=0;__webpack_require__.O()},r=self.webpackChunkcreate_react_app=self.webpackChunkcreate_react_app||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})();var _=__webpack_require__.O(void 0,[230],(()=>__webpack_require__(197)));_=__webpack_require__.O(_)})();