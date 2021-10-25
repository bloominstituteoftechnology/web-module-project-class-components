import React from 'react'

function TodoForm (props) {

    const { handleClear, handleAddItem } = props

    return(
        <div>
            <form>
                <input 
                type='text'
                placeholder='Enter Todo Item'
                />
                <button onClick={handleAddItem}>Add Todo</button>
                <button onClick={handleClear}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm