import{i as u,S as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(){return fetch(`https://pixabay.com/api/?key=44114689-8a541e952a98dbeee0dc95ac7&q=${c}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function d(o){a.innerHTML="";const r=o.hits;if(!r.length)return u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const i=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");a.insertAdjacentHTML("beforeend",i),new p(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const a=document.querySelector(".gallery");let c="";const h=document.querySelector(".form-button"),l=document.querySelector(".form-input");l.addEventListener("input",()=>{c=l.value.trim()});h.addEventListener("click",o=>{o.preventDefault(),c&&(a.innerHTML='<span class="loader"></span>',f().then(r=>d(r)).catch(r=>{console.log(r),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})),l.value=""});
//# sourceMappingURL=commonHelpers.js.map
