import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../App.css';

import {addTask, tasks_add_request} from '../../actions';

const mapDispatchToProps = dispatch => ( bindActionCreators({addTask, tasks_add_request}, dispatch) );

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changed_task: '',
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();

        if (this.state.changed_task.trim() !== '') {
            let new_task = {
                title: this.state.changed_task,
            };
            this.props.addTask(new_task);
            this.props.tasks_add_request(new_task);
        }

        this.setState({changed_task: ''});



    };

    handleChange(e) {
        this.setState({changed_task: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.changed_task}
                           placeholder="What needs to be done?"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddTask);
