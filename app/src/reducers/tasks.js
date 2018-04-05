import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

function uniq_id() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

// const initial = JSON.parse(localStorage.getItem('tasks')) || InitialState.tasks;
const initial = InitialState.tasks;

export default function tasks(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        // case types.ADD_TASK:
        //     let task_id = uniq_id();
        //     let new_task = {...payload, done: false, id: (state[task_id] ? uniq_id() : task_id)};
        //     return [...state, new_task,];
        //
        // case types.DEL_TASK:
        //     return state.filter(item => item.id !== payload);

        case types.CHECKED_TASK:
            return state.map(task => {
                if (task._id === payload) {
                    return Object.assign({}, task, {
                        done: !task.done
                    })
                }
                return task
            });

        case types.TASKS_SUCCESS:
            return [...payload];

        case types.TASKS_ADD_SUCCESS:
            console.log('ADD_SUCCESS payload', payload);
            return [...state, payload];

        case types.TASKS_DEL_SUCCESS:
            return state.filter(item => item._id !== payload);

        case types.TASKS_EDIT_SUCCESS:
            console.log('TASKS_EDIT_SUCCESS', payload.payload);
            return state.map(task => {
                if (task._id === payload.payload.data._id) {
                    return Object.assign({}, task, {
                        title: payload.payload.input_val
                    })
                }
                return task
            });

        default:
            return state;
    }
}
