import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '38421129-385ad5ee77a37193a2d5ae11d';
export const fetchImages = async (page, query) => {
  try {
    const resp = await axios.get('', {
      params: {
        key: apiKey,
        q: query,
        page: page,
        image_type: 'photo',
        per_page: 12,
      },
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
