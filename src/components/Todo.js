import React from 'react';

// class Todo extends React.Component {
//     constructor() {
//         super();

//     }
//     render() {
//         return(
//             <div>


//             </div>
//         )
//     }
// }

const Todo = props => {

    // click handler to toggle item as done?

    return (
        <div>
            <p>{props.todo.task}</p>
        </div>
    )

}

export default Todo;