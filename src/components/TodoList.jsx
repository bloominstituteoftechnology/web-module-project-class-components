import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render(props) { 
        return ( <ul style={{listStyleType: "none"}} >
            {this.props.todos.map((todo, index) =>
                <Todo todo={todo} key={index} toggleCompleted={this.props.toggleCompleted} />
            )}
        </ul> );
    }
}
 
export default TodoList;