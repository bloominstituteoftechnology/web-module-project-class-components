import React from 'react'

export default function TodoForm(props) {
    const { newTodo, onChange, addTodo, clearCompleted } = props

    return (
        <>
            <form onSubmit={addTodo}>
                <label htmlFor="new-todo">New Todo</label>
                <input 
                    id="new-todo"
                    name="new-todo"
                    type="text"
                    value={newTodo}
                    onChange={onChange}
                />
                <button type="submit" disabled={!newTodo}>Add Todo</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed</button>
        </>
    )
}