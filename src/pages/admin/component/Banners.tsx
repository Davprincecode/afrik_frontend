import React, { useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { NavLink } from 'react-router-dom';
import ButtonPreloader from '../../../component/ButtonPreloader';

function Banners() {
  const handleFileChange = (event: { target: { files: any } }) => {
     console.log(event.target.files);
   };
 const [loading, setLoading] = useState<boolean>(false);
 
   return (
   <div>
                       <h2>Desktop Hero Banner</h2>
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

                                            {
                                            loading && (
                                                <div className="cart-prealoader">
                                                    <ButtonPreloader/>
                                                </div>
                        
                                            ) 
                                            }
                                            
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

export default Banners