import * as types from "./actionTypes";

const initialState = {
    movie: Object,
    finded: false,
    error: "Oops. It seems you haven't searched for a movie.",
    movies_list: []
};

export default function reduce(state = initialState, action = {}){
    switch(action.type){
        case types.FETCH_MOVIE:
            return {...state, movie: action.movie, finded: true};
        case types.MOVIE_NOT_FOUND:
            return {...state, error:action.error, finded: false }; 
        case types.FETCH_MOVIE_LIST:
            return {...state, movies_list: action.moviesList}
        default:
            return state;
    }
}

export function getMovie(state) {
    return state.movie.movie;
}
export function isMovieFinded(state){
    return state.movie.finded;
}

export function fetchError(state){
    return state.movie.error;
}

export function getMoviesList(state){
    return state.movie.movies_list;
}