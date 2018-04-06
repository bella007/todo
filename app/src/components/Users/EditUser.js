import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        user: ownProps.user
    }
};

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field_value: this.props.user[this.props.key_field]
        }
    }

    handleChangeInput = (e) => (
        this.setState({field_value: e.target.value})
    );

    handleSave = (e) => {
        this.props.edit_user_field({
            user_id: this.props.user._id,
            key_field: this.props.key_field,
            value_field: this.state.field_value
        });
        this.props.userEdit()
    };

    render() {
        return (
            <div onDoubleClick={()=>this.props.userEdit()}>
                <span>{this.props.key_field}:</span>
                <input autoFocus={true}
                       value={this.state.field_value}
                       onBlur={this.handleSave}
                       onChange={this.handleChangeInput}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditUser);
