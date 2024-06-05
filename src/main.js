import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { pixabayFetch } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
export const gallery = document.querySelector('.gallery');
export let q = '';

const formBtn = document.querySelector('.form-button');
const formInp = document.querySelector('.form-input');

formInp.addEventListener('input', () => {
  q = formInp.value.trim();
});

formBtn.addEventListener('click', e => {
  e.preventDefault();
  if (q) {
    gallery.innerHTML = '<span class="loader"></span>';
    pixabayFetch()
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
});
