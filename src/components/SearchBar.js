import React, { Component } from 'react';

class SearchBar extends Component {

    change = (e) => {
        this.props.handleChange(e.target.value)
    }

    search = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.props.searchValue)
    }

    render (){
        return(
            <div classname='searchbar'>
                <form>
                    <input onChange={this.change} name='search' value={this.props.searchValue} />
                    <button onClick={this.search}>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar