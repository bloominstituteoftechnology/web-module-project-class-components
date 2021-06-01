import React, {useState, useEffect} from 'react';
import axios from 'axios';

// ==============================================

const Todo = (props) => {

  // --------------------------------------------
  const empty_array = Array(8).fill(0);

  const [todos,           setTodos]                     = useState([]);
  const [form_val,        setFormVal]                   = useState([]);
  const [time_blocks,     setTimeBlocks]                = useState(empty_array);
  const [apnts,           setApnts]                     = useState([]);
  const [available_time_blocks, setAvailableTimeBlocks] = useState([]);

  // --------------------------------------------

  useEffect(() => {

    // -Store each document in apnts collection with the following properties:
    //    --start-time: [8   9   10  11  12  1   2   3   4   5)
    //    --duration:
    //    --time-idx:    0   1   2   3   4   5   6   7   8
    //    TOY:           [>>>)               [>>>>>>>)
    //    [8-9):        [1   0   0   0   0   0   0   0   0]
    //    [1-3):        [0   0   0   0   0   1   1   0   0]

    // Step 1: Page loads and grabs all scheduled apts from db
    axios.get('http://localhost:4000/apnts')
      .then(res => {
        console.log('resp.data: ', res.data);
        setApnts(res.data);

        // - - - - - - - - - - - - - - - - - - - 

        // Step 2: Determine available apointments and list those to the screen
        //  -Toy: [8-9) and [1-3) booked
        // setTimeBlocks();

        // Remove from available time_blocks
        // setAvailableTimeBlocks();
        // apnts[0].time_idx
        const available_tbs = [true,true,true,true,true,true,true,true,];

        res.data.forEach((apnt) => {
          console.log('apnt.time_idx: ', apnt.time_idx);
          for (let dur = 0; dur < apnt.duration; ++dur) {
            available_tbs[apnt.time_idx + dur] = false;
          }
        });
        setAvailableTimeBlocks(available_tbs);

        console.log('available time blocks: ', available_tbs);

        // - - - - - - - - - - - - - - - - - - - 

        // Step 3: User selects apnt

        // - - - - - - - - - - - - - - - - - - - 

      })
      .catch(error => console.log('error: ', error));

  }, []);

  // --------------------------------------------

  return (
    <div>
      
      <h1>x: {props.x}</h1>

      <form onSubmit={e => {
        e.preventDefault();
        setTodos([...todos, {appointment_type: form_val}]);
        setFormVal('');
      }}>
        <input type="text" value={props.x}  onChange={props.updateStateMessage} />
        <input type="text" value={form_val} onChange={e => {
          setFormVal(e.target.value);
        }} />
        <button type="submit">
          Add Appointment
        </button>
      </form>

      {/* {todos.map((todo, i) => <p key={i}>{todo}</p>)} */}

      {available_time_blocks.map((tb, i) => {
        console.log('i: ', i, ', tb: ', tb);
      
        if (tb) {
          return <div key={i} style={{height: '100px', width: '100px', background: 'deepskyblue', marginBottom: '10px'}} onClick={() => {
            console.log('i clicked: ', i);
          }}></div>;
        } else {
          return <div key={i} style={{height: '100px', width: '100px', background: 'red', marginBottom: '10px'}} onClick={() => {
            console.log('(unavailable) i clicked: ', i);
          }}></div>;
        }
          
      
      })}
      
      <h2>Welcome to your Todo App!</h2>
    </div>
  );
}

export default Todo;
