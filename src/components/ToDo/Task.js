import  React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import SvgIcon from 'material-ui/SvgIcon';
import {red500} from 'material-ui/styles/colors';
import '../../App.css';
import DisplayTask from './DisplayTask'
import EditableTask from './EditableTask'

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

    componentWillReceiveProps = (nextProps) => {
        this.setState({input_val: nextProps.data.title})
    };
    componentWillMount = () => {
        this.setState({editable: false})
    };
    handleDelete = () => (
        this.props.delete(this.props.data.id)
    );
    handleChangeState = () => (
        this.props.checked(this.props.data.id)
    );

    handleEditToggle = () => {
        this.setState({editable: !this.state.editable,});
    };
    handleSubmitEdit = () => {
        this.props.edit({data: this.props.data, input_val: this.state.input_val});
        this.handleEditToggle()
    };
    handleChangeInput = (e) => (
        this.setState({input_val: e.target.value})
    );

    render() {
        return (
            <div>
                <ListItem
                    rightIcon={<DeleteIcon style={iconStyles} color={red500} className="hh"
                                           onClick={this.handleDelete}/>}
                >

                    <DisplayTask editable={this.state.editable}
                                    edit={this.handleEditToggle}
                                    data={this.props.data}
                    />
                    <EditableTask editable={this.state.editable}
                                   input_val={this.state.input_val}
                                   handleChangeInput={this.handleChangeInput}
                                   handleSubmitEdit={this.handleSubmitEdit}
                                   edit={this.props.edit}
                                   data={this.props.data}
                    />
                    <Checkbox
                        checked={this.props.data.done}
                        onCheck={this.handleChangeState}
                        value={this.props.index}
                    />
                </ListItem>

            </div>
        );
    }
}

export default Task;
