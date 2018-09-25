import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"

export class MoviesListComponent extends Component{
    render(){
        return (
            <div>
                {this.props.moviesList.length ? this.prepareMoviesList(this.props.moviesList): (
                    <h2>Input movie title</h2>
                )}
            </div>
        );
    }
    prepareMoviesList(moviesList){
        let newMoviesList = []
        moviesList.forEach(element => {
            newMoviesList.push((
                <div className="movie" key={element.imdbID}>
                    <div className="movie__header">
                        <img src={element.Poster} className="movie__poster" alt="Movie poster" />
                        <div className="movie__data">
                            <h2 className="movie__title">
                                {element.Title}
                            </h2>
                            <p className="movie__type">
                                <b>Type:</b> {element.Type}
                            </p>
                            <p>
                                <b>Released:</b> {element.Year}
                            </p>
                            <p>
                                <Link to={"/movie/" + element.imdbID} style={{textDecoration: "none"}}>
                                    <Button variant="outlined" color="primary">
                                        More...
                                    </Button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            ));
        });
        return newMoviesList;
    }
}