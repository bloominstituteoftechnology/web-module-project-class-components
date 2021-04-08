//takes in the Todo data array
//displays the task to the DOM

const Todo = props => {
    const {todo} = props;
    console.log(props , 'props from todo on App.js'); //allows you to see the props drilling down in console
    

    //recieves your Todos array. 
    

}

return (
    <div>
       {todo.name};
         
    </div>
)



export default Todo; 

//This isn't a class component