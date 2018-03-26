import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem} from 'material-ui/List';
import {List} from 'material-ui/List';

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps);
    return {
        user: state.users.filter((item) => (item.id == ownProps.match.params.id))[0]
    }
};

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            field_value: null,
            // field_value: this.props.user[key]
        }
    }

    userEdit = () => {
        // this.props.history.push(`UserList/user/edit${this.props.data.id}`);
    };
    handleChangeInput = (e) => (
        this.setState({input_val: e.target.value})
    );
    handleSave = (e) => (
        console.log('handleSave from EditUser component')
    );
    render() {
        return (
            <div>
                {/*<span>{key}:</span>*/}
                <input autoFocus={true}
                       value={this.state.field_value}
                       onBlur={this.handleSave}
                       onChange={this.handleChangeInput}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditUser);
