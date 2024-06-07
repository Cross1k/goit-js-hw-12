import{a as L,i as y,S as v}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();async function h(){return await L.get("https://pixabay.com/api/?",{params:{key:"44114689-8a541e952a98dbeee0dc95ac7",q:f,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}})}let p=0;async function m(a){s==1&&(i.innerHTML=""),n.remove(),p=a.data.total;const o=a.data.hits;if(!o.length)return l.classList.add("visually-hidden"),y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const c=o.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${t.likes}</p>
          </li>
          <li><h3>Views</h3><p>${t.views}</p>
            </li>
            <li><h3>Comments</h3><p>${t.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${t.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");i.insertAdjacentHTML("beforeend",c)}const i=document.querySelector(".gallery");let f="",s=1;const w=document.querySelector(".form-button"),u=document.querySelector(".form-input"),l=document.querySelector(".load-more"),n=document.createElement("span");n.classList.add("loader");u.addEventListener("input",()=>{f=u.value.trim(),s=1});w.addEventListener("click",async a=>{a.preventDefault(),i.innerHTML="",l.classList.add("visually-hidden"),f&&(i.append(n),await h().then(o=>m(o)),u.value="",s+=1,p>15&&l.classList.remove("visually-hidden")),g.refresh()});l.addEventListener("click",async()=>{const a=document.querySelector(".gallery-item").getBoundingClientRect().height*2;if(i.append(n),await h().then(o=>m(o)),s+=1,window.scrollBy({top:a,behavior:"smooth"}),g.refresh(),s>p/15)return l.classList.add("visually-hidden"),y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})});let g=new v(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
