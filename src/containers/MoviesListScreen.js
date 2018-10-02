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
            <MoviesListComponent moviesList = {this.props.movies_list} searchPage={this.props.searchPage} nextSearchPage={() => {this.nextSearchPage()}}></MoviesListComponent>
        );
    }
    componentDidMount(){
        if(this.props.SearchPhrase.length > 1){
            let search = this.props.SearchPhrase;
            if(!isNaN(+search)){
                this.props.dispatch(movieActions.fetchMovieById(search));
            }else if (typeof search === "string"){
                this.props.dispatch(movieActions.fetchMovieByTitle(search));
            }
        }
        this.props.dispatch(moviesActions.setSearchPage(+this.props.match.params.page));
    }
    nextSearchPage(){
        this.props.dispatch(moviesActions.setSearchPage(+this.props.match.params.page + 1));
    }
}

function mapStateToProps(state){
    return {
        movies_list: movieSelectors.getMoviesList(state),
        searchPage: searchFormSelectors.getSearchPage(state)
    }
}

export default withRouter(connect(mapStateToProps)(MoviesListScreen));