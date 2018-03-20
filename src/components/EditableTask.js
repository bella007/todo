import React, {Component} from 'react';


class EditableTask extends Component {
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
    handleEdit = () => {
        this.setState({editable: !this.state.editable,});
    };
    handleSubmitEdit = () => {
        this.props.edit({data: this.props.data, input_val: this.state.input_val});
        this.handleEdit()
    };
    handleChangeInput = (e) => (
        this.setState({input_val: e.target.value})
    );
    handleCancel = () => (
        this.handleEdit()
    );

    //TODO: 2) помнишь мы говорили об условном рендеринге? Делай тут toggle цссом.
    render() {
        return (
            <div>
                {this.state.editable ?
                    <div><input autoFocus={true} value={this.state.input_val} onBlur={this.handleSubmitEdit}
                                onChange={this.handleChangeInput}/>
                        <button onClick={this.handleSubmitEdit}>Edit</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                    : <div
                        style={{textDecoration: this.props.data.done ? 'line-through' : 'none',}}
                        onDoubleClick={this.handleEdit}>{this.props.data.title}</div>
                }
            </div>
        );
    }
}

export default EditableTask;