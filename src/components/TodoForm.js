import React from "react";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ""
        }
    }
    render() {
        return (
            <form>
                <input onChange={} type="text" name="task" />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoList;