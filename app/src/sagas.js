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
const apiUrl = "http://localhost:3001/task-list";

function fetchAddTasks(payload) {
    console.log("fetchind",apiUrl, payload );

    // return fetch(apiUrl)
    //     .then(response => (response.json()))
    //     .then(response => {console.log('responseeeeeeeeeeeeee',response)})
    //     .catch(error => ({response: null, error: error}))

    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        // .then(res => {console.log(res);return res.json()})
        // .then(res => console.log(res))
       // .catch(error => (console.log('errorerrorerrorerrorerrorerror', error)))
}

function* AddTasks(act) {
    let new_task={...act.payload,  done: false, id:5};
    console.log(new_task)
    const {response, error} = yield call(fetchAddTasks, new_task);
    if (response)
        yield put({type: "TASKS_ADD_SUCCESS", payload: response});
    else
        yield put({type: "TASKS_ADD_FAILURE", error})
}

export function* watchAddUser() {
    yield takeEvery('TASKS_ADD_REQUEST', AddTasks)
}

export default function* rootSaga() {
    yield all([
        watchFetchData(),
        watchAddUser()
    ])
};
