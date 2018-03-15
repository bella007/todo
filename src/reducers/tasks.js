import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

function uniq_id() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

const initial = JSON.parse(localStorage.getItem('tasks')) || InitialState.tasks;

export default function tasks(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.ADD_TASK:
            let task_id = uniq_id();
            let new_task = {...payload, done: false, id: (state[task_id] ? uniq_id() : task_id)};
            console.log(new_task)
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
        // case types.EDITED_TASK:
        //     return state.map((item, index) => index === payload ? {...item, ...payload})

        default:
            return state;
    }
}