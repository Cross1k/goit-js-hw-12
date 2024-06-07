import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { gallery, loadBtn, page, loaderSpan } from '../main';
export let total = 0;

export async function renderGallery(data) {
  if (page == 1) gallery.innerHTML = '';
  loaderSpan.remove();
  total = data.data.total;
  const images = data.data.hits;
  if (!images.length) {
    loadBtn.classList.toggle('visually-hidden');
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }
  const galleryView = images
    .map(image => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${image.likes}</p>
          </li>
          <li><h3>Views</h3><p>${image.views}</p>
            </li>
            <li><h3>Comments</h3><p>${image.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${image.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryView);
  let gall = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  gall.refresh();
}
