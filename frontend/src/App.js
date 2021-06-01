import React from 'react';
import Todo from './components/Todo.js';
import axios from 'axios';

class App extends React.Component {
  
  // --------------------------------------------
  
  // App houses state and change handlers to modify state
  constructor() {
    super();
    this.state = {
      x: 0
    };
  }
  
  // --------------------------------------------

  updateStateMessage = (e)=> {
    this.setState({x: e.target.value});
  }

  // --------------------------------------------
  
  render() {
    return (
      <div>
        <button onClick={() => {
            console.log('clicked!');

            axios.get('http://localhost:4000/classes')
              .then(response => {
                console.log('response.data: ', response.data);
              })
              .catch(error => console.log('error: ', error));
        }}>
          Click Me!
        </button>
        
        <Todo updateStateMessage={this.updateStateMessage} x={this.state.x}/>
      </div>
    );
  }
}

export default App;

