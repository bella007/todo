import React, {Component} from 'react';
import {connect} from 'react-redux';

import {List} from 'material-ui/List';
import User from './User'

import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
};


class UserList extends Component {

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

export default withRouter(connect(mapStateToProps)(UserList));
