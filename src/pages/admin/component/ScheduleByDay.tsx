import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

function ScheduleByDay() {
  return (
    <div className='scheduled-container'>
        <div className="admin-prod-title">Calendar</div>
        <div className="scheduled-wrapper">

            <div className="scheduled-header flex-center justification-between">
                <div className="scheduled-date">
                    <p>Sun</p>
                    <h2>32</h2>
                </div>
                <div className="scheduled-cancelled flex-center">
                       <p>cancelled all for today</p>
                       <MdDelete className='delete'/>
                </div>
                
            </div>
             <div className="scheduled-body">
                <div className="gmt">gmt+01</div>
                <div className="scheduled-date-time">

                    <div className="scheduled-booked-con">
                      <div className="scheduled-booked-details-wrap flex">
                        <p>1 am</p>
                        <div className="schedule-border">
                            <div className="scheduled-booked-details flex-center justification-between">
                                <p>ayo olubaji</p>
                                <p>6:35 mins pm left</p>
                                <p><IoCheckmarkCircle /></p>
                                <p><MdDelete className='delete'/></p>
                            </div>
                            </div>
                        </div>
                    </div>

                <div className="scheduled-booked-con">
                         <div className="scheduled-booked-details-wrap flex">
                        <p>1 am</p>
                        <div className="schedule-border">
                            <div className="scheduled-booked-details-color flex-center justification-between">
                                <p>ayo olubaji</p>
                                <p>6:35 mins pm left</p>
                                <p><IoCheckmarkCircle /></p>
                                <p><MdDelete className='delete'/></p>
                            </div>
                            </div>
                        </div>
                </div>

                <div className="scheduled-booked-con">
                         <div className="scheduled-booked-details-wrap flex">
                        <p>1 am</p>
                        <div className="schedule-border empty">
                            {/* <div className="scheduled-booked-details-color flex-center justification-between">
                                <p>ayo olubaji</p>
                                <p>6:35 mins pm left</p>
                                <p><IoCheckmarkCircle /></p>
                                <p><MdDelete className='delete'/></p>
                            </div> */}
                            </div>
                        </div>
                </div>

                </div>
             </div>
        </div>
        
    </div>
  )
}

export default ScheduleByDay