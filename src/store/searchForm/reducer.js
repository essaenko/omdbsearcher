import * as types from "./actionTypes";

const initialState = {
    SearchText: String,
    SearchPage: 1,
};

export default function reduce(state = initialState, action = {}){
    switch(action.type){
        case types.INPUT_SEARCH_PHRASE:
            return {...state, SearchText: action.searchPhrase};
        case types.SET_SEARCH_PAGE:
            return {...state, SearchPage: action.searchPage}
        default:
            return state;
    }
}

export function getSearchPhrase(state) {
    return state.movies.SearchText;
}

export function getSearchPage(state){
    return state.movies.SearchPage;
}