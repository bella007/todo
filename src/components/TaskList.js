import React, { Component } from 'react';
import Task from './Task'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import {List, ListItem} from 'material-ui/List';


import AddTask from './AddTask'
import { addTask, delTask, editTask, checkedTask } from '../actions';


const mapStateToProps = (state) => {
    return { tasks: state.tasks }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({ addTask, delTask, editTask, checkedTask }, dispatch) );

const tab_style={
    width:400,
    };

class TaskList extends Component {
    render() {
        return (
            <div style={tab_style}>

                <AddTask />
                {this.props.tasks.map((item, index)=>(
                    < Task data={item}
                           index={index}
                           key={index}
                           delete={this.props.delTask}
                           edit={this.props.editTask}
                           checked={this.props.checkedTask}
                            />
                ))}

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
