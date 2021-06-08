import React, {useState} from 'react';
import DatePicker from './MUI-calendar.js';

// ==============================================

const AddApnt = ({setActiveSection, setApntDate}) => {

  // -------------------------------------------

  const onClick = () => {
    setActiveSection(2);
  };

  // -------------------------------------------

  return (
    <div>
      <DatePicker setApntDate={setApntDate} />
      <button onClick={onClick}>Add Appointment</button>
    </div>
  );
};

// ==============================================

export default AddApnt;