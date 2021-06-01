import React from 'react';
import Todo from './components/Todo.js';

// ==============================================

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
        }}>
          Click Me!
        </button>
        
        <Todo updateStateMessage={this.updateStateMessage} x={this.state.x}/>
      </div>
    );
  }
}

export default App;

