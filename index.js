import{S as l,i as p}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){return fetch(`https://pixabay.com/api/?q=${o}&image_type=photo&orientation=horizontal&safesearch=true&key=47380819-2a2ad5e165b633e18b6fd0fd3`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function m(o){return o.map(({webformatURL:i,largeImageURL:s,tags:r,likes:e,views:t,comments:n,downloads:c})=>`<li class="list-item" >
  <a href="${s}" alt="${r}" title=""/>
    <img src="${i}" alt="${r}" class="img-item">
  <div class="list-container">
  <p class="item"><span class="item-text">Likes</span> <span>${e}</span></p>
  <p class="item"><span class="item-text">Wiews</span> <span>${t}</span></p>
  <p class="item"><span class="item-text">Comments</span> <span>${n}</span></p>
  <p class="item"><span class="item-text">Downlods</span> <span>${c}</span></p>
  </div></a>
</li>`).join("")}const f=new l(".list-js a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"}),d=document.querySelector(".form-js"),h=document.querySelector(".list-js"),a=document.querySelector(".loader");d.addEventListener("submit",y);function y(o){o.preventDefault();const{picture:i}=o.target.elements;a.classList.remove("hidden"),u(i.value).then(s=>{s.hits.length?(h.innerHTML=m(s.hits),f.refresh()):(p.show({title:"X",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"}),s.hits=[])}).catch(s=>console.log(s.message)).finally(()=>{i.value="",a.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
