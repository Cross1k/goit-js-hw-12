import axios from 'axios';
import { q, page } from '../main.js';

export async function pixabayAxios() {
  return await axios.get(`https://pixabay.com/api/?`, {
    params: {
      key: '44114689-8a541e952a98dbeee0dc95ac7',
      q: q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 5,
      page: page,
    },
  });
}
