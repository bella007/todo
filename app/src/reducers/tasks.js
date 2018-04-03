import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';
import {TASKS_REQUEST} from "../constants/ActionTypes";

function uniq_id() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

const initial = JSON.parse(localStorage.getItem('tasks')) || InitialState.tasks;
// const initial = InitialState.tasks;

export default function tasks(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.ADD_TASK:
            let task_id = uniq_id();
            let new_task = {...payload, done: false, id: (state[task_id] ? uniq_id() : task_id)};
            return [new_task, ...state];

        case types.DEL_TASK:
            return state.filter(item => item.id !== payload);

        case types.CHECKED_TASK:
            return state.map(task => {
                if (task.id === payload) {
                    return Object.assign({}, task, {
                        done: !task.done
                    })
                }
                return task
            });
        case types.EDITED_TASK:
            return state.map(task => {
                if (task.id === payload.data.id) {
                    return Object.assign({}, task, {
                        title: payload.input_val
                    })
                }
                return task
            });


        case types.TASKS_REQUEST:
            console.log('reducer tasks_request')
            return [...state];

        case types.TASKS_SUCCESS:
            return [...payload];

        case types.TASKS_FAILURE:
            return [...state];

        default:
            return state;
    }
}
