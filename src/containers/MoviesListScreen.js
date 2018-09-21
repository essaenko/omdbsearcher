import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/MoviesList.css";
import {MoviesListComponent} from "../components/MoviesListComponent";
import * as movieSelectors from "../store/movie/reducer";
// import * as movieActions from "../store/movie/actions";

class MoviesListScreen extends Component{
    render(){
        return (
            <MoviesListComponent moviesList = {this.props.movies_list}></MoviesListComponent>
        );
    }
}

function mapStateToProps(state){
    return {
        movies_list: movieSelectors.getMoviesList(state),
    }
}

export default connect(mapStateToProps)(MoviesListScreen);