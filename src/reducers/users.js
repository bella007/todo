import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

// const initial = JSON.parse(localStorage.getItem('tasks')) || InitialState;
const initial = InitialState.users;

export default function users(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.GET_ALL_USERS:
            return payload;

        default:
            return state;
    }
}
