import React from 'react';

const Todo =(props) => {


const click = (event) => {
    console.log('click');
   props.toggleCompleted(props.item.id)
}

    return (
        
         <div>
                <p onClick={click}>{props.item.task}</p>
                     
         </div>
        
        
        
    )

}

export default Todo;