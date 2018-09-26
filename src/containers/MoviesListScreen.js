import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/MoviesList.css";
import {MoviesListComponent} from "../components/MoviesListComponent";
import * as movieSelectors from "../store/movie/reducer";
import {withRouter} from "react-router-dom"
// import * as movieActions from "../store/movie/actions";

class MoviesListScreen extends Component{
    constructor({props, match}){
        super(props);
        this.state = {
            searchPage: match.params.page
        }
    }
    render(){
        return (
            <MoviesListComponent moviesList = {this.props.movies_list} searchPage={this.state.searchPage}></MoviesListComponent>
        );
    }
}

function mapStateToProps(state){
    return {
        movies_list: movieSelectors.getMoviesList(state),
    }
}

export default withRouter(connect(mapStateToProps)(MoviesListScreen));