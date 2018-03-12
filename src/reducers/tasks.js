import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

const initial = InitialState.tasks;
export default function posts(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.ADD_TASK:
            return [payload, ...state];

        default:
            return state;
    }
}