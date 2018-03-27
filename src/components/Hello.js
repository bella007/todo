import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllUsers, fetchUsers} from '../actions';


const mapDispatchToProps = dispatch => ( bindActionCreators({getAllUsers, fetchUsers}, dispatch) );

class Hello extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount = () => {
        this.props.fetchUsers()
        // fetchUsers();
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
export default connect(null, mapDispatchToProps)(Hello);
