import React from 'react'

export default class Todo extends React.Component {
  render() {
    console.log(this.props.list.completed)
    return (
      <div>
        <a href='#' onClick={() => this.props.toggleCompleted(this.props.list.id)}>{this.props.list.name}{this.props.list.completed === true ? '--Completed' : null}</a>
      </div>
    )
  }
}


// {
//   this.props.theListArr.map(list => (
//           <div key={list.id}>
//             {list.name}
//             </div>
//     ))
//  }
