import React from 'react'

const ToDoForm = props => {


        return(
            <form onSubmit={props.submitHandler}>
            <input type='text' 
            id='inputForm'
            name='inputText' 
            placeholder = 'type to add something'
            value={props.inputText} 
            onChange={props.changeHandler}
            />
            <button id='submitBtn' disabled={props.inputText === '' ? true : false}>Submit</button>
            <button id='deleteBtn' onClick={props.deleteHandler}>Delete</button>
        </form>
    )
}

export default ToDoForm;