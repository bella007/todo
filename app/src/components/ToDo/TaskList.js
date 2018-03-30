import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import '../../App.css';
import Task from './Task'
import AddTask from './AddTask'
import {withRouter} from 'react-router';

import {addTask, delTask, editTask, checkedTask,} from '../../actions';

let filters = {
    '/TaskList': (item, index) => item,
    '/TaskList/': (item, index) => item,
    '/TaskList/active': (item, index) => (!item.done),
    '/TaskList/completed': (item, index) => (item.done),
};

const mapStateToProps = (state, ownProps) => {
    let filter_params = ownProps.location.pathname;
    return {
        tasks: state.tasks.filter(filters[filter_params])
    }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({addTask, delTask, editTask, checkedTask}, dispatch) );

const tab_style = {
    width: 400,
};


class TaskList extends Component {

    handleOnKeyDown = (e) => {
        this.props.history.push(`/TaskList${e.target.value ? '/' + e.target.value : ''}`);
    };


    render() {
        return (
            <div style={tab_style}>
                <AddTask/>
                {this.props.tasks.map((item, index) => (
                    < Task data={item}
                           index={index}
                           key={index}
                           delete={this.props.delTask}
                           edit={this.props.editTask}
                           checked={this.props.checkedTask}
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
