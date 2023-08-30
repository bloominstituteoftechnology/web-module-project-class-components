import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
  handleSubmit = (e) => {
    this.setState({
      ...this.state, 
      input: e.target.value
    })
  }
  render() {
    return (
      <form>
        <input onChange={this.handleChange} type="text" />
        <button onClick={this.handleSubmit}>ADD</button>
      </form>
    )
  }
}
