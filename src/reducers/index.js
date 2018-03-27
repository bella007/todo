import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import tasks from './tasks';
import users from './users';


const reducers = combineReducers({
    tasks,
    users,
    routing: routerReducer
});

export default reducers;
