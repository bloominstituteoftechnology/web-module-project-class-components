import React, {useState, useEffect} from 'react';

// ==============================================

const Apnts = ({apnts}) => {

  // --------------------------------------------

  const [currently_displayed_apnt, setCurrentlyDisplayedApnt] = useState({});

  // --------------------------------------------

  // --------------------------------------------

  return (
    <div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', height: '75px', width: '100%'}}>
        {apnts.map((apnt, idx) => {
          return (
            <div style={{display: 'grid', placeItems: 'center', background: 'red', gridColumnStart: `${apnt.time_idx + 1}`, gridColumnEnd: `${apnt.time_idx + 1 + apnt.duration}`, gridRowStart: '1', gridRowEnd: '2'}} onClick={() => {
              
              console.log('clicked apnt: ', idx);
              console.log('apnt: ', apnt);
              
              setCurrentlyDisplayedApnt({ ...currently_displayed_apnt,
                hour: apnt.hour,
                duration: apnt.duration,
                end_time: apnt.start_time + apnt.duration,
              });
            }}>apnt-{idx+1}</div>
          );
        })}
      </div>

    </div>
  );
};

// ==============================================

export default Apnts;