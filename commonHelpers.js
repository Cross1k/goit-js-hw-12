import{a as y,i as g,S as h}from"./assets/vendor-a8035ad9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function p(){return await y.get("https://pixabay.com/api/?",{params:{key:"44114689-8a541e952a98dbeee0dc95ac7",q:u,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:5,page:o}})}function f(a){o==1&&(n.innerHTML=""),s.remove();const r=a.data.hits;if(!r.length)return g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const i=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");n.insertAdjacentHTML("beforeend",i),new h(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const n=document.querySelector(".gallery");let u="",o=1;const L=document.querySelector(".form-button"),d=document.querySelector(".form-input"),m=document.querySelector(".load-more"),s=document.createElement("span");s.classList.add("loader");d.addEventListener("input",()=>{u=d.value.trim(),o=1});L.addEventListener("click",async a=>{a.preventDefault(),u&&(n.append(s),await p().then(r=>f(r))),d.value="",o+=1,o>1&&m.classList.remove("visually-hidden")});m.addEventListener("click",async()=>{n.append(s),await p().then(a=>f(a)),o+=1});
//# sourceMappingURL=commonHelpers.js.map
