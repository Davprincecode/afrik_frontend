import React from 'react'
import { userAuth } from '../../context/AuthContext';
import AddSchedule from './AddSchedule';
import { LuPlus } from 'react-icons/lu';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import ScheduleByDay from './ScheduleByDay';
import SchedulebyMonth from './SchedulebyMonth';

function Schedule() {
     const {baseUrl, token} = userAuth();
  return (
    <div>
      <div className="scheduleHeader">

        <div className="created-con">
          <div className="create-schedule flex-center"><LuPlus /><p>create schedule</p></div>
          <div className="schedule-title flex-center"><MdKeyboardArrowLeft /><p className="schedule-date">august 2025</p><MdKeyboardArrowRight /></div>
          <div className="schedule-switch">
            <select name="" id="">
              <option value="">day</option>
              <option value="">week</option>
              <option value="">month</option>
            </select>
          </div>
         </div>
        
        <div className="header-form-input">
           <input type="text" placeholder="Search" />
          <CiSearch />
        </div>

      </div>
      
      {/* <AddSchedule/> */}
      <ScheduleByDay/>
      {/* <SchedulebyMonth/> */}
    </div>
  )
}

export default Schedule