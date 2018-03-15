import React, {Component} from 'react';
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
        10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </SvgIcon>
);

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            input_val: this.props.data.title,
        }
    }

    handleDelete = () => (
        this.props.delete(this.props.data.id)
    );


    handleEdit = () => {
        this.setState({editable: !this.state.editable});
    };


    handleChange = () => (
        this.props.checked(this.props.data.id)
    );

    handleChangeInput = (e) => {
        console.log(e.target.title);
        this.setState({input_val: e.target.value})
    };

    render() {
        return (
            <div>
                <ListItem
                    rightIcon={<DeleteIcon style={iconStyles} color={red500} className="hh"
                                           onClick={this.handleDelete}/>}
                    onDoubleClick={this.handleEdit}
                >
                    {this.state.editable ? <input value={this.state.input_val} onChange={this.handleChangeInput}/>
                        : <div
                            style={{textDecoration: this.props.data.done ? 'line-through' : 'none',}}>{this.state.input_val}</div>
                    }
                    {/*{this.props.data.title}*/}
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