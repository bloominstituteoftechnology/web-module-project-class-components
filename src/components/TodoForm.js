import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
        }
    }

    handleChange = (e) => {
        this.state.task = e.target.value;
    }

    submit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.task);
    }

    clear = () => {
        this.props.handleClear();
    }

    render() {
        return(
            <div className="form-div">
                <form onSubmit={this.submit} className="form">
                    <label> To do:
                        <input
                            type="text"
                            name="task"
                            placeholder="...To do"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Add</button>
                    
                </form>
                <button className="clearbtn"onClick={this.clear}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;
