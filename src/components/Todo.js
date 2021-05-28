import React from 'react'

class Todo extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.onClick(this.props.todo.id);
    }


    render() {
        const neoClass = this.props.todo.completed?"todo completed": "todo";

        return (
            <div id={this.props.todo.id} className={neoClass}
                onClick={this.handleClick}>
                {this.props.todo.name}
            </div>
        )
    }
}

export {
    Todo
}