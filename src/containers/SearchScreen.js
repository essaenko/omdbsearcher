import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/SearchScreen.css";
import SearchComponent from "../components/SearchComponent";
import * as moviesActions from "../store/searchForm/actions";
import * as moviesSelectors from "../store/searchForm/reducer";
import {withRouter} from "react-router-dom"
import SearchResultScreen from "./SearchResultScreen";
import * as movieActions from "../store/movie/actions";

class SearchScreen extends Component{
    constructor({props, match}){
        super(props)
    }
    render(){
        return (
            <div>
                <h2>Find your favorite movie</h2>
                <SearchComponent 
                onSearchInput={(searchPhrase) => {
                    this.setSearchPhrase(searchPhrase);
                }}
                searchPhrase={this.props.SearchText}
                isSearchPage={!!this.props.match.params.page && Number(this.props.match.params.page) < 2}
                onSearchStart={() => {
                    if(!!!this.props.match.params.page && Number(this.props.match.params.page) < 2){
                        this.props.history.push('/search/1');
                    }
                    let search = this.props.SearchText;
                    if(!isNaN(+search)){
                        this.props.dispatch(movieActions.fetchMovieById(this.props.SearchText));
                    }else if (typeof search === "string"){
                        this.props.dispatch(movieActions.fetchMovieByTitle(search));
                    }
                }}
                ></SearchComponent>
            </div>
        );
    }
    setSearchPhrase(searchPhrase){
        this.props.dispatch(moviesActions.setSearchPhrase(searchPhrase));
    }
}

function mapStateToProps(state){
    return {
        SearchText: moviesSelectors.getSearchPhrase(state)
    }
}

export default withRouter(connect(mapStateToProps)(SearchScreen));