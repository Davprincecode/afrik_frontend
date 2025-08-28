import React from 'react'
import { IoIosStar } from 'react-icons/io'
import { IoEyeOutline } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'

function Testimonial() {
  return (
    <div>
        <h2>add new testimonial</h2>

        <div className="admin-testimonial-form">

                    <div className="admin-input">
                    <label >Full Name</label>
                    <input type="text" placeholder="Enter Full Name" />
                   </div>
                   <div className="admin-input">
                    <label>Title/Position</label>
                    <input type="text" placeholder="L" />
                   </div>

                   <div className="admin-input">
                    <label >Testimonial</label>
                    <textarea  cols={30} rows={10} placeholder='Enter Testimonial'></textarea>
                   </div>

                   <div className="admin-input">
                    <label>Select Rating</label>
                     <div className="admin-star flex-center gap-5">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div> 
                   </div>

                   <div className="admin-input">
                    <button>apply & save</button>
                   </div>

                   <div className="mainGallery  flex-center">
                                           <div className="flex-center gap-10">
                                               <IoEyeOutline className='eye'/>
                                               <p>image1212....</p>
                                               <RiDeleteBin6Line className='delete'/>
                                           </div>
                                           <div className="flex-center gap-10">
                                               <IoEyeOutline className='eye'/>
                                               <p>image1212....</p>
                                               <RiDeleteBin6Line className='delete'/>
                                           </div>
                                           <div className="flex-center gap-10">
                                               <IoEyeOutline className='eye'/>
                                               <p>image1212....</p>
                                               <RiDeleteBin6Line className='delete'/>
                                           </div>
                                           <div className="flex-center gap-10">
                                               <IoEyeOutline className='eye'/>
                                               <p>image1212....</p>
                                               <RiDeleteBin6Line className='delete'/>
                                           </div>
                                           <div className="flex-center gap-10">
                                               <IoEyeOutline className='eye'/>
                                               <p>image1212....</p>
                                               <RiDeleteBin6Line className='delete'/>
                                           </div>
                            </div>
        </div>


    </div>
  )
}

export default Testimonial