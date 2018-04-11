import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import '../../App.css';
import Task from '../ToDo/Task'
import AddTask from '../ToDo/AddTask'

import {withRouter} from 'react-router';

import {
    tasks_checked_request,
    tasks_request,
    tasks_del_request,
    tasks_edit_request,
    get_users_request,
    user_tasks_request
} from '../../actions';


const mapStateToProps = (state, ownProps) => {
    console.log('from  mapStateToProps', ownProps.match.params.id);
    return {
        tasks: ownProps.match.params.id ? state.tasks.filter((item, index) => item.owner_id === ownProps.match.params.id)
            : state.tasks,
        user_id: ownProps.match.params.id,
        user: state.users.filter((item) => item._id === ownProps.match.params.id)[0],
    }

};

const mapDispatchToProps = dispatch => ( bindActionCreators({
    tasks_checked_request,
    tasks_request,  
    tasks_del_request,
    tasks_edit_request,
    get_users_request

}, dispatch) );

const tab_style = {
    width: 400,
};


class TaskList extends Component {

    handleOnKeyDown = (e) => {
        this.props.history.push(`/TaskList${e.target.value ? '/' + e.target.value : ''}`);
    };
    componentDidMount = () => {
        this.props.tasks_request();
        this.props.get_users_request();
    };

    render() {
        return (
            <div style={tab_style}>
                {/*{console.log('this.props.user', this.props.user)}*/}
                {console.log('this.props.user', this.props.tasks)}
                {/*<span>user:  </span>{this.props.user.name}*/}
                <AddTask />
                {this.props.tasks.map((item, index) => (
                    < Task data={item}
                           index={index}
                           key={index}
                           delete={this.props.tasks_del_request}
                           edit={this.props.tasks_edit_request}
                           checked={this.props.tasks_checked_request}
                    />
                ))}
                <button onClick={this.handleOnKeyDown} value="">All</button>
                <button onClick={this.handleOnKeyDown} value="active">Active</button>
                <button onClick={this.handleOnKeyDown} value="completed">Completed</button>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskList));
