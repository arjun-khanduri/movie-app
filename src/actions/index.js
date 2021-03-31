export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export const addMovies = (movies) => {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export const addFavorites = (movie) => {
    return {
        type: ADD_FAVORITE,
        movie
    }
}