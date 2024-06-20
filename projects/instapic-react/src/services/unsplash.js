const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const fetchPhotos = async (query, count = 5) => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`);
    if (!response.ok) {
      throw new Error('Errore caricamento delle foto');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchPhotoById = async (id) => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${UNSPLASH_ACCESS_KEY}`);
    if (!response.ok) {
      throw new Error('Nessun ID trovato');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchPhotos, fetchPhotoById };
