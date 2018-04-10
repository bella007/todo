import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem} from 'material-ui/List';
import {List} from 'material-ui/List';
import EditUser from "./EditUser";
import {edit_user_field, users_edit_request} from '../../actions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.filter((item) => (item._id == ownProps.match.params.id))[0]
    }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({edit_user_field, users_edit_request}, dispatch) );

class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
        }
    }

    userEdit = (key) => {
        key ?
            this.setState({editable: key})
            : this.setState({editable: false})
    };

    render() {
        return (
            <div>
                <List>
                    {(Object.keys(this.props.user)).map((key, index) => (

                        <ListItem key={index}>
                            {this.state.editable === 'id' || this.state.editable !== key ?
                                <div onDoubleClick={() => this.userEdit(key)}>
                                    {key}:{this.props.user[key]}
                                </div>
                                : <EditUser user={this.props.user}
                                            key_field={key}
                                            edit_user_field={this.props.users_edit_request}
                                            userEdit={this.userEdit}/>
                            }
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser);
