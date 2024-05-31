import { apiKey, apiToken } from './env.js';
import { NavigationLink } from './components/NavigationLink.js';
import { MovieCard } from './components/MovieCards.js';
import { setupSearchBar } from './components/SearchBar.js';
import { setupMovieHero } from './components/MovieHero.js';


// URL base
const baseUrl = 'https://api.themoviedb.org/3';

let currentPage = 1;

// funzione asincrona per recuperare film dal server utilizzando la fetch
export const fetchMovies = async (endpoint, page = currentPage) => {           //async...await
    console.log(`Recupero dei film dall'endpoint: ${endpoint} alla pagina: ${page}`);
    const url = `${baseUrl}/${endpoint}?api_key=${apiKey}&page=${page}`;

    try {   //try...catch per controllare errori
        const response = await fetch(url, {
            headers: { 'Authorization': `Bearer ${apiToken}` }
        });
        if (!response.ok) throw new Error('La risposta del network non è andata a buon fine');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
        return null;
    }
};

// funzione per creare la lista dei film
export const createMovieList = movies => {
    const MOVIE_LIST_EL = document.querySelector('.movies--list');
    if (!MOVIE_LIST_EL) {
        console.error('Elemento della lista dei film non trovato');
        return;
    }
    MOVIE_LIST_EL.innerHTML = '';
    movies.forEach(movie => {
        const card = MovieCard({
            id: movie.id,
            title: movie.title,
            image: movie.poster_path
        });
        MOVIE_LIST_EL.appendChild(card);
    });
};

// funzione per creare la navigazione basata sui generi ottenuti dall'API
const createNavigation = async (genres) => {
    const NAV_EL = document.querySelector('.navigation');
    if (!NAV_EL) {
        console.error('Elemento di navigazione non trovato');
        return;
    }
    NAV_EL.innerHTML = '';
    const filteredGenres = genres.filter(genre => !["Documentary", "Drama", "Family", "History", "Horror", "Mystery", "Romance", "TV Movie", "War", "Western"].includes(genre.name));
    const displayedGenres = filteredGenres.slice(0, 5);
    displayedGenres.forEach(genre => {
        const link = NavigationLink({
            content: genre.name,
            genreId: genre.id
        });
        NAV_EL.appendChild(link);
    });

    // altro (oltre i 5 link delle categorie di base)
    if (filteredGenres.length > 5) {
        const otherGenres = filteredGenres.slice(5);
        const otherLink = NavigationLink({
            content: 'Altro',
            children: otherGenres.map(genre => ({
                content: genre.name,
                genreId: genre.id
            })),
            isDropdown: true 
        });
        NAV_EL.appendChild(otherLink);
    }
};

//  controlli per la paginazione
const setupPaginationControls = () => {
    const nextPageButton = document.getElementById('nextPage');
    const prevPageButton = document.getElementById('prevPage');
    if (!nextPageButton || !prevPageButton) {
        console.error('Bottoni di paginazione non trovati');
        return;
    }

    nextPageButton.addEventListener('click', () => {
        currentPage++;
        fetchMovies('movie/popular?', currentPage)
            .then(data => createMovieList(data.results))
            .catch(error => console.error('Errore caricamento film:', error));
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchMovies('movie/popular?', currentPage)
            .then(data => createMovieList(data.results))
            .catch(error => console.error('Errore caricamento film:', error));
        }
    });
};

// inizializzazione del documento
document.addEventListener('DOMContentLoaded', async () => {
    await setupMovieHero();  // film più popolari
    fetchMovies('genre/movie/list?')
        .then(data => {
            if (data) {
                createNavigation(data.genres);
            }
        })
        .catch(error => console.error('Errore caricamento generi:', error));

    fetchMovies('movie/popular?')
        .then(data => {
            if (data) {
                createMovieList(data.results);
                setupPaginationControls();
            }
        })
        .catch(error => console.error('Errore caricamento film popolari:', error));

    const headerElement = document.querySelector('.site--bar');
    if (!headerElement) {
        console.error('Elemento header non trovato');
        return;
    }
    const searchBar = setupSearchBar();  
    headerElement.appendChild(searchBar);
});
