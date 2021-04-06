import React, {useState} from 'react';


export default function toDoForm(props) => {

    const TodoForm = (props) => {
        return (
          <div className = "toDos">
            <h2></h2>
            <p>
              {props.name} is a great name! Never change {props.name}.
            </p>
          </div>
        );
/////     

    return(
        <div>
            <h2>{props.task}</h2>
            <p>{props.id}</p>
            <p>Completed: {props.completed}</p>
        </div>
        );
    }
///////////// MY WORK ^^^^^^^^^^

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>
        {props.name} is a great name! Never change {props.name}.
      </p>
    </div>
  );
};

const AppFunc = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  };

  return (
    <div>
      <Person name={name} />
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;