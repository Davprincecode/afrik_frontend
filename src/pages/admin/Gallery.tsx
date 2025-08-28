import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

function Gallery() {
    
    const handleFileChange = (event: { target: { files: any } }) => {
    console.log(event.target.files);
  };


  return (
  <div>
                      <h2>website gallery images</h2>


                      <div className="uploadGallery">
                         <div className="uploadWrapper">
                            <label htmlFor="file-input">Add Files</label>
                            <input id="file-input" type="file" onChange={handleFileChange} />
                           <p>or drag and drop files</p> 
                         </div>

                          <div className="flex-center justification-between">
                             <div className="imgCounter">
                                50/100
                             </div>
                             <NavLink to="#" className='view'>view all</NavLink>
                          </div>
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
                        <div className="flex-center gap-10">
                            <IoEyeOutline className='eye'/>
                            <p>image1212....</p>
                            <RiDeleteBin6Line className='delete'/>
                        </div>
                       
                      </div>

                   </div>
  )
}

export default Gallery