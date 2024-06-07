import{a as g,i as f,S as L}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function m(){return await g.get("https://pixabay.com/api/?",{params:{key:"44114689-8a541e952a98dbeee0dc95ac7",q:y,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:a}})}let p=0;async function h(o){a==1&&(s.innerHTML=""),l.remove(),p=o.data.total;const r=o.data.hits;if(!r.length)return i.classList.toggle("visually-hidden"),f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const n=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");s.insertAdjacentHTML("beforeend",n),new L(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const s=document.querySelector(".gallery");let y="",a=1;const v=document.querySelector(".form-button"),u=document.querySelector(".form-input"),i=document.querySelector(".load-more"),l=document.createElement("span");l.classList.add("loader");u.addEventListener("input",()=>{y=u.value.trim(),a=1});v.addEventListener("click",async o=>{o.preventDefault(),s.innerHTML="",i.classList.add("visually-hidden"),y&&(s.append(l),await m().then(r=>h(r)),u.value="",a+=1,p>15&&i.classList.remove("visually-hidden"))});i.addEventListener("click",async()=>{const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;if(console.log(o),s.append(l),await m().then(r=>h(r)),a+=1,window.scrollBy({top:o,behavior:"smooth"}),a>p/15)return i.classList.add("visually-hidden"),f.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
