import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`item${this.props.item.completed ? " completed" : ""}`}
        onClick={() => this.props.toggleItem(this.props.item.id)}
      >
        <p>{this.props.item.name}</p>
      </div>
    );
  }
}
