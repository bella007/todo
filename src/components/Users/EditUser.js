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

class EditableTask extends Component {

    render() {
        return (
            <div>
                <List>
                {(Object.keys(this.props.user)).map((key, index)=>(
                    <ListItem key={index}>
                        {key}:{this.props.user[key]}
                    </ListItem>

                ))}
                </List>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditableTask);
