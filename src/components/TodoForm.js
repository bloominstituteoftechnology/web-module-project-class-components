import React from 'react'

class TodoForm extends React.Component {
        state = {
        ...this.state,
        textInput:""
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.textInput)
        this.setState({
            ...this.state,
            textInput: "",
        })
    }
    onChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
       
        return(
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <input 
                        type="text"
                        name="textInput"
                        value={this.state.textInput}
                        onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default TodoForm