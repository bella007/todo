import React, { Component } from 'react';
import '../App.css';
import Task from './Taskk'
import { addTask } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return { posts: state.tasks }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({ addTask }, dispatch) );

class Tasks extends Component {
    render() {
        return (
            <Task />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
