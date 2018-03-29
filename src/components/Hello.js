import React, {Component} from 'react';

class Hello extends Component {
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
