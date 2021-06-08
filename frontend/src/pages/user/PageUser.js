import React, {useState} from 'react';
import AddApnt from './AddApntButton.js';
import AvailableStartingTimes from './TimeBlocks-StartingTimes.js';
import ChosenTimeBlock from './TimeBlocks-Chosen.js';
import ApntTypeDropdown from './ApntTypeDropdown.js';
import CustomizedTimeline from './MUI-Timeline-Customized.js';

// ==============================================

const PageUser = ({available_tbs}) => {
  
  // -------------------------------------------

  // Step 1: Event listener for button to add appointment => Make section 2 visible
  // Step 2: Event listener for dropdown                  => Make section 3 visible
  //  -2.1: Set state variable apnt_type
  // Step 3: Using state passed down, display available times to choose from in GUI
  //  -3.1: From available timeblocks (passed down props) and duration (implied from apnt_type)
  //        determine the slots that are available for the user to choose from.

  const [active_section, setActiveSection]       = useState(1);
  const [apnt_date, setApntDate]                 = useState('');
  const [apnt_type, setApntType]                 = useState(0);
  const [apnt_stylist, setApntStylist]           = useState('all');
  const [chosen_timeblocks, setChosenTimeBlocks] = useState([]);
  
  // -------------------------------------------



  // -------------------------------------------

  return (
    <div>
      <h1>User Page</h1>

      <div className={active_section == 1 ? 'opaque' : 'translucent'}>
        <AddApnt setActiveSection={setActiveSection} setApntDate={setApntDate}/>
      </div>

      <div className={active_section == 2 ? 'opaque' : 'translucent'}>
        Section 2: Dropdown for Appointment Type
        <ApntTypeDropdown setApntType={setApntType} setApntStylist={setApntStylist} setActiveSection={setActiveSection}/>
        Apnt Type: {apnt_type}
      </div>
      
      <div className={active_section == 3 ? 'opaque' : 'translucent'}>

        <div>
          Available Starting Times (based on combo-pack of hours not-scheduled and duration of appointment type):
          <AvailableStartingTimes apnt_type={apnt_type} available_tbs={available_tbs} setChosenTimeBlocks={setChosenTimeBlocks}/>
        </div>

        <div>
          TODO 1: After user clicks a star time, then render a view showing user the day with only their appointment carved out
          <ChosenTimeBlock chosen_timeblocks={chosen_timeblocks}/>
        </div>

        <div>
          TODO 2: Create second Admin view displaying only blocks of scheduled appointment time-blocks (combine scheduled-timeblocks corresponding to same-appointment)
        </div>

      </div>
    
      <div>
        <CustomizedTimeline />
      </div>

    </div>
  );
};

// ==============================================

export default PageUser;