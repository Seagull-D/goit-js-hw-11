import{i as c,S as l}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(o){return fetch(`https://pixabay.com/api/?q=${o}&image_type=photo&orientation=horizontal&safesearch=true&key=47380819-2a2ad5e165b633e18b6fd0fd3`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function p(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:a})=>`<li class="list-item" >
  <a href="${r}" alt="${i}" title=""/>
    <img src="${s}" alt="${i}" class="img-item">
  <div class="list-container">
  <p class="item">likes <span>${e}</span></p>
  <p class="item">Wiews <span>${t}</span></p>
  <p class="item">Comments <span>${n}</span></p>
  <p class="item">Downlods <span>${a}</span></p>
  </div></a>
</li>`).join("")}const f=document.querySelector(".form-js"),m=document.querySelector(".list-js");f.addEventListener("submit",d);function d(o){o.preventDefault();const{picture:s}=o.target.elements;u(s.value).then(r=>{r.hits.length?(m.innerHTML=p(r.hits),h.refresh()):c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}).catch(r=>console.log(r.message)).finally(()=>{s.value=""})}const h=new l(".list-js a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"});
//# sourceMappingURL=index.js.map
