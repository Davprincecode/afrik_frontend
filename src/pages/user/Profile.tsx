import React, { useEffect, useState } from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import contactImg from '../assets/images/contactus.png'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaDiscord, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin,  FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import mark  from '../../assets/images/mark.png'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ProductComponent from '../../component/ProductComponent'


const Profile = () => {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone1: '',
    phone2: '',
    email: '',
    email2: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    postalCode: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://your-api.com/user-profile');
        const data = response.data;

        // Only update fields that exist in the response
        setFormData(prev => ({
          ...prev,
          fullName: data.fullName || '',
          phone1: data.phone1 || '',
          phone2: data.phone2 || '',
          email: data.email || '',
          email2: data.email2 || '',
          address1: data.address1 || '',
          address2: data.address2 || '',
          country: data.country || '',
          state: data.state || '',
          city: data.city || '',
          postalCode: data.postalCode || ''
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);




    const [authAction, setAuthAction] = useState<boolean>(true);

  return (

    <div className='user-profile pageNav'>
        <Header />

        <div className="user-profile-con">

              <div className="user-profile-header flex-center justification-between">
                  <p>profile</p>

                  <div className="profile-nav-con flex-center ">
                       <div className="profile-nav profile-active">bio data</div>
                       <div className="profile-nav">orders</div>
                       <div className="profile-nav">bookings</div>
                       <div className="profile-nav">course</div>
                  </div>

              </div>

           <div className="user-profile-main-con">
                
                <div className="user-profile-table">
                    <h1>Order List</h1>
                    <table>
                    <tr className='table-header'>
                        <th>order Id</th>
                        <th>no of items</th>
                        <th>amount</th>
                        <th>date</th>
                        <th>status</th>
                        <th>tracking</th>
                    </tr>
                    <tr>
                        <td>#cmd7hsh2</td>
                        <td>1</td>
                        <td>₦2222</td>
                        <td>feb 2 2022</td>
                        <td>
                           <div className="inprogress">in progress</div> 
                        </td>
                        <td> <div className="track">tracking details</div> </td>
                    </tr>
                    <tr>
                        <td>#cmd7hsh2</td>
                        <td>1</td>
                        <td>₦2222</td>
                        <td>feb 2 2022</td>
                        <td>
                           <div className="completed">complete</div> 
                        </td>
                        <td> <div className="track">tracking details</div> </td>
                    </tr>
                    <tr>
                        <td>#cmd7hsh2</td>
                        <td>1</td>
                        <td>₦2222</td>
                        <td>feb 2 2022</td>
                        <td>
                           <div className="approved">approved</div> 
                        </td>
                        <td> <div className="track">tracking details</div> </td>
                    </tr>
                    <tr>
                        <td>#cmd7hsh2</td>
                        <td>1</td>
                        <td>₦2222</td>
                        <td>feb 2 2022</td>
                        <td>
                           <div className="rejected">reject</div> 
                        </td>
                        <td> <div className="track">tracking details</div> </td>
                    </tr>
                    <tr>
                        <td>#cmd7hsh2</td>
                        <td>1</td>
                        <td>₦2222</td>
                        <td>feb 2 2022</td>
                        <td>
                           <div className="pendings">pending</div> 
                        </td>
                        <td>
                           <div className="track">tracking details</div> 
                        </td>
                    </tr>
                    </table>
                </div>

               {/* ==================== profile main */}
                <div className="user-profile-main flex justification-between">

                    <div className="profile-image-con">
                        <div className="profile-image-form">
                            <div className="profile-image">
                                <img src={mark} alt="" />
                            </div>
                            <div className="profile-btn-flex">
                                <div className="profile-btn">upload picture</div>
                            </div>
                        </div>
                    </div>

                <div className="profile-form form-con">
                    <div className="form-title">Basic Info</div>

                    <div className="formInput">
                    <label>name <span>(First name and Last name)</span></label>
                    <input type="text" name="fullName" placeholder="full name" value={formData.fullName} onChange={handleChange} />
                    </div>

                    <div className="formInputFlex">
                    <div className="formInputItem">
                        <label>phone no</label>
                        <input type="text" name="phone1" placeholder="Enter Phone No" value={formData.phone1} onChange={handleChange} />
                    </div>
                    <div className="formInputItem">
                        <label>phone no 2 (optional)</label>
                        <input type="text" name="phone2" placeholder="Enter Phone No" value={formData.phone2} onChange={handleChange} />
                    </div>
                    </div>

                    <div className="formInput">
                    <label>email</label>
                    <input type="text" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="formInput">
                    <label>address</label>
                    <input type="text" name="address1" placeholder="Enter Address" value={formData.address1} onChange={handleChange} />
                    </div>

                    <div className="formInput">
                    <label>address 2 (optional)</label>
                    <input type="text" name="address2" placeholder="Enter Address" value={formData.address2} onChange={handleChange} />
                    </div>

                    <div className="formInput">
                    <label>email</label>
                    <input type="text" name="email2" placeholder="Enter Email" value={formData.email2} onChange={handleChange} />
                    </div>

                    <div className="formInputFlex">
                    <div className="formInputItem">
                        <label>country</label>
                        <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Select Country</option>
                        {/* Add country options here */}
                        </select>
                    </div>
                    <div className="formInputItem">
                        <label>state</label>
                        <select name="state" value={formData.state} onChange={handleChange}>
                        <option value="">Select State</option>
                        {/* Add state options here */}
                        </select>
                    </div>
                    </div>

                    <div className="formInputFlex">
                    <div className="formInputItem">
                        <label>city/town</label>
                        <input type="text" name="city" placeholder="Enter City/Town" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="formInputItem">
                        <label>postal code</label>
                        <input type="text" name="postalCode" placeholder="Enter Postal Code" value={formData.postalCode} onChange={handleChange} />
                    </div>
                    </div>

                    <div className="formInputBtn">
                        save
                    </div>
                    
                </div>

                </div>
                {/* ==================== profile main end */}
            </div>
             
        </div>

    <ProductComponent  authAction={authAction} setAuthAction={setAuthAction}/>


    </div>

    )
}

export default Profile