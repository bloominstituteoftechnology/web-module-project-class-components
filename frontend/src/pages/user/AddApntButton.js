import React, {useState} from 'react';

// ==============================================

const AddApnt = ({setActiveSection}) => {

  // -------------------------------------------

  const onClick = () => {
    setActiveSection(2);
  };

  // -------------------------------------------

  return (
    <div>
      <button onClick={onClick}>Add Appointment</button>
    </div>
  );
};

// ==============================================

export default AddApnt;