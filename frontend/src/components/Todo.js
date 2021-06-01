import React, {useState, useEffect} from 'react';


// ==============================================

const Todo = (props) => {

  // --------------------------------------------

  const [todos,         setTodos]        = useState([]);
  const [form_val,      setFormVal]      = useState([]);
  const [form1_visible, setForm1Visible] = useState(false);
  const [form2_visible, setForm2Visible] = useState(false);
  const [apnts,         setApnts]        = useState([]);

  // --------------------------------------------

  return (
    <div>
      
      <div style={{display: 'flex'}}>

        <div style={{border: 'dashed green 5px'}}>
          <h2>User Page</h2>
        
          <button onClick={() => setForm1Visible(true)}>Add Appointment</button>

          <form className={form1_visible ? "visibility-visible" : "visibility-hidden"} onSubmit={e => {
            e.preventDefault();
            setTodos([...todos, {appointment_type: form_val}]);
            setFormVal('0');
          }}>

            <label>
              <select value={form_val} onChange={(e) => {
                console.log('changed dropdown');
                setFormVal(e.target.value);
              }}>
                <option value="0">Select Apnt Type</option>
                <option value="1">Apnt Type 1</option>
                <option value="2">Apnt Type 2</option>
              </select>
            </label>


            <button type="submit">
              Add Appointment
            </button>


          </form>
        </div>
        <div syle={{border: 'dashed green 5px'}}>
          <h2>Admin Page</h2>
        </div>
      </div>


      


    </div>
  );
}

export default Todo;