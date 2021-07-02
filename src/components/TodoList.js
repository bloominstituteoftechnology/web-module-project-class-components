import React from 'react';

// class ToDoList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>
//                 <h2>hi</h2>
//                 {/* <p>{this.state.notes}</p> */}
//                 {props.notes.map((note) => (
//                     <div key={note.id}>
//                         {note.task}
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

function ToDoList(props) {
    console.log(props);
    return (
        <div>
            {props.notes.map((note, index) => (
                <li key={index}>
                    {note.task}
                </li>
            ))
            }
        </div >
    )
}

export default ToDoList;