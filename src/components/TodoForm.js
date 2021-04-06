import React, {useState} from 'react';


export default function toDoForm(props) => {

const TodoForm = props => {
    return (
    <form>
        <input placeholder = "What's your task?" onChange = {props.setToDo}/>
    </form>
    );
}