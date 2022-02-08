import React from 'react'
import { v4 as uuid } from 'uuid';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.toDos.map(item => {
          console.log('item: ', item);
          return(
            <div key={uuid()}>{item.name}</div>
          )
        })}
      </div>
    )
  }
}
