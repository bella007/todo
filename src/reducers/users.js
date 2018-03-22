import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';
// import fetchUsers from '../fuction/fetchUsers'
// import {user} from "../actions/index";

// const initial = JSON.parse(localStorage.getItem('tasks')) || InitialState;
const initial = InitialState.all_users;

export default function users(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.USERS:
            console.log('payload',payload);
            return {...state, all_users:payload};

        default:
            return state;
    }
}
