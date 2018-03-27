import * as types from '../constants/ActionTypes';

export const addTask = (payload) => ({type: types.ADD_TASK, payload});
export const delTask = (payload) => ({type: types.DEL_TASK, payload});
export const editTask = (payload) => ({type: types.EDITED_TASK, payload});
export const checkedTask = (payload) => ({type: types.CHECKED_TASK, payload});


export const getAllUsers = (payload) => ({type: types.GET_ALL_USERS, payload});

export const users_request = (payload) => ({type: types.USERS_REQUEST, payload});
export const users_success = (payload) => ({type: types.USERS_SUCCESS, payload});
export const users_failure = (payload) => ({type: types.USERS_FAILURE, payload});


export const fetchUsers = () => dispatch => {
    dispatch(users_request());
    console.log('dispatch', dispatch)
    return fetch(`https://api.github.com/users?since=135`)
        .then(response => response.json())
        .then(json => {
            // console.log('res from actions', json)
            dispatch(users_success(json))
        })
        .catch(err => users_failure())
};
