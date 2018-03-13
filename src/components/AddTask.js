import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import TextField from 'material-ui/TextField';

import { addTask } from '../actions';

const mapDispatchToProps = dispatch => ( bindActionCreators({ addTask }, dispatch) );

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();

        if(this.refs.task_text.value.trim() !== '') {
            let new_task = {
                title: this.refs.task_text.value,
            };
            this.props.addTask(new_task);
        }
        this.refs.task_text.value = '';
    };

    componentDidUpdate() {
        this.refs.task_text.value = '';
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" ref="task_text" placeholder="What needs to be done?"/>
                <button type="submit">Add</button>
            </form>
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddTask);