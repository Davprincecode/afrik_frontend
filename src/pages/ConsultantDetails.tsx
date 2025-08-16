import React from 'react'
import Header from '../component/Header'
import { FaRegCalendarDays } from 'react-icons/fa6'
import { TiWorld } from 'react-icons/ti'
import { FaCalendarAlt } from 'react-icons/fa'
import { CiClock1 } from 'react-icons/ci'

function ConsultantDetails() {
  return (
    <div className='consultant-con-wrapper pageNav'>
      <Header/>


        <div className="consultant-con">
            <div className="consultant">
                <div className="consultant-detail">
                    <div className="consultant-icon"><FaCalendarAlt /></div>
                    <p className='schedule-name'>schedule a</p>
                    <h2 className='consultant-name'>consultation</h2>
                    <div className="flex"><CiClock1 /> <h2>30 min</h2></div>
                    <div className="consultant-bod">Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit. 
                        Distinctio maxime consequuntur
                         culpa possimus inventore itaque incidunt doloremque aliquid sequi id!
                         </div>
                </div>

                <div className="consultant-form">
                    <div className="consultant-header">confirm your booking</div>
                    <div className="consultant-details">
                        <div className="flex consultant-date">
                            <FaRegCalendarDays />
                            <p>wednessday, august 11 2025</p>
                        </div>
                        <div className="time">10:00pm</div>
                        <div className="flex consultant-time">
                            <TiWorld />
                            <p>time zone europe</p>
                        </div>
                    </div>

                    <div className="form-con">
                        <div className="formInput">
                    <label >name </label>
                    <input type="text" name="" placeholder='full name' />
                      </div>
                    <div className="formInput">
                    <label >note </label>
                     <textarea name="" id="" cols={30} rows={10}></textarea>
                      </div>
                    </div>

                    <div className="consultant-btn">
                        confirm
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default ConsultantDetails