import{i as c,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".search-form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader");u();m.addEventListener("submit",f);function f(i){i.preventDefault();const r=i.target.elements.image.value.trim();if(r===""){a.innerHTML="",c.show({title:"Error",message:"Please enter a search term to begin your search.",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"});return}else y(),g(r).then(o=>{if(o.totalHits>0){const s=o.hits.map(d).join(`

`);a.innerHTML=s,h.refresh()}else a.innerHTML="",c.show({title:"Error",message:"There are no images matching your search query. Please try again!",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"})}).catch(o=>console.error(o)).finally(()=>{u()});evt.target.reset()}function g(i){const r="https://pixabay.com/api/",o=`?key=42174217-6daf07c41ac875e98ae2151fa&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`,s=r+o;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d({webformatURL:i,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:n}){return`<li class="gallery-item"><a href="${r}"><img class="gallery-image" src="${i}" alt="${o}" /></a>
<div class="description"> <p>Likes <span>${s}</span></p><p>Views <span>${e}</span></p><p>Comments <span>${t}</span></p><p>Downloads <span>${n}</span></p></div></li>`}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(){l.style.display="block"}function u(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map