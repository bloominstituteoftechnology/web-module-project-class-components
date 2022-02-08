import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>

        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>

        <form>
          <input/>
          <button>add</button>
        </form>

        <button>clear</button>
      </div>
    )
  }
}
