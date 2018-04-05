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

// TASKS

const apiUrl = "http://localhost:3001/task-list";

// GET ALL TASKS
function fetchTasks() {
    return fetch(apiUrl)
        .then(response => (response.json()))
        .then(response => {
            return {response: response.todos, error: null}
        })
        .catch(error => ({response: null, error: error}))
}

function* tasks() {
    const {response, error} = yield call(fetchTasks);
    if (response)
        yield put({type: "TASKS_SUCCESS", payload: response});
    else
        yield put({type: "TASKS_FAILURE", error})
}

// ADD TASK

function fetchAddTasks(payload) {

    return fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(response => {
            return {response: response, error: null}
        })
        .catch(error => {
            return {response: null, error: error}
        })
}

function* AddTasks(act) {
    let new_task = {...act.payload, done: false};
    const {response, error} = yield call(fetchAddTasks, new_task);
    if (response)
        yield put({type: "TASKS_ADD_SUCCESS", payload: response.todo});
    else
        yield put({type: "TASKS_ADD_FAILURE", error})
}

// DELETE TASK

function fetchDelTasks(task_id) {
    return fetch(`http://localhost:3001/task-list/${task_id}`, {
        method: 'delete',
        body: task_id
    }).then(response => response.json())
        .then(response => {
            return {response: response, error: null}
        })
        .catch(error => {
            return {response: null, error: error}
        })
}

function* DelTasks(element) {

    const {response, error} = yield call(fetchDelTasks, element.payload);
    if (response)
        yield put({type: "TASKS_DEL_SUCCESS", payload: element.payload});
    else
        yield put({type: "TASKS_DEL_FAILURE", error})
}


// EDIT TASK
function fetchEditTasks(payload) {

    return fetch(apiUrl + '/' + payload.data._id, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(payload)
    })
        .then(response => JSON.stringify(response))
        .then(response => {
            return {response: response, error: null}
        })
        .catch(error => {
            return {response: null, error: error}
        })
}

function* EditTasks(element) {
    const {response, error} = yield call(fetchEditTasks, element.payload);
    if (response)
        yield put({type: "TASKS_EDIT_SUCCESS", payload: element});
    else
        yield put({type: "TASKS_EDIT_FAILURE", error})
}


// CHECKED TASK
function fetchChekedTasks(element) {
    return fetch(`http://localhost:3001/task-list/${element._id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(element)
    }).then(response => response.json())
        .then(response => {
            return {response: response, error: null}
        })
        .catch(error => {
            return {response: null, error: error}
        })
}

function* ChekedTasks(element) {
    const {response, error} = yield call(fetchChekedTasks, element.payload.data);
    if (response)
        yield put({type: "TASKS_CHECKED_SUCCESS", payload: element});
    else
        yield put({type: "TASKS_CHECKED_FAILURE", error})
}



export default function* rootSaga() {
    yield all([
        takeEvery('USERS_REQUEST', fetchUsers),
        takeEvery('TASKS_REQUEST', tasks),
        takeEvery('TASKS_ADD_REQUEST', AddTasks),
        takeEvery('TASKS_DEL_REQUEST', DelTasks),
        takeEvery('TASKS_EDIT_REQUEST', EditTasks),
        takeEvery('TASKS_CHECKED_REQUEST', ChekedTasks),
    ])
};
