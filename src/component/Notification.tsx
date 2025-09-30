import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'


interface notifyIntern {
  notifications : boolean,
  setNotifications :  React.Dispatch<React.SetStateAction<boolean>>
}

const Notification : React.FC<notifyIntern> = ({notifications, setNotifications}) => {
  return (
    <div   className={`notification-con ${notifications ? 'open' : ''}`} >

      <div className="notification-shaddow" onClick={() => setNotifications(!notifications)}></div>

        <div className="notification-body">

             <div className="notification-flex">
              <div className="notification-cancel" onClick={() => setNotifications(!notifications)}>
                      <RxCross2 />
                </div>
             </div>

             <div className="notification-header">
                <div className="notification-header-title"><h1>notifications</h1></div>
                <div className="notification-count flex-center gap-5">
                    <div className="coutn">3</div>
                    <p>NEW</p>
                </div>
             </div>

             <div className="notification-wrapper">

                <div className="notification-container">
                      <div className="notification-bell">
                        <IoIosNotificationsOutline />
                      </div>
                      <div className="notification-content">
                        <div className="notification-label">New Blog Post <span>10 min ago</span></div>
                         <div className="notification-title"><h2>blog post title</h2></div>
                         <div className="notification-details">Lorem Ipsum is simply dummy text of the printing and typesetting indu ...</div>
                         <div className="notification-more"><NavLink to="#">view</NavLink></div>
                      </div>
                      <div className="notification-cancel">
                        <RxCross2 />
                      </div>
                </div>

                <div className="notification-container">
                      <div className="notification-bell">
                        <IoIosNotificationsOutline />
                      </div>
                      <div className="notification-content">
                        <div className="notification-label">New Blog Post <span>10 min ago</span></div>
                         <div className="notification-title"><h2>blog post title</h2></div>
                         <div className="notification-details">Lorem Ipsum is simply dummy text of the printing and typesetting indu ...</div>
                         <div className="notification-more"><NavLink to="#">view</NavLink></div>
                      </div>
                      <div className="notification-cancel">
                        <RxCross2 />
                      </div>
                </div>


                <div className="notification-container notification-inactive">
                      <div className="notification-bell">
                        <IoIosNotificationsOutline />
                      </div>
                      <div className="notification-content">
                        <div className="notification-label">New Blog Post <span>10 min ago</span></div>
                         <div className="notification-title"><h2>blog post title</h2></div>
                         <div className="notification-details">Lorem Ipsum is simply dummy text of the printing and typesetting indu ...</div>
                         <div className="notification-more"><NavLink to="#">view</NavLink></div>
                      </div>
                      <div className="notification-cancel">
                        <RxCross2 />
                      </div>
                </div>

             </div>

        </div>
    </div>
  )
}

export default Notification