import React from 'react';

class TodoForm extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <label> To do:
                        <input
                            type="text"
                            name="task"
                            placeholder="...To do"
                        />
                    </label>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
