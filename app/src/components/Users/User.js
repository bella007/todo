import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import {red500} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.filter((item) => (item.id === ownProps.data.id || item.id === ownProps.data._id )),
        tasks: state.tasks.filter((item, index) => item.owner_id === ownProps.match.params.id)
    }
};

const iconStyles = {
    marginRight: 24,
};

const DeleteIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41
        10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </SvgIcon>
);

class User extends Component {

    handleEdit = () => {
        this.props.history.push(`UserList/user/${this.props.data.id || this.props.data._id}`);
    };

    handleDelete = (e) => {
        e.stopPropagation();
        this.props.delete(this.props.data._id);
    };

    goTasks = () => {
        this.props.history.push(`UserList/user/${this.props.data.id || this.props.data._id}/tasks`);
    };

    render() {
        return (
            <div>
                <div onClick={this.handleEdit}>
                    <ListItem
                        rightIcon={<DeleteIcon style={iconStyles} color={red500} className="hh"
                                               onClick={this.handleDelete}/>}
                    >
                        {this.props.data.login || this.props.data.name}
                    </ListItem>

                </div>
                <button onClick={this.goTasks}>Go to task</button>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(User));
