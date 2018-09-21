import * as types from "./actionTypes";

const initialState = {
    SearchText: String,
};

export default function reduce(state = initialState, action = {}){
    switch(action.type){
        case types.INPUT_SEARCH_PHRASE:
            return {...state, SearchText: action.searchPhrase};
        default:
            return state;
    }
}

export function getSearchPhrase(state) {
    return state.movies.SearchText;
}