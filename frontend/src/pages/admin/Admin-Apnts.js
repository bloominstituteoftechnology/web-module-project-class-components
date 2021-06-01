import React from 'react';

// ==============================================

const Apnts = ({apnts}) => {

  // --------------------------------------------

  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {apnts && apnts.map((apnt) => (
          <div style={{border: 'solid black 1px'}}>
            <h2>Start Time: {apnt.start_time}</h2>
            <h2>Duration: {apnt.duration}</h2>
          </div>
        ))}
    </div>
  );
};

// ==============================================

export default Apnts;