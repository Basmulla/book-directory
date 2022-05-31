import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import createReducer from './reducer';

const configureStore = (initialState = {}) => {
    const middleWares = [thunk.withExtraArgument(axios)];

    // Enable Redux Devtools in client side dev mode.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const enhacer = composeEnhancers(applyMiddleware(...middleWares));

    const store = createStore(createReducer, initialState, enhacer);
    return store;
};

export default configureStore;

