import React, { useState } from 'react';


export default function TodoForm(props){

    const [data, setData] = useState(  {
        task: '',
        id: new Date(),
        completed: false
      })

    console.log(data.task)
    // console.log(props.state.notes[0].task) // Organize garage.
    
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        }
        
        // handleSubmit = (e) => {
            //     e.preventDefault();
            // }
            // onSubmit={handleSubmit}

            return (
            <div>
                <form>
                    <input
                        onChange={handleChange}
                        value={data}
                        type="text"
                        name="Todo"
                    />
                    <button>TodoForm Button</button>
                </form>
                <h2>{props.state.notes.map(i => <li>{i.task}</li> )}</h2>  {/* Organize Garage Bake Cookies */}
            </div>
    );
}

















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