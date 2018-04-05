import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';


const initial = InitialState.tasks;

export default function tasks(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.TASKS_CHECKED_SUCCESS:
            console.log(payload)
            return state.map(task => {
                if (task._id === payload.payload.data._id) {
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

        case types.TASKS_CHECKED_REQUEST:
            console.log('TASKS_CHECKED_REQUEST');
            return state;
        // case types.TASKS_CHECKED_SUCCESS:
        //     return state.map(task => {
        //         if (task._id === payload._id) {
        //             return Object.assign({}, task, {
        //                 done: !task.done
        //             })
        //         }
        //         return tasks
        //     });

            // return state;

        default:
            return state;
    }
}
