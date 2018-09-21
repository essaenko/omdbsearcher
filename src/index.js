import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import App from './App';
import { HashRouter } from 'react-router-dom';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
<HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
</HashRouter>, 
document.getElementById('root'));