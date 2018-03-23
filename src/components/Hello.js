import React, {Component} from 'react';
import {withRouter} from 'react-router';
import fetchUsers from '../function/fetchUsers'

class Hello extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount = () => {
        console.log('componentWillMount');
        fetchUsers();
    };
    render() {
        return (
            <div>
               <button onClick={()=>(this.props.history.push(`TaskList`))}>Tasks</button>
               <button onClick={()=>(this.props.history.push(`UserList`))}>Users</button>
            </div>
        );
    }
}
export default(Hello);
