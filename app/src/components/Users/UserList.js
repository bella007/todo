import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {List} from 'material-ui/List';
import User from './User'
import {users_request} from '../../actions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({users_request}, dispatch) );

class UserList extends Component {

    componentDidMount = () => {
        this.props.users.length === 0 ?
            this.props.users_request()
            : this.props.users
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
