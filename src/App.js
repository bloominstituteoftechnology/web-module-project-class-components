import React    from "react";
import TodoList from "./components/TodoList";

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            todoList: [],
            newTodoTask: "",
        };
    }

    newTodoTask       = input => {
        this.setState( { ...this.state, newTodoTask: input.target.value } );
    };
    updateTodoList    = () => {
        const { todoList, newTodoTask } = this.state;
        todoList.push( newTodoTask );
        this.setState( { todoList: todoList } );
    };
    refreshFormValues = () => {
        this.setState( { ...this.state, newTodoTask: "" } );
    };

    render () {
        return (
            <>
                <TodoList
                    todoList={this.state.todoList}
                    updateTodoList={this.updateTodoList}
                    newTodoTask={this.state.newTodoTask}
                    setNewTodoTask={this.newTodoTask}
                    refreshFormValues={this.refreshFormValues}
                />
            </>
        );
    }
}

export default App;
