import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import SvgIcon from 'material-ui/SvgIcon';
import {red500, blue500} from 'material-ui/styles/colors';
import '../App.css';

const iconStyles = {
    marginRight: 24,
};

const DeleteIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41
        10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </SvgIcon>
);

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    handleDelete = () => (
        this.props.delete(this.props.index)
    );


    handleEdit = () => {
        console.log(this.state.edit)
        this.setState({edit: !this.state.edit});
    };


    handleChange = () => (
        this.props.checked(this.props.index)
    );

    render() {
        return (
            <div>
                <ListItem
                    rightIcon={<DeleteIcon style={iconStyles} color={red500} className="hh" onClick={this.handleDelete}  />}
                    onDoubleClick={this.handleEdit}
                    >
                    <div  style={{
                        textDecoration: this.props.data.done ? 'line-through' : 'none',
                        contentEditable: this.state.edit ? true : false,
                    }}>{this.props.data.title}</div>
                    <Checkbox
                        checked={this.props.data.done}
                        onCheck={this.handleChange}
                        value={this.props.index}
                    />
                </ListItem>

            </div>
        );
    }
}

export default Task;