// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// import React from "react";
// import Todo from "./Todo";

// const TodoList = props => {
// const handleClick = () => {
//         props.handleClear();
//     }

//         return (
//             <div>
//                 {props.todo.map(item => (
//                     <Todo handleToggle={props.handleToggle} key={item.id} item={item} />
//                 ))}
//                 <button onClick={handleClick}>Clear todo</button>
//             </div>
//         )
//     }

//     export default TodoList;

    import React, { Component } from "react";
    import Todo from "./Todo";
    export class TodoList extends Component {
        render() {
            return (
            <div>
                {this.props.todo.map((item) => (
                <Todo
                    key={item.id}
                    item={item}
                    handleToggle={this.props.handleToggle}
                />
                ))}
            </div>
            );
        }
        }
        export default TodoList;