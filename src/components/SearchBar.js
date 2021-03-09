import React from 'react'

const SearchBar = props =>{

function searchFunc(){
    let input = document.querySelector('#search').value;
    input = input.toLowerCase().trim();
    let allToDoS = document.querySelectorAll('.todo');

    for (let i=0;i<allToDoS.length;i++){
        console.log(allToDoS[i].textContent)
        if (allToDoS[i].innerText.toLowerCase().trim().includes(input)){
            allToDoS[i].style.display=''
        }
        else(
            allToDoS[i].style.display='none'
        )
    }
}

    return (
        <div className='searchDiv'>
            <input  id='search' type='text' placeholder='search for...' onKeyUp={searchFunc}/>
        </div>
    )
}

export default SearchBar;