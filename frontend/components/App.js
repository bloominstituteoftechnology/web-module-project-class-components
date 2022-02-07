import React from 'react'
import axios from 'axios';


const initialState = {
  toDos: [],
  error: ''
};
export default class App extends React.Component {
  
  state = initialState;

  componentDidMount() {
    axios.get('http://localhost:9000/api/todo')
    .then(resp => {
      console.log('resp: ', resp);
      this.setState({...this.state, toDos: resp.data.data});
    })
    .catch(error => {
      console.log('error: ',error.message);
      this.setState({...this.state, error: error.message})
    })
  }


  render() {
    return (
      <div>
        Todo App
      </div>
    )
  }
}
