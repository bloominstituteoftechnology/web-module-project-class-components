import React from 'react'

export default class App extends React.Component {
constructor(){
  super();
  this.state = {
   ToDos: [
      {
        name: 'Organize Garage',
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false
      },
      {
        name: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
  }
}



  render() {
    const { ToDos } = this.state;
    console.log(ToDos)
    return (
      <div>
        <h1>TODOS</h1>
        <ul>
        {ToDos.map(todo=>{
          return (<li>{todo.name}{todo.completed? <span>- completed</span>: <span></span>}</li>)
        })}
        </ul>
        
        <form>
          <input type="text"/>
          <button>ADD</button>
          <button>CLEAR</button>
        </form>
      </div>
    )
  }
}
