import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';

import {withRouter} from 'react-router';
import {connect} from 'react-redux';
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.filter((item)=>(item.id == ownProps.data.id))
    }
};

class User extends Component {

    handleEdit = () => {
        this.props.history.push(`UserList/user/${this.props.data.id}`);

    };

    render() {
        return (
            <div>
                <ListItem onClick={this.handleEdit}>
                    {this.props.data.login}
                </ListItem>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(User));
