import React, {useState, useEffect} from 'react';


const Todo = () => {

    // --------------------------------------------

    const [todos,           setTodos]             = useState([]);
    const [form_val,        setFormVal]           = useState([]);
    const [time_blocks,     setTimeBlocks]        = useState(Array(8).fill(0));
    const [appointments,    setAppointments]      = useState([]);
    const [available_times, setAvailableTimes] = useState([]);

    // --------------------------------------------

    useEffect(() => {
      const av_times = [{start_time: 1, end_time: 2}, {start_time: 2, end_time: 3}];
      setAvailableTimes([...available_times, av_times]);
    }, []);

    // --------------------------------------------

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          setTodos([...todos, {appointment_type: form_val}]);
          setFormVal('');
        }}>
          <input type="text" value={form_val} onChange={e => setFormVal(e.target.value)} />
          <button type="submit">
            Add Appointment
          </button>
        </form>

        {todos.map((todo, i) => <p key={i}>{todo}</p>)}

        {time_blocks.map((tb, i) => (
          <div key={i} style={{height: '100px', width: '100px', background: 'deepskyblue', marginBottom: '10px'}} onClick={() => {
            console.log('i clicked: ', i);

          }}></div>
        ))}
        
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  
}

export default Todo;
