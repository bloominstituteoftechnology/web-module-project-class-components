import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
const  data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  constructor() {
    super();
    this.state = {data:data};
  }

  crossItem = (itemId) => {
      this.setState({data:this.state.data.map(item => {
        if (item.id === itemId){
            return{
              ...item,
              completed: !item.completed
            }
                
        }
        return item;
      })
      
      });
  }


  handleAddItem = (itemName) => {
    const item = {
    task: itemName,
     id: new Date(),
     completed: false
    }
     const newData = [...this.state.data,item]
     this.setState({
       groceries: newData
     })
     console.log(newData);

   }

   deleteItem = () => { 
    const newData = this.state.data.filter(item => {

      return(!item.completed)
    })


    this.setState({data:newData});
  }



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.data} crossItem={this.crossItem}/>
        <TodoForm handleAddItem={this.handleAddItem} deleteItem={this.deleteItem}/> 
      </div>
    );
  }
}

export default App;
