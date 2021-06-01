import React from 'react';

// ==============================================

const TimeBlocks = ({available_tbs}) => {

  // --------------------------------------------
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
      {available_tbs.map((tb, i) => {
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
    </div>
  );
};

// ==============================================

export default TimeBlocks;