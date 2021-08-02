import React, { Component } from 'react'
import Todo from './Todo'
import SearchBar from './SearchBar'

class TodoList extends Component {

    render(){
        return (
            <div>
                <SearchBar handleSearch={this.props.handleSearch} handleChange={this.props.handleChange} searchValue={this.props.searchValue} />
                <div className='list'>
                    {this.props.display.map(task => <Todo task={task} key={task.id} handleComplete={this.props.handleComplete} />)}
                </div>
            </div>
        )
    }
}

export default TodoList