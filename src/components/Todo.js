import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div className='todoItem'> {this.props.task}</div>
        )
    }
}
export default Todo;