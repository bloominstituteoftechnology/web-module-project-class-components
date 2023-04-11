import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handlesumbit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input)
  }

  handlechange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }



  render() {
    
    return (
      <form>
        <input onChange={this.handlechange} type="text" />
        <button onClick={this.handlesumbit}>ADD</button>

      </form>)
  }
}
