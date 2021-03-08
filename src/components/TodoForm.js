import React from "react";

const Form = (props) => {
  return (
    <div>
      <input value={props.input} onChange={props.change} />
      <button onClick={props.submit}>Add Todo</button>
      <button onClick={props.clear}>Clear Completed</button>
    </div>
  );
};

export default Form;
