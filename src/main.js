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

formInp.addEventListener('input', () => {
  q = formInp.value.trim();
});

formBtn.addEventListener('click', e => {
  e.preventDefault();
  if (q) {
    gallery.innerHTML = '<span class="loader"></span>';
    pixabayAxios()
      .then(data => renderGallery(data))
      .catch(error => {
        console.log(error);
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      });
  }
  formInp.value = '';
  page += 1;
  if (page > 1) loadBtn.classList.remove('visually-hidden');
});

loadBtn.addEventListener('click', () => {
  pixabayAxios().then(data => renderGallery(data));
  page += 1;
});
