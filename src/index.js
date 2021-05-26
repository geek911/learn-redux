import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers/index';
import { createStore } from 'redux';


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const element = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDom.render(element, document.querySelector("#root"));

