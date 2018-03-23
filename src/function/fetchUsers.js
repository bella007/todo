import store from '../store';
import {getAllUsers} from '../actions';

export default function fetchUsers(category, keyword) {

    if (category != "user") {
        return _fetch(`https://api.github.com/users?since=135`);
    } else {
        return _fetch(`https://api.github.com/users/${keyword}`);
    }
}

function _fetch(req) {

    fetch(req)
        .then(res => res.json())

        .then(res => {
            console.log('RES from function fetchUsers', res);
            store.dispatch(getAllUsers(res));
        })
        .catch(err => console.log('ERROR: ', err));
}
