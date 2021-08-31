import React from 'react';

const Todo =(props) => {

// console.log(props.todo.completed);
const clickTodo = ()=> {
   
//    props.crossItem(props.todo.id);
props.crossItem(props.todo.id)
console.log('cross')
}

    return (
        
         <div onClick={clickTodo} className={`${props.todo.completed ? ' todo' : ''}`} >

                     <p> {props.todo.task}</p>
         </div>
        
        
        
    )

}

export default Todo;