import React from 'react';

const Todo = (props) => {
    console.log(props);
    return(
        <div>
            {props.id} <br/>
            {props.name}
        </div>
    )
}

export default Todo;