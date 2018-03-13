import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

const initial = InitialState.tasks;
export default function tasks(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.ADD_TASK:
            let new_task={...payload,done:false}
            return [new_task, ...state];
        case types.DEL_TASK:
            return state.filter((item, index) => index !== payload);
        // case types.EDITED_TASK:
        //     return state.map((item, index) => index === payload ? {...item, ...payload})

        case types.CHECKED_TASK:
            return state.map((item, index) => {
                if(index === payload) return {...item, done: !item.done}
                else return {...item, done: false};
            });

        default:
            return state;
    }
}