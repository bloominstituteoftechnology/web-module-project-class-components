import React from 'react';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.toggleTask(this.props.task.id)
    }

    render() {
        return(
            <div onClick={this.handleClick} className={this.props.task.completed ? 'completed' : ''}>{this.props.task.task}</div>
        )
    }

}

export default Todo