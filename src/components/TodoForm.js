import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
      this.state = {
        text:''
      }
      }

    
      changetext = (e) => {
        const {name,value} = e.target
        this.setState({
          [name]:value});
        console.log(this.state.text);
      }

      submit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text)
        this.setState({text:''});
      }

render() {
  
    return (
        <form onSubmit={this.submit}>
            <input name="text" type="text" placeholder="todo" value={this.state.text} onChange={this.changetext}/>
            
        </form>
    )
}

}

export default TodoForm;