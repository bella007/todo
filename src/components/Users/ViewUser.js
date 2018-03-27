import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem} from 'material-ui/List';
import {List} from 'material-ui/List';
import EditUser from "./EditUser";

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps);
    return {
        user: state.users.filter((item) => (item.id == ownProps.match.params.id))[0]
    }
};

class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
        }
    }

    userEdit = (key) => {
        this.setState({editable: key});

    };
    handleCancel = () => (this.setState({editable: !this.state.editable}));
    // handleSave = () => {
    //     // this.props.edit({data: this.props.data, input_val: this.state.input_val});
    //     console.log('edited')
    // };

    render() {
        return (
            <div>
                <List>
                    {(Object.keys(this.props.user)).map((key, index) => (

                        <ListItem key={index}>
                            {/*{this.state.editable !== key ?*/}
                                {/**/}
                                {/*: <EditUser user={this.props.user}*/}
                                            {/*key={key}/>*/}
                            {/*}*/}
                            <div>{key}:{this.props.user[key]}</div>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ViewUser);
