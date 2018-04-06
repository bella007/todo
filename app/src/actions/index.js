import * as types from '../constants/ActionTypes';

export const getAllUsers = (payload) => ({type: types.GET_ALL_USERS, payload});
export const edit_user_field = (payload) => ({type: types.EDIT_USER_FIELD, payload});

//USERS
export const users_request = (payload) => ({type: types.USERS_REQUEST, payload});
export const users_success = (payload) => ({type: types.USERS_SUCCESS, payload});
export const users_failure = (payload) => ({type: types.USERS_FAILURE, payload});

export const get_users_request = (payload) => ({type: types.GET_USERS_REQUEST, payload});
export const get_users_success = (payload) => ({type: types.GET_USERS_SUCCESS, payload});
export const get_users_failure = (payload) => ({type: types.GET_USERS_FAILURE, payload});


export const users_add_request = (payload) => ({type: types.USERS_ADD_REQUEST, payload});
export const users_add_success = (payload) => ({type: types.USERS_ADD_SUCCESS, payload});
export const users_add_failure = (payload) => ({type: types.USERS_ADD_FAILURE, payload});

export const users_del_request = (payload) => ({type: types.USERS_DEL_REQUEST, payload});
export const users_del_success = (payload) => ({type: types.USERS_DEL_SUCCESS, payload});
export const users_del_failure = (payload) => ({type: types.USERS_DEL_FAILURE, payload});

export const users_edit_request = (payload) => ({type: types.USERS_EDIT_REQUEST, payload});
export const users_edit_success = (payload) => ({type: types.USERS_EDIT_SUCCESS, payload});
export const users_edit_failure = (payload) => ({type: types.USERS_EDIT_FAILURE, payload});


// TASKS
export const tasks_request = (payload) => ({type: types.TASKS_REQUEST, payload});
export const tasks_success = (payload) => ({type: types.TASKS_SUCCESS, payload});
export const tasks_failure = (payload) => ({type: types.TASKS_FAILURE, payload});

export const tasks_add_request = (payload) => ({type: types.TASKS_ADD_REQUEST, payload});
export const tasks_add_success = (payload) => ({type: types.TASKS_ADD_SUCCESS, payload});
export const tasks_add_failure = (payload) => ({type: types.TASKS_ADD_FAILURE, payload});

export const tasks_del_request = (payload) => ({type: types.TASKS_DEL_REQUEST, payload});
export const tasks_del_success = (payload) => ({type: types.TASKS_DEL_SUCCESS, payload});
export const tasks_del_failure = (payload) => ({type: types.TASKS_DEL_FAILURE, payload});

export const tasks_edit_request = (payload) => ({type: types.TASKS_EDIT_REQUEST, payload});
export const tasks_edit_success = (payload) => ({type: types.TASKS_EDIT_SUCCESS, payload});
export const tasks_edit_failure = (payload) => ({type: types.TASKS_EDIT_FAILURE, payload});

export const tasks_checked_request = (payload) => ({type: types.TASKS_CHECKED_REQUEST, payload});
export const tasks_checked_success = (payload) => ({type: types.TASKS_CHECKED_SUCCESS, payload});
export const tasks_checked_failure = (payload) => ({type: types.TASKS_CHECKED_FAILURE, payload});
