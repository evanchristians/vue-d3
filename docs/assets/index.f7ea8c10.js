import{c as e,d as r}from"./vendor.575ae4bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const t={},n=function(e,r){return r&&0!==r.length?Promise.all(r.map((e=>{if((e=`/${e}`)in t)return;t[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=r?"stylesheet":"modulepreload",r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r?new Promise(((e,r)=>{o.addEventListener("load",e),o.addEventListener("error",r)})):void 0}))).then((()=>e())):e()};e(r((()=>n((()=>import("./App.283f0fd4.js")),["assets/App.283f0fd4.js","assets/vendor.575ae4bd.js"])))).mount("#app");export{n as _};
