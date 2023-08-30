import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todo-list">
        <h2>TodoList</h2>
        {this.props.list.map((item) => (
          <Todo toggleItem={this.props.toggleItem} key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
