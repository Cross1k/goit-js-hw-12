import{a as g,i as m,S as L}from"./assets/vendor-a8035ad9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function y(){return await g.get("https://pixabay.com/api/?",{params:{key:"44114689-8a541e952a98dbeee0dc95ac7",q:f,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o}})}let u=0;function h(a){o==1&&(i.innerHTML=""),l.remove(),u=a.data.total,console.log(u);const r=a.data.hits;if(!r.length)return m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const n=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");i.insertAdjacentHTML("beforeend",n),new L(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const i=document.querySelector(".gallery");let f="",o=1;const v=document.querySelector(".form-button"),p=document.querySelector(".form-input"),s=document.querySelector(".load-more"),l=document.createElement("span");l.classList.add("loader");p.addEventListener("input",()=>{f=p.value.trim(),o=1});v.addEventListener("click",async a=>{a.preventDefault(),i.innerHTML="",f&&(i.append(l),await y().then(r=>h(r)),p.value="",o+=1,s.classList.remove("visually-hidden"))});s.addEventListener("click",async()=>{if(s.classList.add("visually-hidden"),i.append(l),await y().then(a=>h(a)),o+=1,s.classList.remove("visually-hidden"),o>u/15)return s.classList.add("visually-hidden"),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
