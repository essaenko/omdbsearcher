import * as types from "./actionTypes";

export function setSearchPhrase(searchPhrase){
    return (dispatch, getState) => {
        dispatch({
            type: types.INPUT_SEARCH_PHRASE,
            searchPhrase: searchPhrase
        });
    }
}