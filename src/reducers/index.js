import { ADD_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE, SET_SHOW_FAVORITES } from '../actions';

const initialMoviesState = {
    list: [],
    favorites: [],
    showFavorite: false
}

export function movies(state = initialMoviesState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [action.movie, ...state.favorites]
            }
        case REMOVE_FAVORITE:
            const filteredArray = state.favorites.filter(
                movie => movie.title !== action.movie.title
            );
            return {
                ...state,
                favorites: filteredArray
            }
        case SET_SHOW_FAVORITES:
            return {
                ...state,
                showFavorites: action.val
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
};

export function search(state = initialSearchState, action) {
    return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
};

export default function rootReducer(state = initialRootState, action) {
    return{
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}