import React, {useState} from 'react';


export default function toDoForm(props) => {

    const ToDoFunction = () => {
        const [ToDo, setToDO] = useState("");
        const handleClick = () => {
        setToDO("");
        

    return(
        <div>
            <h2>{props.task}</h2>
            <p>{props.id}</p>
            <p>Completed: {props.completed}</p>
        </div>
        );
    }

    