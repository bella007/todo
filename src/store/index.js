import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';

import {ADD_TASK, DEL_TASK, CHECKED_TASK, EDITED_TASK} from '../constants/ActionTypes';

function uniq_id() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

const tasksMiddleware = store => next => (action) => {

    if (action.type === ADD_TASK) {
        let task_id = uniq_id();
        const newAction = {
            ...action,
            payload: {
                ...action.payload,
                done: false,
                id: (store[task_id] ? uniq_id() : task_id)
            },
        };
        next(newAction);
        localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
        return;
    }
    else if (action.type === DEL_TASK || action.type === CHECKED_TASK || action.type === EDITED_TASK) {
        next(action);
        localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
        return;
    }
    next(action);

};

const middleware = applyMiddleware(tasksMiddleware);

const store = createStore(
    reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);
export default store;