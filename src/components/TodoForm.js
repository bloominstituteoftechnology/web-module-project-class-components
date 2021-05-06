import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input placeholder='New task' onChange={this.props.updateNewTaskText} />
                    <button type='submit' onClick={this.props.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;