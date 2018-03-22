import store from '../store';
import {user} from '../actions';

export default function fetchUsers(category, keyword, startIndex = 0) {

    fetch(`https://api.github.com/users?since=135`)
        .then(res => res.json())

        .then(res => {
            console.log('esresresres',res);
            store.dispatch(user(res));
        })
        .catch(err => console.log('ERROR: ', err));
}

