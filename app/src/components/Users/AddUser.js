import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../App.css';

import {users_add_request} from '../../actions';

const mapDispatchToProps = dispatch => ( bindActionCreators({users_add_request}, dispatch) );

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            email: ''
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();

        if (this.state.user_name.trim() !== '' ||this.state.email.trim() !== '') {
            let new_user = {
                name: this.state.user_name,
                email: this.state.email,
            };
            this.props.users_add_request(new_user);
        }

        this.setState({user_name: ''});
        this.setState({email: ''});


    };

    handleChangeName(e) {
        this.setState({user_name: e.target.value});
    }
    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={this.handleChangeName} value={this.state.user_name}
                           placeholder="name"/><br/>
                    <input type="text" onChange={this.handleChangeEmail} value={this.state.email}
                           placeholder="email"/><br/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddTask);
