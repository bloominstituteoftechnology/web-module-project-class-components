import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

const theListArr = [
  {
    name: 'take out the trash',
    id: Math.random(),
    completed: false
  },
  {
    name: 'wash the dishes',
    id: Math.random(),
    completed: false
  },
  {
    name: 'go running',
    id: Math.random(),
    completed: false
  }

]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theListArr: theListArr,
      itemText: ''
    }
  }

  toggleCompleted = (id) => {
    this.setState({
      theListArr: this.state.theListArr.map(list => {
        if (id === list.id) {
          return {
            ...list, completed: !list.completed
          }
        }
        return list
      })
    })
  }

  filterCompleted = () => {
    this.setState({
      theListArr: this.state.theListArr.filter(list => list.completed === false
      )
    })
  }

  addList = (name) => {
    const newList = {
      name: name,
      id: Math.random(),
      completed: false
    }

    const newListArr = [...this.state.theListArr, newList]

    this.setState({
      theListArr: newListArr
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.addList(this.state.itemText)
    this.setState({
      itemText: ''
    })
  }



  onChange = (e) => {
    this.setState({
      itemText: e.target.value
    })
  }



  render() {

    return (
      <div>
        <TodoList
          theListArr={this.state.theListArr}
          toggleCompleted={this.toggleCompleted}
        />
        <Form
          itemText={this.state.itemText}
          filterCompleted={this.filterCompleted}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          theListArr={this.state.theListArr}
        />
      </div>
    )
  }
}
