import React from "react";

class Todo extends React.Component {
    // constructor(){
    //     super();
    //     this.state= {

    //     }
    // }
    render() {
        return (
            <div>
            <p>{this.props.todo.task}</p>
            </div>
        );
    }
}

export default Todo;