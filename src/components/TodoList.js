import React from "react";

import Todo from "./Todo"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
render(){
return(
    <div>
        {this.props.tasks.map(item =>(
            <Todo handleToggleItem={this.props.handleToggleItem} key={item.id} task={item} taskDone={item.taskDone}/>
        ))}
    </div>
);
}
}

export default TodoList