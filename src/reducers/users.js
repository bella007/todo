import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

const initial = JSON.parse(localStorage.getItem('users')) || InitialState.users;
// const initial = InitialState.users;

export default function users(state = initial, action) {
    let {type, payload} = action;

    switch (type) {
        case types.GET_ALL_USERS:
            return payload;

        case types.USERS_REQUEST:
            console.log('reducerreducerreducer',payload);
            return [...state];

        case types.USERS_SUCCESS:
            console.log('payloadpayload',payload);
            return [...payload];

        case types.USERS_FAILURE:
            return [...state];

        case types.EDIT_USER_FIELD:
            return state.map((user)=> {
                if(user.id===payload.user_id){
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
