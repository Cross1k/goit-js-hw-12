import{a as g,i as f,S as L}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();async function m(){return await g.get("https://pixabay.com/api/?",{params:{key:"44114689-8a541e952a98dbeee0dc95ac7",q:y,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}})}let i=0;async function h(o){s==1&&(a.innerHTML=""),n.remove(),i=o.data.total,console.log(i);const r=o.data.hits;if(!r.length)return l.classList.toggle("visually-hidden"),f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const c=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");a.insertAdjacentHTML("beforeend",c),new L(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}const a=document.querySelector(".gallery");let y="",s=1;const v=document.querySelector(".form-button"),p=document.querySelector(".form-input"),l=document.querySelector(".load-more"),n=document.createElement("span");n.classList.add("loader");p.addEventListener("input",()=>{y=p.value.trim(),s=1});v.addEventListener("click",async o=>{o.preventDefault(),a.innerHTML="",l.classList.add("visually-hidden"),y&&(a.append(n),await m().then(r=>h(r)),p.value="",s+=1,i>15&&l.classList.remove("visually-hidden"))});l.addEventListener("click",async()=>{const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;if(console.log(o),window.scrollBy({top:o,behavior:"smooth"}),a.append(n),await m().then(r=>h(r)),s+=1,s>i/15)return l.classList.add("visually-hidden"),f.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
