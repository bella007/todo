import {call, put, takeEvery, all} from 'redux-saga/effects'

// USERS

// GET ALL USERS from git hub
function fetchProductsApi() {
    return fetch('https://api.github.com/users?since=135')
        .then(response => (response.json()))
        .then(response => ({response: response, error: null}))
        .catch(error => ({response: null, error: error}))
}

function* fetchUsers() {
    // const {response, error} = yield call(fetchProductsApi);
    // if (response) {
    //     yield put({type: "USERS_SUCCESS", payload: response});
    // }
    // else
    //     yield put({type: "USERS_FAILURE", error})
}

const usersUrl = "http://localhost:3001/user-list";

// GET ALL USERS
function fetchAllUsers() {
    return fetch(usersUrl)
        .then(response => (response.json()))
        .then(response => {
            return {response: response.users, error: null}
        })
        .catch(error => ({response: null, error: error}))
}

function* users() {
    const {response, error} = yield call(fetchAllUsers);
    if (response)
        yield put({type: "GET_USERS_SUCCESS", payload: response});
    else
        yield put({type: "GET_USERS_FAILURE", error})
}

// ADD TASK

function fetchAddUsers(payload) {

    return fetch(usersUrl, {
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

function* AddUsers(act) {
    console.log(act.payload);
    const {response, error} = yield call(fetchAddUsers, act.payload);
    if (response)
        yield put({type: "USERS_ADD_SUCCESS", payload: response.user});
    else
        yield put({type: "USERS_ADD_FAILURE", error})
}

// DELETE USER

function fetchDelUsers(user_id) {

    return fetch(usersUrl + '/' + user_id, {
        method: 'delete',
        body: user_id
    }).then(response => response.json())
        .then(response => {
            return {response: response, error: null}
        })
        .catch(error => {
            return {response: null, error: error}
        })
}

function* DelUsers(element) {

    const {response, error} = yield call(fetchDelUsers, element.payload);
    if (response)
        yield put({type: "USERS_DEL_SUCCESS", payload: element.payload});
    else
        yield put({type: "USERS_DEL_FAILURE", error})
}

// // EDIT USERS
function fetchEditUsers(payload) {

    return fetch(usersUrl + '/' + payload.user_id, {
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

function* EditUsers(element) {
    const {response, error} = yield call(fetchEditUsers, element.payload);
    if (response)
        yield put({type: "USERS_EDIT_SUCCESS", payload: element.payload});
    else
        yield put({type: "USERS_EDIT_FAILURE", error})
}


// user tasks
function fetchUserTasks(payload) {
    console.log('payload',payload);
    return fetch(usersUrl+'/'+payload)
        .then(response => (response.json()))
        .then(response => {
            return {response: response, error: null}
        })
        .catch(error => ({response: null, error: error}))
}

function* UserTasks(element) {
    console.log('sagaaaaaaassssssssss', element.payload);
    const {response, error} = yield call(fetchUserTasks, element.payload);
    console.log('response in saga',response, error);
    if (response){
        yield put({type: "USER_TASKS_SUCCESS", payload: response.tasks});
    }
    else
        yield put({type: "USER_TASKS_FAILURE", error})
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

        takeEvery('TASKS_REQUEST', tasks),
        takeEvery('TASKS_ADD_REQUEST', AddTasks),
        takeEvery('TASKS_DEL_REQUEST', DelTasks),
        takeEvery('TASKS_EDIT_REQUEST', EditTasks),
        takeEvery('TASKS_CHECKED_REQUEST', ChekedTasks),

        takeEvery('USERS_REQUEST', fetchUsers),
        takeEvery('USERS_ADD_REQUEST', AddUsers),
        takeEvery('GET_USERS_REQUEST', users),
        takeEvery('USERS_DEL_REQUEST', DelUsers),
        takeEvery('USERS_EDIT_REQUEST', EditUsers),
        takeEvery('USER_TASKS_REQUEST', UserTasks),
    ])
};
