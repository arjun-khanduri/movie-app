import { ADD_MOVIES, ADD_FAVORITE } from '../actions';

const initialMoviesState = {
    list: [],
    favorites: []
}

export default function movies(state = initialMoviesState, action) {
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_FAVORITE:
            return{
                ...state,
                favorites: [action.movie, ...state.favorites]
            }
        default:
            return state;
    }
}
