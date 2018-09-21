import React, { Component } from "react";

class SearchComponent extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div>
                {this.props.isMovieFinded ? (
                    <div className="movie">
                        <h2>What we finded</h2>
                        <div className="movie__header">
                            <img src={this.props.movie.Poster} className="movie__poster" alt="Movie poster" />
                            <div className="movie__data">
                                <h2 className="movie__title">
                                    {this.get('Title')}
                                </h2>
                                <p className="movie__country">
                                    <b>Country:</b> {this.get("Country")}
                                </p>
                                <p>
                                    <b>Released:</b> {this.get('Released')}
                                </p>
                                <p>
                                    <b>Director:</b> {this.get('Director')}
                                </p>
                                <p className="movie__description">
                                    <b>Plot:</b><br/> {this.get('Plot')}
                                </p>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2>
                        {this.props.fetchMovieError}
                    </h2>
                )}

            </div>
        );
    }
    get(key){
        return this.props.movie[key];
    }
} 

export default SearchComponent;