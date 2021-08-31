import React, {Component, useState} from 'react';

import ToDo from './Todo'


export default function ToDoList(props){
    

    return (
        <div className='task-container'>
            {props.task.map(task =>(
                <ToDo 
                    toggleComplete={props.toggleComplete} 
                    key={task.id} 
                    todo={task} 
                />    
            ))}
                  
        </div>
    );
}
