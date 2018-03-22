import React, {Component} from 'react';

import '../App.css';


class User extends Component {
    constructor(props) {
        super(props);
    }


//TODO: 1) сделай отдельным компонентом див который показывается в режиме редактирования
    render() {
        return (
            <div>
                {console.log('User component')}
                {this.props.item.login}
            </div>
        );
    }
}

export default User;
