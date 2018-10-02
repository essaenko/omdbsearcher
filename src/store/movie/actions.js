import * as types from "./actionTypes";
import API from "../../services/omdbapi";

const OMDBAPI = new API();

export function fetchMovieById(search){
    return (dispatch, getState) => {
        try{
            OMDBAPI.getMovieById(search).then(response => {
                if(response.data.Response === "True"){
                    dispatch({
                        type: types.FETCH_MOVIE,
                        movie:response.data
                    });
                }else{
                    dispatch({
                        type: types.MOVIE_NOT_FOUND,
                        error:response.data.Error
                    });
                }
            }).catch(e => {
                console.log(e);
            });
        }catch(e){
            console.log(e);
        }
    }
}
export function fetchMovieByTitle(search) {
    return (dispatch, getState) => {
        try{
            OMDBAPI.getMovieByTitle(search).then(response => {
                if(response.data.Response === "True"){
                    dispatch({
                        type: types.FETCH_MOVIE_LIST,
                        moviesList:response.data.Search
                    });
                }else{
                    dispatch({
                        type: types.MOVIE_NOT_FOUND,
                        error:response.data.Error
                    });
                }
            }).catch(e => {
                console.log(e);
            });
        }catch(e){
            console.log(e);
        }
    }
}

export function fetchNextPage(){
    return (dispatch, getState) => {
        try{
            OMDBAPI.fetchNextPage(getState().movies).then(response => {
                if(response.data.Response === "True"){
                    dispatch({
                        type: types.FETCH_MOVIE_LIST,
                        moviesList:response.data.Search
                    });
                }else{
                    dispatch({
                        type: types.MOVIE_NOT_FOUND,
                        error:response.data.Error
                    });
                }
            }).catch(e => {
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }
    }
}