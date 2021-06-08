import React, {useState, useEffect} from 'react';
import axios from 'axios';

// ==============================================

import TimeBlocks from './TimeBlocks.js';
import Apnts from './Apnts.js';

// ==============================================

const PageUser = () => {

  // -------------------------------------------

  // Array of Objects:
  const [apnts_day_0, setApntsDay0]                = useState([]);
  const [apnts_day_1, setApntsDay1]                = useState([]);
  
  // Boolean Array:
  const [available_tbs_day_0, setAvailableTBsDay0] = useState([]);
  const [available_tbs_day_1, setAvailableTBsDay1] = useState([]);

  // -------------------------------------------

  useEffect(() => {

    axios.get('http://localhost:4000/apnts-admin')
      .then(res => {
        
        // - - - - - - - - - - - - - - - - - - - 

        const apnts = res.data;
        
        const filter_specific_day = (apnts, date_idx) => apnts.filter(apnt => apnt.date_idx == date_idx);
        const arr_of_objs_day_0 = filter_specific_day(apnts, 0);
        const arr_of_objs_day_1 = filter_specific_day(apnts, 1);
        setApntsDay0(arr_of_objs_day_0);
        setApntsDay1(arr_of_objs_day_1);

        // - - - - - - - - - - - - - - - - - - - 

        const arr_of_objs_to_boolean_arr = (arr_of_objs) => {
          const available_tbs = [true,true,true,true,  true,true,true,true, true];
          arr_of_objs.forEach((apnt) => {
            for (let dur = 0; dur < apnt.duration; ++dur) {
              available_tbs[apnt.time_idx + dur] = false;
            }
          });
          return available_tbs;
        };
        const boolean_arr_day_0 = arr_of_objs_to_boolean_arr(arr_of_objs_day_0);
        const boolean_arr_day_1 = arr_of_objs_to_boolean_arr(arr_of_objs_day_1);
        setAvailableTBsDay0(boolean_arr_day_0);
        setAvailableTBsDay1(boolean_arr_day_1);

        // - - - - - - - - - - - - - - - - - - - 
        
      })
      .catch(error => console.log('error: ', error));
  
  }, []);

  // --------------------------------------------

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        Day 0:
        <Apnts apnts={apnts_day_0} />
        
        Day 1:
        <Apnts apnts={apnts_day_1} />
      </div>
      <div>
        Day 0:
        <TimeBlocks available_tbs={available_tbs_day_0} />
        
        Day 1:
        <TimeBlocks available_tbs={available_tbs_day_1} />
      </div>
    </div>
  );
};

// ==============================================

export default PageUser;

// ==============================================