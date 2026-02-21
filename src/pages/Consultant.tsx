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
import ButtonPreloader from '../component/ButtonPreloader'


type TimeSlot = {
  bookingTitle : string;
  bookingId: string;
  category : string;
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
  bookingPrices : priceIntern[]
};
interface priceIntern {
  id : string;
  bookingId : string;
  onlinePrice : number;
  physicalPrice : number;
  priceName : string;
}

function Consultant() {

  const [schedule, setSchedule] = useState<boolean>(false);
  const [bookTime, SetBookTime] = useState<TimeSlot[]>([]);
  const [bookingTitle, setBookingTitle] = useState<string>('');
  const [bookingDescription, setBookingDescription] = useState<string>('');
  const [interval, setInterval] = useState<string>('');
  const [categoryPrices, setCategoryPrices] = useState<priceIntern[]>([]);
  const [userCurrency, setUserCurrency] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const scheduleFunction = () => {
    setSchedule(!schedule)
  }
const errorFunction = () => {
  toast.error("Select Time");
}
  const [category, setCategory] = useState<string>("physical");
  const categoryFunction = (data : string) => {
     setCategory(data);
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
                  <div className="consultant-icon">
                    <FaCalendarAlt />
                     {
                    !loading && (
                    <div className="admin-header-list flex-center gap-10">
                        
                            <div
                            className={`header-list ${category === "physical" ? 'header-list-active' : ''}`}
                            onClick={() => categoryFunction("physical")}
                            >
                            physical
                            </div>
                            <div
                            className={`header-list ${category === "online" ? 'header-list-active' : ''}`}
                            onClick={() => categoryFunction("online")}
                            >
                            online
                            </div>
                    </div>
                    )}
                  </div>

                   {
                    loading ? (
                       <ButtonPreloader/>
                    ) : (
                      <div className='schedule-details-con'>

                      <div className="schedule-title">
                        <p className='schedule-name'>Scheduled</p>
                        <h2 className='consultant-name'>Consultations</h2>
                      </div>
                  
                  <p className='schedule-name schedule-names'>{bookingTitle}</p>

                  <div className="clock flex-center"><CiClock1 /> <h2>{interval}</h2></div>
                  
                  <div className="consultant-bod">
                        {bookingDescription}
                  </div>

                    {
                    categoryPrices.length > 0 && (
                    <div className="coursePrices">
                    <div className="master-date">prices/type : </div>
                    {
                    categoryPrices.map((prices, index)=>(
                    <div key={index}>

                    <div className="prices-flex flex consul-flex">
                    <p>{prices.priceName}</p>
                    <p>|</p>
                    <p className='type'>physical : <span>{userCurrency} {prices.physicalPrice.toLocaleString()}</span></p>
                    </div>

                    <div className="prices-flex flex">
                    <p>{prices.priceName}</p>
                    <p>|</p>
                    <p className='type'>online : <span>{userCurrency} {prices.onlinePrice.toLocaleString()}</span></p>
                    </div>
                    </div>
                    ))
                    }
                    </div>

                    ) }

                    </div>
                    )
                   }
              </div>

                <div className="consultant-calendar">
                 
                      <BookingCalendars loading={loading} setLoading={setLoading} bookTime={bookTime} SetBookTime={SetBookTime} setBookingDescription={setBookingDescription} setInterval={setInterval} setCategoryPrices={setCategoryPrices} setUserCurrency={setUserCurrency} setBookingTitle={setBookingTitle} category={category} />
                 
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