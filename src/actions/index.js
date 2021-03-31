export const ADD_MOVIES = 'ADD_MOVIES';

export const addMovies = (movies) => {
    return({
        type: ADD_MOVIES,
        movies: movies
    })
}