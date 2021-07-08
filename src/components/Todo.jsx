import React, { Component } from 'react';

class Todo extends Component {

    render(props) { 
        const {task, id, completed} = this.props.todo;
        return ( <li style={completed ? {textDecoration: "line-through"} : {textDecoration: "none"}} ><input type="checkbox" checked={completed} onChange={e=>this.props.toggleCompleted(e,id)} />{task}</li> );
    }
}
 
export default Todo;