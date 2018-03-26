import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {List} from 'material-ui/List';
import User from './User'

import {withRouter} from 'react-router';

import {getAllUsers} from '../../actions';
import fetchUsers from '../../function/fetchUsers'

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({getAllUsers}, dispatch) );

class UserList extends Component {

    componentWillMount = () => {
            console.log('COMPONENT WILL MOUNT')
        // fetchUsers();
    };

    render() {
        return (
            <List>
                {
                    this.props.users.map((item, index) => (<User data={item} key={index}/>))
                }
            </List>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
