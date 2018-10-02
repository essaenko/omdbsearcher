import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchScreen from "./containers/SearchScreen";
import SearchResultScreen from "./containers/SearchResultScreen";
import { connect } from "react-redux";
import * as movieActions from "./store/movie/actions";
import { Route, withRouter } from "react-router-dom";
import MoviesList from "./containers/MoviesListScreen";

import * as searchFormSelectors from "./store/searchForm/reducer";


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OMDB Searcher on ReactJS <img src={logo} className="App-logo" alt="logo" /></h1>
        </header>
        <Route exact path="/" render={() => {
          return (
            <div>
              <SearchScreen />
            </div>  
          )
        }} />
        <Route exact path="/search/:page" render={ () => {
          return (
            <div>
              <SearchScreen />
              <MoviesList SearchPhrase={this.props.SearchPhrase}/>
            </div>
          )
        }} />
        <Route exact path="/movie/:imdbID" component={SearchResultScreen} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    SearchPhrase: searchFormSelectors.getSearchPhrase(state)
  }
}

export default withRouter(connect(mapStateToProps)(App));
