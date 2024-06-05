import{a as m,S as y,i as g}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function d(){return await m.get("https://pixabay.com/api/?",{params:{key:"44114689-8a541e952a98dbeee0dc95ac7",q:u,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:a}})}function p(o){n.innerHTML="";const s=o.data.hits.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");n.insertAdjacentHTML("beforeend",s),new y(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const n=document.querySelector(".gallery");let u="",a=1;const h=document.querySelector(".form-button"),c=document.querySelector(".form-input"),f=document.querySelector(".load-more");c.addEventListener("input",()=>{u=c.value.trim()});h.addEventListener("click",o=>{o.preventDefault(),u&&(n.innerHTML='<span class="loader"></span>',d().then(r=>p(r)).catch(r=>{console.log(r),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})),c.value="",a+=1,a>1&&f.classList.remove("visually-hidden")});f.addEventListener("click",()=>{d().then(o=>p(o)),a+=1});
//# sourceMappingURL=commonHelpers.js.map
