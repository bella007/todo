import React from 'react';

const EditableTask2 = (props) => {
    return (
        <div style={{display: props.editable ? null : 'none'}}>
            <input autoFocus={true} value={props.input_val} onBlur={props.handleSubmitEdit}
                   onChange={props.handleChangeInput}/>
        </div>
    )
};
export default EditableTask2;