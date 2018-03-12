
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

import {ADD} from '../constants/ActionTypes';

const store = createStore(reducers);

export default store;