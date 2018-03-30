import * as types from '../constants/ActionTypes';

export const addTask = (payload) => ({type: types.ADD_TASK, payload});
export const delTask = (payload) => ({type: types.DEL_TASK, payload});
export const editTask = (payload) => ({type: types.EDITED_TASK, payload});
export const checkedTask = (payload) => ({type: types.CHECKED_TASK, payload});


export const getAllUsers = (payload) => ({type: types.GET_ALL_USERS, payload});

export const users_request = (payload) => ({type: types.USERS_REQUEST, payload});
export const users_success = (payload) => ({type: types.USERS_SUCCESS, payload});
export const users_failure = (payload) => ({type: types.USERS_FAILURE, payload});

export const tasks_add_request = (payload) => ({type: types.TASKS_ADD_REQUEST, payload});
export const tasks_add_success = (payload) => ({type: types.TASKS_ADD_SUCCESS, payload});
export const tasks_add_failure = (payload) => ({type: types.TASKS_ADD_FAILURE, payload});

export const edit_user_field = (payload) => ({type: types.EDIT_USER_FIELD, payload});

// export const fetchUsers = () => dispatch => {
//     dispatch(users_request());
//     console.log('dispatch', dispatch)
//     return fetch(`https://api.github.com/users?since=135`)
//         .then(response => response.json())
//         .then(json => {
//             // console.log('res from actions', json)
//             dispatch(users_success(json))
//         })
//         .catch(function(err) {
//             console.log('Fetch Error :-S', err);
//         });
//     // .catch(err => users_failure())
// };
