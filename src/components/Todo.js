import React from 'react';
//takes in the Todo data array
//displays the task to the DOM

const Todo = props => {
    //const {todo} = props;
    //console.log(props , 'props from todo on App.js'); //allows you to see the props drilling down in console
    
    return (
        //recieves your Todos array. 
        <div onClick={() => props.toggleTodo(props.todo.id)} className={`todo${props.todo.completed ? 'Completed' : ''}`}>
            <p>{props.todo.task};</p> 
        
        </div>
   );
};





export default Todo; 

//This isn't a class component