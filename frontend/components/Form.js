import React from 'react'

export default class Form extends React.Component {
  render() {
    console.log(this.props.theListArr.completed)
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>Add a chore</label> <br />
          <input
          value={this.props.itemText}
            onChange={this.props.onChange}
          /> <br />
          <button>Add</button>
          <button onClick={this.props.filterCompleted}>clear</button>
        </form>
      </div>
    )
  }
}
