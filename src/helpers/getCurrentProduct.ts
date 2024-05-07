export const getResponse = async (category: 'phones' | 'tablets' | 'accessories') => {
  let url = '/api/phones.json';

  if (category === 'phones') {
    url = '/api/phones.json';
  }

  if (category === 'accessories') {
    url = '/api/accessories.json';
  }

  if (category === 'tablets') {
    url = '/api/tablets.json';
  }

  const response = await fetch(url);

  return response.json();
};
