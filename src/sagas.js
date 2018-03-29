import { call ,put, takeEvery, all} from 'redux-saga/effects'
import {fetchData} from './api';

export function* fetchUsers() {
    try {
        const response = yield call(fetchData);

        yield put({type: "USERS_SUCCESS", payload:response});
    } catch (error) {
        yield put({type: "USERS_FAILURE", error})
    }
}
export function* watchFetchData() {
    yield takeEvery('USERS_REQUEST', fetchUsers)
}

export default function* rootSaga() {
    yield all([
        watchFetchData(),
    ])
}
