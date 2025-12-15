import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import mark  from '../../assets/images/mark.png'
import axios from 'axios';
import { toast } from 'react-toastify';
import imgProfile from '../../assets/images/commentImage.jpg'
import { userAuth } from '../context/AuthContext';
import ButtonPreloader from '../../component/ButtonPreloader';

 interface bioIntern{
  bioFunction : () => void;
 }

 const  BioData : React.FC<bioIntern> = ({bioFunction}) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [profileImage, setProfileImage] = useState<File | null>(null);
//     /auth/profile-image

      const {baseUrl, token, name, email, phoneNumber1, phoneNumber2, address1, address2, state, city, postalCode, image, setImage} = userAuth();
    
       const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) {
              toast.error("No image selected");
              return;
          }
  
          const image = new Image();
          const objectUrl = URL.createObjectURL(file);
          image.src = objectUrl;
  
          image.onload = () => {
            //   if (image.width > 1080 || image.height > 1080) {
            //   toast.error(`Image "${file.name}" exceeds 1500x1500`);
            //   URL.revokeObjectURL(objectUrl);
            //   return;
            //   }
              setProfileImage(file); 
              handleProduct(file);
              URL.revokeObjectURL(objectUrl);
          };
  
          image.onerror = () => {
              toast.error("Failed to load image");
              URL.revokeObjectURL(objectUrl);
          };
          };
    
      

  const handleProduct =  async(profileImage : File) => {
   
      setLoading(true);
       if (!profileImage) {
          toast.error("No profile image");
          setLoading(false);
          return;
      }
          const formdata = new FormData();
            formdata.append("profileImg", profileImage);
          const myHeaders = new Headers();
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: formdata,
              redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/auth/profile-image`, requestOptions);
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();    
              setProfileImage(null);
              setImage(result.data);
              toast.success(result.message); 
               setLoading(false);       
          } catch (error) {
                        setLoading(false);
                        if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                        toast.error(error.message);
                        } else {
                        toast.error('An unknown error occurred.');
                        }
              setLoading(false); 
          }
        
    }
  
  return (
    <div>
       
                <div className="user-profile-main flex justification-between">

                    <div className="profile-image-con">
                        <div className="profile-image-form">
                            <div className="profile-image">
                              {
                                    image ? (
                                          <img src={image} alt="" />
                                    ) : (
                                          <img src={imgProfile} alt="" />
                                    )
                              }
                            </div>

                            <div className="profile-btn-flex">
                              {
                                    loading ? (
                                          <ButtonPreloader/>
                                    ) : (
                                          <>
                                          <label htmlFor="file-input" className="profile-btn">Upload Picture</label>
                                          <input id="file-input" type="file" onChange={handleFileChange} style={{display : "none"}}/>
                                           </>
                                    )
                              }
                             
                            </div>
                        </div>
                    </div>

                    {/* <div className="previewImage">
                              {profileImage && (
                              <img
                              src={URL.createObjectURL(profileImage)}
                              alt="Preview"
                              style={{ width: '150px', height: 'auto', marginTop: '10px' }}
                              />
                              )}
                      </div> */}

                <div className="profile-form form-con">
                    <div className="form-title">Basic Info</div>

                     <div className="profileImageCon flex-center gap-10">
                          <div className="profileImage">
                              {
                                    image ? (
                                          <img src={image} alt="" />
                                    ) : (
                                          <img src={imgProfile} alt="" />
                                    )
                              }
                              </div>
                          <div className="profileName">
                            <div className="name flex-center gap-5">
                              <p>{name}</p>
                            </div>
                            <div className="email">{email}</div>
                          </div>
                     </div>
                        
                      <div className="profile-section">

                          <div className="profile flex-center justification-between">
                                <div className="profile-first">phone1</div>
                                <div className="profile-second">{phoneNumber1}</div>
                          </div>
                          <div className="profile flex-center justification-between">
                                <div className="profile-first">phone2</div>
                                <div className="profile-second">{phoneNumber2}</div>
                          </div>
                          <div className="profile flex-center justification-between">
                                <div className="profile-first">address1</div>
                                <div className="profile-second">{address1}</div>
                          </div>
                          <div className="profile flex-center justification-between">
                                <div className="profile-first">address2</div>
                                <div className="profile-second">{address2}</div>
                          </div>
                          <div className="profile flex-center justification-between">
                                <div className="profile-first">state</div>
                                <div className="profile-second">{state}</div>
                          </div>
                     
                          <div className="profile flex-center justification-between">
                                <div className="profile-first">city</div>
                                <div className="profile-second">{city}</div>
                          </div>

                          <div className="profile flex-center justification-between">
                                <div className="profile-first">postal code</div>
                                <div className="profile-second">{postalCode}</div>
                          </div>
                     
                     </div>

                    <div className="profileEditBtn" onClick={bioFunction}>Edit profile</div>

                  </div>

                  

                </div>
               
    </div>
  )
}

export default BioData