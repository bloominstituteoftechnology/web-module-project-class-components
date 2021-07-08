import React, { Component } from 'react';

class Todo extends Component {

    render(props) { 
        const {task, id, completed} = this.props.todo;
        return ( <li><input type="checkbox" />{task}</li> );
    }
}
 
export default Todo;