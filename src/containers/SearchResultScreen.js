import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/SearchResultScreen.css";
import ResultComponent from "../components/ResultComponent";
import * as movieSelectors from "../store/movie/reducer";

class SearchResultScreen extends Component{
    render(){
        return (
            <ResultComponent movie={this.props.movie} isMovieFinded={this.props.isMovieFinded} fetchMovieError={this.props.fetchMovieError}></ResultComponent>
        );
    }
}

function mapStateToProps(state){
    return {
        movie: movieSelectors.getMovie(state),
        isMovieFinded: movieSelectors.isMovieFinded(state),
        fetchMovieError: movieSelectors.fetchError(state)
    }
}

export default connect(mapStateToProps)(SearchResultScreen);