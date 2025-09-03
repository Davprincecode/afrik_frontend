import React, { useEffect, useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import envelop from '../../../assets/images/envelop.png'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaFileArrowUp } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { userAuth } from '../../context/AuthContext';




interface galleryInterface{
id : number,
image :  string,
status :  string,
}

function Hero() {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  


  const {baseUrl, token} = userAuth();
      const[galleryImg, setGalleryImg] = useState<galleryInterface[]>([]);
      const [loading, setLoading] = useState<boolean>(false);
      const [image, setImage] = useState<File | null>(null);
      const [showPopup, setShowPopup] = useState(false);
      const [selectedId, setSelectedId] = useState<number | null>(null);
      const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
      
  
     useEffect(() => {
       getImage()
     }, [])
     
     const handleFileChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
            setLoading(true);
          const imagefile = event.target.files?.[0] || null;
  
  
                  if (!imagefile) {
                      console.error("No image selected");
                      return;
                  }
              const formdata = new FormData();
              formdata.append('image', imagefile);
  
              const myHeaders = new Headers();
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "POST",
                  headers: myHeaders,
                  body: formdata,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/gallery`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json();    
                    setGalleryImg(prev => [...prev, result.data]);
                   setLoading(false); 
                   toast.success("Data Upload Successfully");       
              } catch (error) {
                  setLoading(false); 
              }
    }
  
    const getImage = async () => {
            setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/gallery`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json();
                   setGalleryImg(result.data);
                   setLoading(false);
              } catch (error) {
                  setLoading(false); 
              }
    }
  
    const formatImagePath = (fullPath: string): string => {
          const keyword = "images/";
          const startIndex = fullPath.indexOf(keyword);
          if (startIndex === -1) return "Invalid path";
          const sliceStart = startIndex + keyword.length;
          const shortSegment = fullPath.slice(sliceStart, sliceStart + 15);
          return `${shortSegment}....`;
     };
  
  
   const openModal = (index: number) =>{
     setCurrentIndex(index); 
    } 
  
   const closeModal = () =>{
     setCurrentIndex(null); 
    } 
  
    const goPrev = () => {
      if (currentIndex !== null && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const goNext = () => {
      if (currentIndex !== null && currentIndex < 17) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
     const handleDeleteClick = (id: number) => {
      setSelectedId(id);
      setShowPopup(true);
    };
  
    const handleDeleteConfirm = async(id: number | string) => {
      console.log("Deleting item with ID:", id);
      // Call your delete API or logic here
  
  
  
       setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "DELETE",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/gallery/${id}`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
  
                  const result = await response.json();
  
                   setGalleryImg(prev => prev.filter(item => item.id !== id));
                  setShowPopup(false);
                  setSelectedId(null);
                  setLoading(false);
  
                  toast.error("delete successfully");
  
              } catch (error) {
                 setLoading(false);  
              }
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