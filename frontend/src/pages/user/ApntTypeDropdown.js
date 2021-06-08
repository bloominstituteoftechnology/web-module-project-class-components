import React, {useState} from 'react';

// ==============================================

const ApntTypeDropdown = ({setApntType, setApntStylist, setActiveSection}) => {
  
  // -------------------------------------------

  const [form_val_1, setFormVal1] = useState('');
  const [form_val_2, setFormVal2] = useState('');
  const [form_val_3, setFormVal3] = useState('');

  // -------------------------------------------

  const onSubmit = e => {
    e.preventDefault();

    // TODO: Make POST request with AUTH code in 
    //       payload to send to endpoint designated
    //       to checking the auth code.

    // TODO: Send dropdown value up one level
    //       and display the dropdown of
    //       available services.

    setApntType(form_val_1);
    setApntStylist(form_val_2);
    setActiveSection(3);
  };

  // -------------------------------------------

  return (
    <form onSubmit={onSubmit}>
      <label>
        Appointment Type: 
        <select value={form_val_1} onChange={e => {setFormVal1(e.target.value)}}>
          <option value="0">Choose Type</option>
          <option value="1">Type 1</option>
          <option value="2">Type 2</option>
          <option value="3">Type 3</option>
          <option value="4">Type 4</option>
          <option value="5">Type 5</option>
          <option value="6">Type 6</option>
          <option value="7">Type 7</option>
          <option value="8">Type 8</option>
          <option value="9">Type 9</option>
        </select>
      </label>
      
      <label>
        Hair Stylist:
        <select value={form_val_2} onChange={e => {setFormVal2(e.target.value)}}>
          <option value="0">All</option>
          <option value="1">Type 1</option>
          <option value="2">Type 2</option>
          <option value="3">Type 3</option>
        </select>
      </label>
      
      <button type="submit">Save Appointment Type</button>
    </form>
  );
};

// ==============================================

export default ApntTypeDropdown;