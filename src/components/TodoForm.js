import React from 'react';

function TodoForm () {
    return (
        <div>
            <form>
                <input type='text' placeholder='add todo' />
                <button>add to todo list</button>
                <button>clear completed</button>
            </form>
        </div>
    )
}

export default TodoForm