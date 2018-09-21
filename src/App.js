import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchScreen from "./containers/SearchScreen";
import SearchResultScreen from "./containers/SearchResultScreen";
import { connect } from "react-redux";
import * as movieActions from "./store/movie/actions";

import * as searchFormSelectors from "./store/searchForm/reducer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OMDB Searcher on ReactJS <img src={logo} className="App-logo" alt="logo" /></h1>
        </header>
        <SearchScreen fetchMovie={() => {
          this.fetchMovie();
        }}></SearchScreen>
        <SearchResultScreen></SearchResultScreen>
      </div>
    );
  }
  fetchMovie(){
    let search = this.props.SearchPhrase
    if(!isNaN(+search)){
      this.props.dispatch(movieActions.fetchMovieById(search));
    }else if (typeof search === "string"){
      this.props.dispatch(movieActions.fetchMovieByTitle(search));
    }
  }
}

function mapStateToProps(state){
  return {
    SearchPhrase: searchFormSelectors.getSearchPhrase(state)
  }
}

export default connect(mapStateToProps)(App);
