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

export function* watchTasksRequest() {
    yield takeEvery('TASKS_REQUEST', tasks)
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
            console.log('response after fetch', response)
            return {response: response, error: null}
        })
        .catch(error => {
            return {response: null, error: error}
        })
}

function* AddTasks(act) {
    // let new_task = {...act.payload, done: false, id: 5};
    let new_task = {...act.payload, done: false};
    const {response, error} = yield call(fetchAddTasks, new_task);
    console.log('responseee', response)
    if (response)
        yield put({type: "TASKS_ADD_SUCCESS", payload: response.todo});
    else
        yield put({type: "TASKS_ADD_FAILURE", error})
}

export function* watchAddTask() {
    yield takeEvery('TASKS_ADD_REQUEST', AddTasks)
}


// DELETE TASK

function fetchDelTasks(task_id) {
    console.log('task_id', task_id);
    return fetch(`http://localhost:3001/task-list/${task_id}`, {
        // return fetch(apiUrl+'/'+task_id, {
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
    console.log('task_id', element);
    const {response, error} = yield call(fetchDelTasks, element.payload);
    if (response)
        yield put({type: "TASKS_DEL_SUCCESS", payload: element.payload});
    else
        yield put({type: "TASKS_DEL_FAILURE", error})
}

export function* watchDelTask() {
    yield takeEvery('TASKS_DEL_REQUEST', DelTasks)
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

export function* watchEditTask() {
    yield takeEvery('TASKS_EDIT_REQUEST', EditTasks)
}

// CHECKED TASK
function fetchChekedTasks(element) {
    console.log('task_id', element);
    return fetch(`http://localhost:3001/task-list/${element._id}`, {
        // return fetch(apiUrl+'/'+task_id, {
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
    console.log('responseeeeee from cheked task', response);
    if (response)
        yield put({type: "TASKS_CHECKED_SUCCESS", payload: element});
    else
        yield put({type: "TASKS_CHECKED_FAILURE", error})
}

export function* watchChekedTask() {
    yield takeEvery('TASKS_CHECKED_REQUEST', ChekedTasks)
}


export default function* rootSaga() {
    yield all([
        watchFetchData(),
        watchAddTask(),
        watchTasksRequest(),
        watchDelTask(),
        watchEditTask(),
        watchChekedTask(),
    ])
};
