import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

const initial = InitialState.users;

export default function users(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.GET_ALL_USERS:
            return payload;

        case types.USERS_REQUEST:
            return [...state];

        case types.USERS_SUCCESS:
            return [...payload];

        case types.USERS_FAILURE:
            return [...state];

        case types.EDIT_USER_FIELD:
            console.log('payload', payload);
            return state.map((user) => {
                if (user._id === payload.user_id) {
                    return Object.assign({}, user, {
                        [payload.key_field]: payload.value_field
                    })
                }
                return user
            });


        case types.USERS_ADD_SUCCESS:
            console.log('USERS_ADD_SUCCESS', payload);
            return [...state, payload];

        case types.GET_USERS_SUCCESS:
            console.log('GET_USERS_SUCCESS', payload);
            return [...payload];

        case types.USERS_DEL_SUCCESS:
            return state.filter(item => item._id !== payload);

        case types.USERS_EDIT_SUCCESS:
            console.log('payload', payload);
            return state.map((user) => {
                if (user._id === payload.user_id) {
                    return Object.assign({}, user, {
                        [payload.key_field]: payload.value_field
                    })
                }
                return user
            });

        default:
            return state;
    }
}
