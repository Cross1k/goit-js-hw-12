import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { pixabayAxios } from './js/pixabay-api';
import { renderGallery, total } from './js/render-functions';
export const gallery = document.querySelector('.gallery');
export let q = '';
export let page = 1;

const formBtn = document.querySelector('.form-button');
const formInp = document.querySelector('.form-input');
export const loadBtn = document.querySelector('.load-more');
export const loaderSpan = document.createElement('span');
loaderSpan.classList.add('loader');

formInp.addEventListener('input', () => {
  q = formInp.value.trim();
  page = 1;
});

formBtn.addEventListener('click', async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  loadBtn.classList.add('visually-hidden');
  if (q) {
    gallery.append(loaderSpan);
    await pixabayAxios().then(data => renderGallery(data));
    formInp.value = '';
    page += 1;
    if (total > 15) loadBtn.classList.remove('visually-hidden');
  }
});

loadBtn.addEventListener('click', async () => {
  const scrollHeight =
    document.querySelector('.gallery-item').getBoundingClientRect().height * 2;
  gallery.append(loaderSpan);
  await pixabayAxios().then(data => renderGallery(data));
  page += 1;
  window.scrollBy({
    top: scrollHeight,
    behavior: 'smooth',
  });
  if (page > total / 15) {
    loadBtn.classList.add('visually-hidden');
    return iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }
});
