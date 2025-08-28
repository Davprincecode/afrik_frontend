import React, { useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import envelop from '../../assets/images/envelop.png'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaFileArrowUp } from 'react-icons/fa6';

function Hero() {
    const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
   const handleFileChange = (event: { target: { files: any } }) => {
    console.log(event.target.files);
  };
  return (
    <div>
        <h2>website hero slidder images,captions & call to actions</h2>

    <div className="admin-hero-wrap">

            <div className="admin-hero-con">
                <div className="admin-hero-header flex-center justification-between">
                    <div className="radio-group">
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isActive} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="hero-edit-del flex-center gap-10">
                        <FiEdit3 className='edit'/>
                        <RiDeleteBin6Line className='delete'/>
                    </div>
                </div>
                <div className="admin-hero-img">
                    <label htmlFor="file-input"><FaFileArrowUp /></label>
                    <input id="file-input" type="file" onChange={handleFileChange} />
                    <p>Drop your image here,</p> 
                    <p>or browse</p>
                    <p className='size'>1440 x 802 px</p>  
                </div>

                <div className="admin-hero-form">
                   <div className="admin-input">
                    <input type="text" placeholder="Headline Text" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Sub Headline" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Button Text" />
                   </div>
                   <div className="admin-input">
                    <button>save</button>
                   </div>
                </div>

            </div>

            <div className="admin-hero-con">
                <div className="admin-hero-header flex-center justification-between">
                    <div className="radio-group">
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isActive} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="hero-edit-del flex-center gap-10">
                        <FiEdit3 className='edit'/>
                        <RiDeleteBin6Line className='delete'/>
                    </div>
                </div>
                <div className="admin-hero-img">
                    <label htmlFor="file-input"><FaFileArrowUp /></label>
                    <input id="file-input" type="file" onChange={handleFileChange} />
                    <p>Drop your image here,</p> 
                    <p>or browse</p>
                    <p className='size'>1440 x 802 px</p>  
                </div>

                <div className="admin-hero-form">
                   <div className="admin-input">
                    <input type="text" placeholder="Headline Text" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Sub Headline" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Button Text" />
                   </div>
                   <div className="admin-input">
                    <button>save</button>
                   </div>
                </div>

            </div>

            <div className="admin-hero-con">
                <div className="admin-hero-header flex-center justification-between">
                    <div className="radio-group">
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isActive} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="hero-edit-del flex-center gap-10">
                        <FiEdit3 className='edit'/>
                        <RiDeleteBin6Line className='delete'/>
                    </div>
                </div>
                <div className="admin-hero-img">
                    <label htmlFor="file-input"><FaFileArrowUp /></label>
                    <input id="file-input" type="file" onChange={handleFileChange} />
                    <p>Drop your image here,</p> 
                    <p>or browse</p>
                    <p className='size'>1440 x 802 px</p>  
                </div>

                <div className="admin-hero-form">
                   <div className="admin-input">
                    <input type="text" placeholder="Headline Text" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Sub Headline" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Button Text" />
                   </div>
                   <div className="admin-input">
                    <button>save</button>
                   </div>
                </div>

            </div>

            <div className="admin-hero-con">
                <div className="admin-hero-header flex-center justification-between">
                    <div className="radio-group">
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isActive} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="hero-edit-del flex-center gap-10">
                        <FiEdit3 className='edit'/>
                        <RiDeleteBin6Line className='delete'/>
                    </div>
                </div>
                <div className="admin-hero-img">
                    <label htmlFor="file-input"><FaFileArrowUp /></label>
                    <input id="file-input" type="file" onChange={handleFileChange} />
                    <p>Drop your image here,</p> 
                    <p>or browse</p>
                    <p className='size'>1440 x 802 px</p>  
                </div>

                <div className="admin-hero-form">
                   <div className="admin-input">
                    <input type="text" placeholder="Headline Text" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Sub Headline" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Button Text" />
                   </div>
                   <div className="admin-input">
                    <button>save</button>
                   </div>
                </div>

            </div>

            <div className="admin-hero-con">
                <div className="admin-hero-header flex-center justification-between">
                    <div className="radio-group">
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isActive} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="hero-edit-del flex-center gap-10">
                        <FiEdit3 className='edit'/>
                        <RiDeleteBin6Line className='delete'/>
                    </div>
                </div>
                <div className="admin-hero-img">
                    <label htmlFor="file-input"><FaFileArrowUp /></label>
                    <input id="file-input" type="file" onChange={handleFileChange} />
                    <p>Drop your image here,</p> 
                    <p>or browse</p>
                    <p className='size'>1440 x 802 px</p>  
                </div>

                <div className="admin-hero-form">
                   <div className="admin-input">
                    <input type="text" placeholder="Headline Text" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Sub Headline" />
                   </div>
                   <div className="admin-input">
                    <input type="text" placeholder="Button Text" />
                   </div>
                   <div className="admin-input">
                    <button>save</button>
                   </div>
                </div>

            </div>


    </div>

    </div>
  )
}

export default Hero