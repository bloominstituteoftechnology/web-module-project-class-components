import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={

        }
    }



    render(){
        return (
            <form>
            <input
            type="text"
            placeholder="To Do"/>
            <button onClick={this.handleAdd}>
                Add Todo
            </button>
              
        </form>
        )
    }

}

export default TodoForm;

