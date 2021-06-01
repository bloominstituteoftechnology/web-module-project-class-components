import React from 'react';
import TimeBlocks from './TimeBlocks.js';
import Apnts from './Apnts.js';

// ==============================================

const PageUser = ({apnts, available_tbs}) => {

  // --------------------------------------------

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        Section 1: All Scheduled Appointments
        <Apnts apnts={apnts} />
      </div>
      <div>
        Section 2: GUI Displaying Timeline of Appointments
        <TimeBlocks available_tbs={available_tbs} />
      </div>
    </div>
  );
};

// ==============================================

export default PageUser;