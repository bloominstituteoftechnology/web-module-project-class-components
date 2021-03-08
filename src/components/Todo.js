import React from 'react'

class Todo extends React.Component{

    render(){
        return (
            <>
            <h6 className={`task ${this.props.item.completed? "completed" : "" }`} onClick={()=>{this.props.toggleComplete(this.props.item.id)}}>{this.props.item.task}</h6>
            </>
        )
    }
}
export default Todo;