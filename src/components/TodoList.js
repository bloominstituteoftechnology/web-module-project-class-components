import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component{

    render(){
        
        return(
            <div>
                <TodoForm handleAddTodo={this.props.handleAddTodo} clearItems={this.props.clearItems}/>
                {this.props.todolist.map(todo=>(
                    <Todo todo={todo} key={todo.id} toggleItems={this.props.toggleItems}/>
                ))}
            </div>
        );
    }
}

export default TodoList;