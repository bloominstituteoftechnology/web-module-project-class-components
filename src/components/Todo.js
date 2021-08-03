import React from "react";
import { render } from "@testing-library/react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Learn setState()</p>
        <form>
          <input
            type="Text"
            name="form"
            id="special-text"
            onChange={() => {}}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
/*<input
            type="Text"
            name="additions"
            id="special-text"
            onChange={() => {}}
          />
          <label htmlFor="additions">Anything else you's like to add?</label>*/
export default Todo;
