// your components will all go in this `component` directory.
import React    from "react";
import TodoForm from "./TodoForm";
import Todo     from "./Todo";

const TodoList = props => {
    return (
        <>
            <h1>Today's Todo List!</h1>
            <TodoForm
                newTodoTask={props.newTodoTask}
                setNewTodoTask={props.setNewTodoTask}
                todoList={props.todoList}
                updateTodoList={props.updateTodoList}
                refreshFormValues={props.refreshFormValues}
            />
            <Todo todoList={props.todoList}/>
        </>
    );
};

export default TodoList;