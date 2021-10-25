// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component{

    render(){
        
        return(
            <div>
                {this.props.todolist.map(todo=>(
                    <Todo todo={todo} key={todo.id} toggleItems={this.props.toggleItems}/>
                ))}
                <TodoForm handleAddTodo={this.props.handleAddTodo} clearItems={this.props.clearItems}/>
            </div>
        );
    }
}

export default TodoList;
