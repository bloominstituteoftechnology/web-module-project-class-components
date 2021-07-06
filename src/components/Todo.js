import React , {useState} from "react";

const ToDo = (props) => {
    // const [toDo, setToDo] = useState({
    //     task: "",
    //     id: "",
    //     completed: false,
    // })

    // const handleClick = () => {
    //     props.toggleItem(props.todo.id)
    // }

    return (
        <div>
            <p style={{ textDecoration: props.todo.completed ? 'line-through' : null  }} onClick={() => props.toggleCompleted(props.todo.id)}>{props.todo.task}</p>
        </div>
    );
}
    export default ToDo;
