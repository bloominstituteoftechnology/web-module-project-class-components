import React, {useEffect, useState} from 'react';
import PageUser from '../user/PageUser.js';
import PageAdmin from '../admin/PageAdmin.js';
import axios from 'axios';

// ==============================================

const PageHome = () => {

  // -------------------------------------------

  const [apnts, setApnts]                = useState([]);
  const [available_tbs, setAvailableTBs] = useState([]);

  // -------------------------------------------

  useEffect(() => {

    axios.get('http://localhost:4000/apnts')
      .then(res => {
        console.log('resp.data: ', res.data);
        setApnts(res.data);

        const compute_available_timeblocks = (() => {

          // -Each doc in apnts collection has following properties:
          //    --start-time: int32 in range:  8   9   10  11  12  1   2   3   4 
          //    --duration:   int32 in range  [1,3]
          //    --time-idx:   int32 in range:  0   1   2   3   4   5   6   7   8
          // 
          // -Example available_time_blocks:
          //                   [>>>)               [>>>>>>>)
          //    [8-9):        [1   0   0   0   0   0   0   0   0]
          //    [1-3):        [0   0   0   0   0   1   1   0   0]


          const available_tbs = [true,true,true,true,  true,true,true,true, true];

          res.data.forEach((apnt) => {
            console.log('apnt.time_idx: ', apnt.time_idx);
            for (let dur = 0; dur < apnt.duration; ++dur) {
              available_tbs[apnt.time_idx + dur] = false;
            }
          });
          setAvailableTBs(available_tbs);
        })();

      })
      .catch(error => console.log('error: ', error));
  
  }, []);

  // ------------------------------------------

  return (
    <div>
      <PageUser                available_tbs={available_tbs}/>
      <PageAdmin apnts={apnts} available_tbs={available_tbs}/>
    </div>
  );
};

// ==============================================

export default PageHome;

// ==============================================