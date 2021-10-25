import React from 'react'

function TodoForm () {

    return(
        <div>
            <form>
                <input 
                type='text'
                placeholder='Enter Todo Item'
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm