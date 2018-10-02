import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Button, CircularProgress } from "@material-ui/core"

export class MoviesListComponent extends Component{
    render(){
        return (
            <div>
                {this.props.moviesList.length ? (
                    <div>
                        {/* <Link to={"/"} style={{textDecoration: "none"}}>
                            <Button variant="contained" color="primary">
                                Back to search
                            </Button>
                        </Link> */}

                        {this.prepareMoviesList(this.props.moviesList)}
                        <div className="movies-list__controls">
                            {+this.props.searchPage > 1? (
                            <Link to={"/search/" + (+this.props.searchPage - 1) } style={{textDecoration: "none"}}>
                                <Button variant="contained" color="primary" onClick={this.props.prevousSearchPage}>
                                    Prevous
                                </Button>
                            </Link>) : ("")}
                            <Link to={"/search/" + (+this.props.searchPage + 1) } style={{textDecoration: "none"}}>
                                <Button variant="contained" color="primary" onClick={this.props.nextSearchPage}>
                                    Next
                                </Button>
                            </Link>
                        </div>
                    </div>
                ): (
                    <CircularProgress />
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
                        <img src={element.Poster !== "N/A" ? element.Poster : ""} className="movie__poster" alt="Movie poster" />
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