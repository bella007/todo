import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../App.css';

import {addTask} from '../actions';

const mapDispatchToProps = dispatch => ( bindActionCreators({addTask}, dispatch) );

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input_val: '',
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();

        if (this.state.input_val.trim() !== '') {
            let new_task = {
                title: this.state.input_val,
            };
            this.props.addTask(new_task);
        }

        this.setState({input_val: ''});
    };

    handleChange(e) {
        this.setState({input_val: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.input_val}
                           placeholder="What needs to be done?"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddTask);