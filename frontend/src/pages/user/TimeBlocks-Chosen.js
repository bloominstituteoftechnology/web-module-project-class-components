import React, {useState, useEffect} from 'react';

// ==============================================

const ChosenTimeBlock = ({chosen_timeblocks}) => {

  // --------------------------------------------

  const time_map = ['8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm'];

  // --------------------------------------------
  
  useEffect(() => {
    console.log('chosen timeblocks: ', chosen_timeblocks);
  }, [chosen_timeblocks]);

  // --------------------------------------------
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
      {chosen_timeblocks.map((tb, i) => {
        if (tb) {
          return <div key={i} style={{display: 'grid', placeItems: 'center', height: '100px', width: '100px', background: 'deepskyblue', marginBottom: '10px'}}>{time_map[i]}</div>;
        } else {
          return <div key={i} style={{height: '100px', width: '100px', background: 'red', marginBottom: '10px', opacity: '0.3'}}></div>;
        }
      })}
    </div>
  );
};

// ==============================================

export default ChosenTimeBlock;