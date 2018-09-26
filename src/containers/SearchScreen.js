import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/SearchScreen.css";
import SearchComponent from "../components/SearchComponent";
import * as moviesActions from "../store/searchForm/actions";
import * as moviesSelectors from "../store/searchForm/reducer";
import {withRouter} from "react-router-dom"
import SearchResultScreen from "./SearchResultScreen";

class SearchScreen extends Component{
    constructor({props, match}){
        super(props)
        this.match = match;
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
                isSearchPage={!!this.match.params.page && Number(this.match.params.page) < 2}
                onSearchStart={() => {
                    this.props.fetchMovie()
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