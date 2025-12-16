import React, { useState } from 'react'
import Header from '../component/Header'
import { FaRegCalendarDays } from 'react-icons/fa6'
import { TiWorld } from 'react-icons/ti'
import { FaCalendarAlt } from 'react-icons/fa'
import { CiClock1 } from 'react-icons/ci'
import Footer from '../component/Footer'
import { NavLink } from 'react-router-dom'
import BookingCalendars from './BookingCalendars'
import ConsultantDetails from './ConsultantDetails'
import { toast } from 'react-toastify'


type TimeSlot = {
  bookingId: string;
  date: string;
  startTime: string;
  endTime: string;
  interval: string;
  currency: string;
  price: number;
  bookingStatus: string;
  bookingDescription : string;
  maxDayBeforeBooking : string;
  maxTimeBeforeBooking : string;
};

function Consultant() {

  const [schedule, setSchedule] = useState<boolean>(false);
  const [bookTime, SetBookTime] = useState<TimeSlot[]>([]);
   const [bookingDescription, setBookingDescription] = useState<string>('');
    const [interval, setInterval] = useState<string>('');

  const scheduleFunction = () => {
    setSchedule(!schedule)
  }
const errorFunction = () => {
  toast.error("Select Time");
}
  return (
    <div className='consultant-con-wrapper pageNav'>
      <Header/>
      <div className="consultant-con">
 {
                    schedule ? (
                       <ConsultantDetails bookTime={bookTime} scheduleFunction={scheduleFunction}/>
                    ) : (
          <div className="consultant">

              <div className="consultant-detail">
                  <div className="consultant-icon"><FaCalendarAlt /></div>

                  <p className='schedule-name'>Book a</p>

                  <h2 className='consultant-name'>Consultation</h2>

                  <div className="clock flex-center"><CiClock1 /> <h2>{interval}</h2></div>
                  
                  <div className="consultant-bod">
                        {bookingDescription}
                    </div>
              </div>

                <div className="consultant-calendar">
                 
                       <BookingCalendars bookTime={bookTime} SetBookTime={SetBookTime} setBookingDescription={setBookingDescription} setInterval={setInterval}/>
                 
                  <div className="nextBtn">
                    {
                      bookTime.length > 0 ? (
                          <div className="nextBook"  onClick={scheduleFunction}>
                          next
                        </div>
                      ) : (
                          <div className="nextBook nextEmpty"  onClick={errorFunction}>
                          next
                        </div>
                      )
                    }
                  </div>


                </div>


            </div>
                    )}
      </div>
      <Footer />
    </div>
  )
}

export default Consultant