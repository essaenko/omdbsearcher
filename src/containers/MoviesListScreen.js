import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/MoviesList.css";
import {MoviesListComponent} from "../components/MoviesListComponent";
import * as movieSelectors from "../store/movie/reducer";
import * as searchFormSelectors from '../store/searchForm/reducer';
import * as movieActions from "../store/movie/actions";
import {withRouter} from "react-router-dom"
import * as moviesActions from "../store/searchForm/actions";
// import * as movieActions from "../store/movie/actions";

class MoviesListScreen extends Component{
    constructor({props, match}){
        super(props);
        this.state = {
            searchPage: match.params.page,
            match: match
        }
    }
    render(){
        return (
            <MoviesListComponent moviesList = {this.props.movies_list} searchPage={this.props.searchPage} nextSearchPage={() => {this.nextSearchPage()}} prevousSearchPage={() => {this.prevousSearchPage()}}/>
        );
    }
    nextSearchPage(){
        this.props.dispatch(moviesActions.setSearchPage(+this.props.match.params.page + 1));
        this.props.dispatch(movieActions.fetchNextPage());
    }
    prevousSearchPage(){
        this.props.dispatch(moviesActions.setSearchPage(+this.props.match.params.page - 1));
        this.props.dispatch(movieActions.fetchNextPage());
    }
}

function mapStateToProps(state){
    return {
        movies_list: movieSelectors.getMoviesList(state),
        searchPage: searchFormSelectors.getSearchPage(state)
    }
}

export default withRouter(connect(mapStateToProps)(MoviesListScreen));