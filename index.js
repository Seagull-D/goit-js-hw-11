import{S as u,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function m(r){return fetch(`https://pixabay.com/api/?q=${r}&image_type=photo&orientation=horizontal&safesearch=true&key=47380819-2a2ad5e165b633e18b6fd0fd3`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function d(r){return r.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:s,comments:n,downloads:p})=>`<li class="list-item" >
  <a href="${i}" alt="${t}" title=""/>
    <img src="${o}" alt="${t}" class="img-item">
  <div class="list-container">
  <p class="item"><span class="item-text">Likes</span> <span>${e}</span></p>
  <p class="item"><span class="item-text">Wiews</span> <span>${s}</span></p>
  <p class="item"><span class="item-text">Comments</span> <span>${n}</span></p>
  <p class="item"><span class="item-text">Downlods</span> <span>${p}</span></p>
  </div></a>
</li>`).join("")}const f=new u(".list-js a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"}),h=document.querySelector(".form-js"),a=document.querySelector(".list-js"),l=document.querySelector(".loader");h.addEventListener("submit",g);function g(r){r.preventDefault();const{picture:o}=r.target.elements,i=o.value.trim();if(console.log(i),a.innerHTML="",!i||i===" "){c.show({title:":(",message:"Please add request!",position:"center",color:"red"}),a.innerHTML=":(";return}l.classList.remove("hidden"),m(i).then(t=>{console.log(t),t.hits.length?(a.innerHTML=d(t.hits),f.refresh()):(c.show({title:"X",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"}),a.innerHTML="<h1>Ooops... 👻</h1>")}).catch(t=>{console.log(t.message),c.show({title:"X",message:`${t.message}`,position:"center",color:"red"})}).finally(()=>{o.value="",l.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
