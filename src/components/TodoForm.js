import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onClearButtonClick = this.onClearButtonClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.state = {input:''};
  }

  onInputChange(event){
    this.setState({input:event.target.value});
  }
  onAddButtonClick(){
    this.props.addItem(this.state.input);
    this.setState({input:""});
  }
  onClearButtonClick(){
    this.props.clearDoneItems();
  }
  onKeyUp(event){
    if(event.key==="Enter") this.onAddButtonClick(event);
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='...todo' onChange={this.onInputChange} onKeyUp={this.onKeyUp} value={this.state.input}/>
        <button onClick={this.onAddButtonClick}>Add Todo</button>
        <button onClick={this.onClearButtonClick}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
