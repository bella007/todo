import * as types from '../constants/ActionTypes';

export const addTask = (payload) => ({type: types.ADD_TASK, payload});
export const delTask = (payload) => ({type: types.DEL_TASK, payload});
export const editTask = (payload) => ({type: types.EDITED_TASK, payload});
export const checkedTask = (payload) => ({type: types.CHECKED_TASK, payload});


export const user = (payload) => ({type: types.USERS, payload});
