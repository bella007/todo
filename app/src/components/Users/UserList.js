import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {List} from 'material-ui/List';
import User from './User'
import {users_request, get_users_request, users_del_request} from '../../actions';
import {withRouter} from 'react-router';
import AddUser from './AddUser';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({users_request, get_users_request, users_del_request}, dispatch) );

class UserList extends Component {

    componentDidMount = () => {
        this.props.users.length === 0 ?
            this.props.get_users_request()
            : this.props.users
    };

    render() {
        return (
            <div>
                <AddUser/>
                <List>
                    {
                        this.props.users.map((item, index) => (<User data={item} key={index} delete={this.props.users_del_request} />))
                    }
                </List>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
