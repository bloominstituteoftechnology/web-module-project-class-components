import React, {useState, useEffect} from 'react';
import axios from 'axios';

// ==============================================

const AvailableStartingTimes = ({available_tbs, apnt_type, setChosenTimeBlocks}) => {

  // --------------------------------------------

  const time_map = ['8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm'];

  // --------------------------------------------

  const [available_tbs_to_choose_from, setAvailableTBsToChooseFrom] = useState([]);

  // --------------------------------------------

  useEffect(() => {
    console.log('apnt_type: ', apnt_type, 'available_tbs: ', available_tbs);


    const calc_tbs_to_choose_from = () => {
      // -Each doc in apnts collection has following properties:
      //    --start-time: int32 in range:  8   9   10  11  12  1   2   3   4 
      //    --duration:   int32 in range  [1,3]
      //    --time-idx:   int32 in range:  0   1   2   3   4   5   6   7   8
      // 
      // -Example available_time_blocks:
      //                   [>>>)               [>>>>>>>)
      //   [8-9):         [1   0   0   0   0   0   0   0   0]
      //   [1-3):         [0   0   0   0   0   1   1   0   0]
      //   available_tbs: [1   0   0   0   0   1   1   0   0]
      // 
      // Apnt Type 2 (2-hr):
      //   Option 1       [0   1   1   0   0   0   0   0   0]
      //   Option 2       [0   0   0   1   1   0   0   0   0]
      //   Option 3       [0   0   1   1   0   0   0   0   0]
      //   Option 4       [0   0   0   0   0   0   0   1   1]
      //
      // Apnt Type 1 (1-hr):
      //   Option 1       [0   1   0   0   0   0   0   0   0]
      //   Option 2       [0   0   1   0   0   0   0   0   0]
      //   Option 3       [0   0   0   1   0   0   0   0   0]
      //   Option 4       [0   0   0   0   1   0   0   0   0]
      //   Option 5       [0   0   0   0   0   0   0   1   0]
      //   Option 6       [0   0   0   0   0   0   0   0   1]

      //   available_tbs: [1   0   0   0   0   1   1   0   0]
      //                  false              false false

      let y = [false,false,false,false,  false,false,false,false, false];
      const apnttype = Number(apnt_type);
      console.log('apnttype: ', apnttype);


      if (apnttype == 1) {

        // ------------------------------------
        // apnt_type=1 (1-hrs)

        //      if( x[0]==true )
        //      [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0: false
        if (available_tbs[0] === true) {
          y[0] = true;
        }

        //          if( x[1]==true )
        //          [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      true
        if (available_tbs[1] === true) {
          y[1] = true;
        }

        //              if( x[2]==true )
        //              [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y2:          true
        if (available_tbs[2] === true) {
          y[2] = true;
        }

        //                  if( x[3]==true )
        //                  [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y3:              true
        if (available_tbs[3] === true) {
          y[3] = true;
        }

        //                      if( x[4]==true )
        //                      [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y4:                  true
        if (available_tbs[4] === true) {
          y[4] = true;
        }

        //                          if( x[5]==true )
        //                          [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y5:                      false
        if (available_tbs[5] === true) {
          y[5] = true;
        }

        //                              if( x[6]==true )
        //                              [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y6:                          false
        if (available_tbs[6] === true) {
          y[6] = true;
        }

        //                                  if( x[7]==true )
        //                                  [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y7:                              true
        if (available_tbs[7] === true) {
          y[7] = true;
        }

        //                                      if( x[8]==true )
        //                                      [>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y7:                                  true
        if (available_tbs[8] === true) {
          y[8] = true;
        }
      
      } else if (apnttype == 2) {
        
        // ------------------------------------
        // apnt_type=2 (2-hrs)

        //      if( x[0]==true && x[1]==true )
        //      [>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true) {
          y[0] = true;
        }

        //          if( x[1]==true && x[2]==true )
        //          [>>>>>>)
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      true
        if (available_tbs[1] === true && available_tbs[2] === true) {
          y[1] = true;
        }

        //              if( x[2]==true && x[3]==true )
        //              [>>>>>>)
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y2:          true
        if (available_tbs[2] === true && available_tbs[3] === true) {
          y[2] = true;
        }

        //                  if( x[3]==true && x[4]==true )
        //                  [>>>>>>)
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y3:              true
        if (available_tbs[3] === true && available_tbs[4] === true) {
          y[3] = true;
        }

        //                     if( x[4]==true && x[5]==true )
        //                     [>>>>>>)
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y4:                  false
        if (available_tbs[4] === true && available_tbs[5] === true) {
          y[4] = true;
        }

        //                         if( x[5]==true && x[6]==true )
        //                         [>>>>>>)
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y5:                      false
        if (available_tbs[5] === true && available_tbs[6] === true) {
          y[5] = true;
        }

        //                             if( x[6]==true && x[7]==true )
        //                             [>>>>>>)
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y6:                          false
        if (available_tbs[6] === true && available_tbs[7] === true) {
          y[6] = true;
        }

        //                                 if( x[7]==true && x[8]==true )
        //                                 [>>>>>>)
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y7:                              true
        if (available_tbs[7] === true && available_tbs[8] === true) {
          y[7] = true;
        }

      } else if (apnttype == 3) {

        // ------------------------------------
        // apnt_type=3 (3-hrs)

        //      if( x[0]==true && x[1]==true && x[2]==true )
        //      [>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true && available_tbs[2] === true) {
          y[0] = true;
        }

        //          if( x[1]==true && x[2]==true && x[3]==true )
        //          [>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      true
        if (available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true) {
          y[1] = true;
        }

        //              if( x[2]==true && x[3]==true && x[4]==true )
        //              [>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y2:          true
        if (available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true) {
          y[2] = true;
        }

        //                  if( x[3]==true && x[4]==true && x[5]==true )
        //                  [>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y3:              false
        if (available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true) {
          y[3] = true;
        }

        //                      if( x[4]==true && x[5]==true && x[6]==true )
        //                      [>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y4:                  false
        if (available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true) {
          y[4] = true;
        }

        //                          if( x[5]==true && x[6]==true && x[7]==true )
        //                          [>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y5:                      false
        if (available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true) {
          y[5] = true;
        }

        //                              if( x[6]==true && x[7]==true && x[8]==true )
        //                              [>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y6:                          false
        if (available_tbs[6] === true && available_tbs[7] === true && available_tbs[8] === true) {
          y[6] = true;
        }

      } else if (apnttype == 4) {

        // ------------------------------------
        // apnt_type=4 (4-hrs)

        //      if( x[0]==true && x[1]==true && x[2]==true && x[3]==true )
        //      [>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true) {
          y[0] = true;
        }

        //          if( x[1]==true && x[2]==true && x[3]==true && x[4]==true )
        //          [>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      false
        if (available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true) {
          y[1] = true;
        }

        //              if( x[2]==true && x[3]==true && x[4]==true && x[5]==true )
        //              [>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y2:          false
        if (available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true) {
          y[2] = true;
        }

        //                  if( x[3]==true && x[4]==true && x[5]==true && x[6]==true )
        //                  [>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y3:              false
        if (available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true) {
          y[3] = true;
        }

        //                      if( x[4]==true && x[5]==true && x[6]==true && x[7]==true )
        //                      [>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y4:                  false
        if (available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true) {
          y[4] = true;
        }

        //                          if( x[5]==true && x[6]==true && x[7]==true && x[8]==true )
        //                          [>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y5:                      false
        if (available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true && available_tbs[8] === true) {
          y[5] = true;
        } 
      } else if (apnttype == 5) {

        // ------------------------------------
        // apnt_type=5 (5-hrs)

        //      if( x[0]==true && x[1]==true && x[2]==true && x[3]==true && x[4]==true )
        //      [>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true) {
          y[0] = true;
        }

        //          if( x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true )
        //          [>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      false
        if (available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true) {
          y[1] = true;
        }

        //              if( x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true )
        //              [>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y2:          true
        if (available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true) {
          y[2] = true;
        }

        //                  if( x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true )
        //                  [>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y3:              false
        if (available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true) {
          y[3] = true;
        }

        //                      if( x[4]==true && x[5]==true && x[6]==true && x[7]==true && x[8]==true )
        //                      [>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y4:                  false
        if (available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true && available_tbs[8] === true) {
          y[4] = true;
        }

      } else if (apnttype == 6) {

        // ------------------------------------
        // apnt_type=6 (6-hrs)

        //      if( x[0]==true && x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true )
        //      [>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true) {
          y[0] = true;
        }

        //          if( x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true )
        //          [>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      false
        if (available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true) {
          y[1] = true;
        }

        //              if( x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true )
        //              [>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y2:          false
        if (available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true) {
          y[2] = true;
        }

        //                  if( x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true && x[8]==true )
        //                  [>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y3:              false
        if (available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true && available_tbs[8] === true) {
          y[3] = true;
        }

      } else if (apnttype == 7) {

        // ------------------------------------
        // apnt_type=7 (7-hrs)

        //      if( x[0]==true && x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true )
        //      [>>>>>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true) {
          y[0] = true;
        }

        //          if( x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true )
        //          [>>>>>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      false
        if (available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true) {
          y[1] = true;
        }

        //              if( x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true && x[8]==true )
        //              [>>>>>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y2:          false
        if (available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true && available_tbs[8] === true) {
          y[2] = true;
        }

      } else if (apnttype == 8) {

        // ------------------------------------
        // apnt_type=8 (8-hrs)

        //      if( x[0]==true && x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true )
        //      [>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true) {
          y[0] = true;
        }

        //          if( x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true && x[8]==true )
        //          [>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y1:      false
        if (available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true && available_tbs[8] === true) {
          y[1] = true;
        }
      } else if (apnttype == 9) {

        // ------------------------------------
        // apnt_type=8 (8-hrs)

        //      if( x[0]==true && x[1]==true && x[2]==true && x[3]==true && x[4]==true && x[5]==true && x[6]==true && x[7]==true && x[8]==true )
        //      [>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) 
        // x:  [1   0   0   0   0   1   1   0   0  )
        // st:  8   9   10  11  12  1   2   3   4   5
        // i:   0   1   2   3   4   5   6   7   8
        // y0:  false
        if (available_tbs[0] === true && available_tbs[1] === true && available_tbs[2] === true && available_tbs[3] === true && available_tbs[4] === true && available_tbs[5] === true && available_tbs[6] === true && available_tbs[7] === true && available_tbs[8] === true) {
          y[0] = true;
        }

      }

      setAvailableTBsToChooseFrom(y);
    };
    calc_tbs_to_choose_from();

  }, [apnt_type]);

  // --------------------------------------------
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
      {available_tbs_to_choose_from.map((tb, i) => {
        if (tb) {
          return <div key={i} style={{display: 'grid', placeItems: 'center', height: '100px', width: '100px', background: 'deepskyblue', marginBottom: '10px'}} onClick={() => {
            

            const arr = [false,false,false,false,  false,false,false,false, false];
            for (let j = i; j < i + Number(apnt_type); ++j) {
              arr[j] = true;
            }

            setChosenTimeBlocks(arr);

            //              0  1  2   3   4   5   6   7   8
            const hr_map = [8, 9, 10, 11, 12, 13, 14, 15, 16];

            const idx2hr = idx => hr_map[idx];
            const hr2idx = hr  => hr_map.findIndex(elem => elem == hr);
            console.log('idx2hr(1): ', idx2hr(1));
            console.log('hr2idx(13): ', hr2idx(13));

            // Make request here to add this appointment to database
            axios.post('http://localhost:4000/apnts/add', {
              user_id:   5, // DUMMY: Store this in DB upon user adding new apnt, then retrieve address, name etc from indexing into this corresponding users collection
              duration:  Number(apnt_type),
              time_idx:  'test',
              apnt_type: 'test',
              day:       'tuesday',
              month:     6,
              date:      2,
              year:      2021,
              time:      '08:00:00',
              hour:      8,
              minute:    0,
              second:    0,
              time_zone: 'CDT',
            })
            .then((res) => {
              const insertedId = res.data;
              console.log('insertedId: ', insertedId);
            })
            .catch((err) => console.log('err: ', err));

          }}>{time_map[i]}</div>;
        } else {
          return <div key={i} style={{display: 'grid', placeItems: 'center', height: '100px', width: '100px', background: 'red', marginBottom: '10px', opacity: '0.3'}}>{time_map[i]}</div>;
        }
      })}
    </div>
  );
};

// ==============================================

export default AvailableStartingTimes;