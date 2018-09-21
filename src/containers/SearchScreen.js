import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/SearchScreen.css";
import SearchComponent from "../components/SearchComponent";
import * as moviesActions from "../store/searchForm/actions";
import * as moviesSelectors from "../store/searchForm/reducer";

class SearchScreen extends Component{
    render(){
        return (
            <div>
                <h2>Find your favorite movie</h2>
                <SearchComponent 
                onSearchInput={(searchPhrase) => {
                    this.setSearchPhrase(searchPhrase);
                }}
                onSearchStart={(e) => {
                    e.preventDefault();
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

export default connect(mapStateToProps)(SearchScreen);