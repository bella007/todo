import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';


const initial = InitialState.tasks;

export default function tasks(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.TASKS_SUCCESS:
            return [...payload];

        case types.TASKS_ADD_SUCCESS:
            return [...state, payload];

        case types.TASKS_DEL_SUCCESS:
            return state.filter(item => item._id !== payload);

        case types.TASKS_EDIT_SUCCESS:
            return state.map(task => {
                if (task._id === payload.payload.data._id) {
                    return Object.assign({}, task, {
                        title: payload.payload.input_val
                    })
                }
                return task
            });

        case types.TASKS_CHECKED_SUCCESS:
            return state.map(task => {
                if (task._id === payload.payload.data._id) {
                    return Object.assign({}, task, {
                        done: !task.done
                    })
                }
                return task
            });

        default:
            return state;
    }
}
