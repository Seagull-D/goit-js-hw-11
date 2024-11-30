(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(r){return fetch(`https://pixabay.com/api/?q=${r}&image_type=photo&orientation=horizontal&safesearch=true&key=47380819-2a2ad5e165b633e18b6fd0fd3`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function l(r){return console.log(r),r.map(({webformatURL:s,largeImageURL:n,tags:o,likes:e,views:t,comments:i,downloads:c})=>`<li class="list-item" >
  <img src="${s}" alt="${o}" class="img-item">
  <div class="list-container">
  <p class="item">likes <span>${e}</span></p>
  <p class="item">Wiews <span>${t}</span></p>
  <p class="item">Comments <span>${i}</span></p>
  <p class="item">Downlods <span>${c}</span></p>
  </div>
</li>`)}const u=document.querySelector(".form-js"),p=document.querySelector(".list-js");u.addEventListener("submit",f);function f(r){r.preventDefault();const{picture:s}=r.target.elements;a(s.value).then(n=>p.innerHTML=l(n.hits)).catch(n=>console.log(n.message)).finally(()=>s.value="")}
//# sourceMappingURL=index.js.map
