import React, {Component} from 'react';
import {withRouter} from 'react-router';

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <button onClick={()=>(this.props.history.push(`TaskList`))}>Tasks</button>
               <button onClick={()=>(this.props.history.push(`UserList`))}>Users</button>
            </div>
        );
    }
}
export default (Hello);
