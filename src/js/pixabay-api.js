import { q } from '../main.js';

export function pixabayFetch() {
  return fetch(
    `https://pixabay.com/api/?key=44114689-8a541e952a98dbeee0dc95ac7&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
