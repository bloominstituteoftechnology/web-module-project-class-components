import React from 'react';
import PageHome from './pages/home/PageHome.js';
import './styles.css';

// ==============================================

class App extends React.Component {
  
  // --------------------------------------------
  
  // App houses state and change handlers to modify state
  constructor() {
    super();
    this.state = {
      x: 0,
      apnts: []
    };
  }
  
  // --------------------------------------------

  updateStateMessage = (e)=> {
    this.setState({x: e.target.value});
  }

  // --------------------------------------------
  
  render() {
    return (
      // <div style={{border: 'solid darkorange 2px'}}>
      //   <div style={{border: 'solid darkorchid 2px'}}>          
      //     <Todo />
      //   </div>

      //   <div style={{border: 'solid lightpink 2px'}}>
      //     <TimeBlocks />
      //   </div>

      //   <div style={{border: 'solid lightblue 2px'}}>
      //     <StateDemo updateStateMessage={this.updateStateMessage} x={this.state.x}/>
      //   </div>
      // </div>
      <PageHome />
    );
  }
}

// ==============================================

export default App;

