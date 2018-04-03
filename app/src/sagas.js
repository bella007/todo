import {call, put, takeEvery, all} from 'redux-saga/effects'

function fetchProductsApi() {
    return fetch('https://api.github.com/users?since=135')
        .then(response => (response.json()))
        .then(response => ({response: response, error: null}))
        .catch(error => ({response: null, error: error}))
}

function* fetchUsers() {
    const {response, error} = yield call(fetchProductsApi);
    if (response)
        yield put({type: "USERS_SUCCESS", payload: response});
    else
        yield put({type: "USERS_FAILURE", error})
}

export function* watchFetchData() {
    yield takeEvery('USERS_REQUEST', fetchUsers)
}

// TASKS

const apiUrl = "http://localhost:3001/task-list";

function fetchAddTasks(payload) {
    console.log("fetching", apiUrl, payload);

    return fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(payload)
    })
        .then(response => JSON.stringify(response))
        .then(response => {
            console.log('response', response);
            return {response: response, error: null}
        })
        .catch(error => {
            console.log('error', error);
            return {response: null, error: error}
        })
}

function* AddTasks(act) {
    let new_task = {...act.payload, done: false, id: 5};
    const {response, error} = yield call(fetchAddTasks, new_task);
    if (response)
        yield put({type: "TASKS_ADD_SUCCESS", payload: response});
    else
        yield put({type: "TASKS_ADD_FAILURE", error})
}

export function* watchAddUser() {
    yield takeEvery('TASKS_ADD_REQUEST', AddTasks)
}



function fetchTasks() {
    return fetch(apiUrl)
        .then(response => (response.json()))
        .then(response => {console.log('sagas response', response.todos);return {response: response.todos, error: null}})
        .catch(error => ({response: null, error: error}))
}

function* tasks() {
    const {response, error} = yield call(fetchTasks);
    if (response)
        yield put({type: "TASKS_SUCCESS", payload: response});
    else
        yield put({type: "TASKS_FAILURE", error})
}

export function* watchTasksRequest() {
    console.log('sagas watcher');
    yield takeEvery('TASKS_REQUEST', tasks)
}

export default function* rootSaga() {
    yield all([
        watchFetchData(),
        watchAddUser(),
        watchTasksRequest()
    ])
};
