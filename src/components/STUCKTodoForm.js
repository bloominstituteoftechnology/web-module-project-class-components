import React, { useState } from 'react';


// function TodoForm(props) {  // Traditional way.

const TodoForm = (props) => {
    // You can compile 1 step of the traversal this way.
    // const appState = props.state 
    // console.log(appState) 

    const [data, setData] = useState({
        task: '',
        id: new Date(),
        completed: false
      })

    // console.log(data.task)
    // console.log(props) // {state: Array(2)} • state: Array(2) • 0: • completed/id/task
    // console.log(props.state[0]) // {task: "Organize Garage", id: 1528817077286, completed: false}

    const handleChange = (e) => {
        e.preventDefault();
        setData({[e.target.name]: e.target.value})
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(data.Todo)
        }     
                
            return (
            <div>
                <form onSubmit={handleSubmit}>
                {/* <form> */}
                    <input
                        onChange={handleChange}
                        value={data.task}
                        type="text"
                        name="Todo"
                    />
                    <button>TodoForm Button</button>
                </form>
                <h2>{props.state.map(i => <li>{i.task}</li> )}</h2>  {/* Organize Garage Bake Cookies */}
                <p key={data.id}>{data.task}</p>
            </div>
    );
}
export default TodoForm;


// const [people, setPeople] = useState([])

// const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value })
// }

// const submitHandler = (e) => {
//     e.preventDefault();
//     const updtaedPeople = people.concat(data)
//     setPeople(updatedPeople)
// }















    // class TodoForm extends React.Component {
    //     constructor() {
    //         super();
    //         this.state = {
    //             newItemName: ''
    //         }
    //     }
    
        // handleChanges = (e) => {
        //     this.setState({ newItemName: e.target.value })
        // }
    
        // handleSubmit = (e) => {
        //     e.preventDefault();
        //     this.props.addItem(this.state.newItemName)
        // }
    
    //     render() {
    //         return (
    //             <form onSubmit={this.handleSubmit}>
    //                 <input
    //                     onChange={this.handleChanges}
    //                     value={this.state.newItemName}
    //                     type="text"
    //                 />
    //                 <button>TodoForm Class Component.</button>
    //             </form>
    //         );
    //     }
    // }
    // export default TodoForm;