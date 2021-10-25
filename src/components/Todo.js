import React from 'react'

function Todo (props) {

    const {task} = props

    return(
        <h3>Do This -- {task}</h3>
    )
}

export default Todo