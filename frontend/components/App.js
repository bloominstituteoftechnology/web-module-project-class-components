import React from 'react'
import Form from './Form';
import TodoList from './TodoList';
import axios from 'axios';

const initialState = {
  toDos: []
};
export default class App extends React.Component {
  
  state = initialState;

  componentDidMount(){
    axios.get('http://localhost:9000/api/todos')
    .then(resp => {
      console.log('resp: ', resp);
      this.setState({...this.state, 
        toDos: resp.data.data
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  clearFinished = () => {
    const filtered = this.state.toDos.filter(item => {
      return !item.completed;
    })
    
    this.setState({...this.state, toDos: filtered})
  }
  
  addTodo = (task) => {
    
    const newTask = {
      name: task,
      completed: false
    }

    console.log('newTask: ', newTask);
    
    axios.post('http://localhost:9000/api/todos', newTask)
    .then(resp => {
      console.log('addTodo resp: ', resp)
      const taskToAdd = {...resp.data.data};
      this.setState({ ...this.state,
        toDos: [...this.state.toDos, taskToAdd]
      })
    })
    .catch(error => {
      console.error(error);
    })
    
    //Old code from Monday
    // const newTask = {
    //   id: Date.now(),
    //   name: task,
    //   completed: false
    // }



    // this.setState({...this.state, toDos: [...this.state.toDos, newTask]})
  }

  handleToggle = (task) => {
    const id = task.id;

    // console.log('here ittttt is first one: ', task)

    axios.patch(`http://localhost:9000/api/todos/${id}`)
    .then(resp => {
      // console.log('here ittttt is: ', resp)

      const newStateArray = this.state.toDos.map(item => {
        if(item.id === id){
          console.log('adding ...resp.data.data: ', resp.data.data)
          return resp.data.data
        }else{
          return item
        }
      })

      console.log('newStateArray: ', newStateArray);

      this.setState({...this.state,
        toDos: [...newStateArray]
      })
    })
    .catch(error => {
      console.log(error);
    })
    
    
    
    //This is the old code from monday.
    // const filtered = this.state.toDos.map(item => {
    //   if(item.id === task.id){
    //     return {...item, completed: !item.completed};
    //   }else{
    //     return item;
    //   }
    // })
    // this.setState({...this.state, toDos: filtered})
  }//END OF handleToggle

  render() {
    return (
      <div>
        <TodoList toDos={this.state.toDos} handleToggle={this.handleToggle}/>
        <Form addTodo={this.addTodo} clearFinished={this.clearFinished}/>
      </div>
    )
  }
}
