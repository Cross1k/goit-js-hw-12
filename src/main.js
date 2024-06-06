import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { pixabayAxios } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
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

formBtn.addEventListener('click', e => {
  e.preventDefault();
  if (q) {
    gallery.append(loaderSpan);
    pixabayAxios().then(data => renderGallery(data));
  }
  formInp.value = '';
  page += 1;
  if (page > 1) loadBtn.classList.remove('visually-hidden');
});

loadBtn.addEventListener('click', async () => {
  await pixabayAxios().then(data => renderGallery(data));
  page += 1;
});
