import React from 'react';

const UneditableTask = (props) => {
    return (
        <div
            style={{
                textDecoration: props.data.done ? 'line-through' : 'none',
                display: props.editable ? 'none' : null
            }}
            onDoubleClick={props.edit}>
            {props.data.title}
        </div>
    )
};
export default UneditableTask;