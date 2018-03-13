
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

import {ADD} from '../constants/ActionTypes';

// const store = createStore(reducers);
const store = createStore(
    reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
export default store;