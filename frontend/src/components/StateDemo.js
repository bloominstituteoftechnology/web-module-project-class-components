import React from 'react';

// ==============================================

const StateDemo = (props) => {

  // --------------------------------------------

  return (
    <div>
      <h1>x: {props.x}</h1>
      <input type="text" value={props.x}  onChange={props.updateStateMessage} />
    </div>
  );
}

export default StateDemo;
