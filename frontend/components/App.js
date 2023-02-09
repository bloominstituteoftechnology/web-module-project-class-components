import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>


        <ul>
          <li>Brush teeth</li>
          <li>Take out the dogs and feed them</li>
          <li>Use restroom</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
