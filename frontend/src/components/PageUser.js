import React from 'react';
import UserTimeBlocks from './TimeBlocks-User.js';

// ==============================================

const PageUser = ({apnts, available_tbs}) => {
  
  // -------------------------------------------

  // Step 1: Event listener for button to add appointment => Make section 2 visible
  // Step 2: Event listener for dropdown                  => Make section 3 visible
  // Step 3: Using state passed down, display available times to choose from in GUI
  
  // -------------------------------------------

  return (
    <div>
      <h1>User Page</h1>
      <div>Section 1: Button for Adding Appointment</div>
      <div>Section 2: Dropdown for Appointment Type</div>
      <div>
        Section 3: GUI for Available Appointments
        <UserTimeBlocks available_tbs={available_tbs} />
      </div>
    </div>
  );
};

export default PageUser;