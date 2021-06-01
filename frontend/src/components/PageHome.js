import React, {useEffect, useState} from 'react';
import PageUser from './PageUser.js';
import PageAdmin from './PageAdmin.js';
import axios from 'axios';

// ==============================================

const PageHome = () => {

  // -------------------------------------------

  // Step 1: Grab all appointments from db
  // Step 2: Place in state
  // Step 3: Send state down to User and Admin

  // -------------------------------------------

  const [apnts, setApnts]                        = useState([]);
  const [available_tbs, setAvailableTBs] = useState([]);

  // -------------------------------------------

  useEffect(() => {

    axios.get('http://localhost:4000/apnts')
      .then(res => {
        console.log('resp.data: ', res.data);
        setApnts(res.data);

        const compute_available_timeblocks = (() => {
          const available_tbs = [true,true,true,true,true,true,true,true,];

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
      <PageUser  apnts={apnts} available_tbs={available_tbs}/>
      <PageAdmin apnts={apnts} available_tbs={available_tbs}/>
    </div>
  );
};

export default PageHome;