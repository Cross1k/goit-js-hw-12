import{a as y,i as g,S as h}from"./assets/vendor-a8035ad9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function u(){return await y.get("https://pixabay.com/api/?",{params:{key:"44114689-8a541e952a98dbeee0dc95ac7",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:a}})}function p(o){d.remove();const r=o.data.hits;if(!r.length)return g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const s=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");f.insertAdjacentHTML("beforeend",s),new h(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const f=document.querySelector(".gallery");let c="",a=1;const L=document.querySelector(".form-button"),n=document.querySelector(".form-input"),m=document.querySelector(".load-more"),d=document.createElement("span");d.classList.add("loader");n.addEventListener("input",()=>{c=n.value.trim(),a=1});L.addEventListener("click",o=>{o.preventDefault(),c&&(f.append(d),u().then(r=>p(r))),n.value="",a+=1,a>1&&m.classList.remove("visually-hidden")});m.addEventListener("click",async()=>{await u().then(o=>p(o)),a+=1});
//# sourceMappingURL=commonHelpers.js.map
