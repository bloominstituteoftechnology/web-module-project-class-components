import React from 'react'


export default class Form extends React.Component {
  constructor () {
    super();
    this.state = {
      form: ''
    }
  }
  submit = (e,item) => {
    this.props.submit(e,this.state.form)
    this.setState({form: ''})
  }

  change = (e) => {
    e.preventDefault()
    this.setState({...this.state.form, form: e.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
        <input type="text" name='form' onChange={this.change} value={this.state.form}/><button>Submit</button>
        </form>
        <button onClick={this.props.clear}>Clear Completed</button>
      </div>
    )
  }
}