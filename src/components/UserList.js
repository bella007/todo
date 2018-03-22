import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import '../App.css';
import User from './User'
import AddTask from './AddTask'
import TaskList from './TaskList'
import {withRouter} from 'react-router';

import {user} from '../actions';

import fetchUsers from '../fuction/fetchUsers'

const mapStateToProps = (state, ownProps) => {
    return {
        users_all: state
    }
};


const mapDispatchToProps = dispatch => ( bindActionCreators({users: user}, dispatch) );


class UserList extends Component {

    handleOnKeyDown = (e) => {
        this.props.history.push(`${e.target.value}`);
    };

    handleFetch = () => {
        fetchUsers();
        // this.props.users()
    };

    componentWillMount=()=> {
        console.log('componentWillMount')
        fetchUsers();
    };

    render() {
        return (
            <div>
                {console.log('users from component', this.props.users_all)}
                {/*<button onClick={this.handleFetch}>Click me</button>*/}
                {/*{*/}
                    {/*this.props.users.map((item) => (<User data={item}/>))*/}
                {/*}*/}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
