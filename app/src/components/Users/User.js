import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import {red500} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    // console.log('ownProps.data.id', ownProps.data.id || ownProps.data._id)
    return {
        user: state.users.filter((item) => (item.id == ownProps.data.id || item.id == ownProps.data._id ))
    }
};

const iconStyles = {
    marginRight: 24,
};

const DeleteIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41
        10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </SvgIcon>
);

class User extends Component {

    handleEdit = () => {
        this.props.history.push(`UserList/user/${this.props.data.id || this.props.data._id}`);
    };

    handleDelete = (e)=> {
        e.stopPropagation();
        console.log('delete from component');
        this.props.delete(this.props.data._id);
    };

    render() {
        return (
            <div onClick={this.handleEdit}>
                <ListItem
                          rightIcon={<DeleteIcon style={iconStyles} color={red500} className="hh"
                                                 onClick={this.handleDelete}/>}
                >
                {/*<ListItem onClick={this.handleEdit}*/}
                {/*>*/}
                    {this.props.data.login || this.props.data.name}
                </ListItem>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(User));
