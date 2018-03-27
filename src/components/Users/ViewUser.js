import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem} from 'material-ui/List';
import {List} from 'material-ui/List';
import EditUser from "./EditUser";
import {edit_user_field} from '../../actions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps);
    return {
        user: state.users.filter((item) => (item.id == ownProps.match.params.id))[0]
    }
};

const mapDispatchToProps = dispatch => ( bindActionCreators({edit_user_field}, dispatch) );

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
            :this.setState({editable: false})
    };

    render() {
        return (
            <div>
                <List>
                    {(Object.keys(this.props.user)).map((key, index) => (

                        <ListItem key={index}>
                            {this.state.editable === 'id' ||this.state.editable !== key ?
                                <div onDoubleClick={() => this.userEdit(key)}>{key}:{this.props.user[key]}</div>
                                : <EditUser user={this.props.user}
                                            key_field={key}
                                            editt={this.props.edit_user_field}
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
