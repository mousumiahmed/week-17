import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduce from './reducer';
import {add, subtract, multiply,divide} from "./actions";


const store  = createStore(reduce);
ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store} > 
        <App /> 
    </Provider>,
    </BrowserRouter> 
    ,document.getElementById('root'));



