import React from 'react'

export default class TodoForm extends React.Component{
  constructor(){
    super();
    this.state = {
      input:''
    }
  }
  handleSubmit= (e)=> {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = (e) => {
    this.setState({
      ...this.State,
      input: e.target.value
    })
  }

  render(){
    return(<form>
      <input onChange = {this.handleChange}/>
      <button onClick={this.handleSubmit}>Add</button>
    </form>)
  }
}
