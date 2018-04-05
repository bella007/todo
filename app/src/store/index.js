import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

import {ADD_TASK, DEL_TASK, CHECKED_TASK, EDITED_TASK, USERS_SUCCESS, EDIT_USER_FIELD} from '../constants/ActionTypes';

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
    else if (action.type === USERS_SUCCESS || action.type === EDIT_USER_FIELD) {
        next(action);
        localStorage.setItem('users', JSON.stringify(store.getState().users));
    }
    next(action);

};

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);
// const middleware = applyMiddleware(thunk ,tasksMiddleware);

const store = createStore(
    // reducers, middleware);
reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);
export default store;

sagaMiddleware.run(rootSaga);
