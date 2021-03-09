import React from 'react'

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {
            searchText: '',
        }
    }

  render() {
      return(
          <div>
            <input 
              type='search'
              placeholder='Search for Task...'
            />
            <button>Search</button>

          </div>
      )
  }
}

export default SearchBar