import { delay } from 'redux-saga'
import { fork ,call ,put, takeEvery, all, take } from 'redux-saga/effects'
import Api from 'fetch-api';


export function* fetchUsers() {
    console.log('fetchUsers fetchUsers fetchUsers SAGA');
    try {
        const response = yield call(Api, `https://api.github.com/users?since=135`);
        console.log('response from SAGAS', response);
        yield put({type: "USERS_SUCCESS", response})
    } catch (error) {
        yield put({type: "USERS_FAILURE", error})
    }
}

export function* watchFetchData() {
    console.log('watchFetchData watchFetchData SAGA');
    // yield takeEvery('USERS_REQUEST', fetchUsers)
    yield take('USERS_REQUEST')
    yield call(fetchUsers)
}

export default function* rootSaga() {
    yield all([
        watchFetchData(),
        // fork(watchFetchData()),

    ])
}
