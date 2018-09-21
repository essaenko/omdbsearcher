import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import App from './App';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));