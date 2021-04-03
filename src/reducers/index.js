import { ADD_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions';

const initialMoviesState = {
    list: [],
    favorites: []
}

export default function movies(state = initialMoviesState, action) {
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
        default:
            return state;
    }
}
