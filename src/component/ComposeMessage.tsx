import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png';
import {toast } from 'react-toastify';
import {NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { userAuth } from '../pages/context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RxCross2, RxDividerVertical } from 'react-icons/rx';
import { IoIosStar, IoIosStarOutline, IoMdCheckmark } from 'react-icons/io';
import product3sub4 from '../assets/images/product3sub4.png';
import { MdArrowOutward, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { IoLocationOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiCircleQuestion } from 'react-icons/ci';
import ReactQuill from 'react-quill';

interface authComponentInterface {
    authAction : boolean,
    setAuthAction: React.Dispatch<React.SetStateAction<boolean>>;
}

const ComposeMessage : React.FC<authComponentInterface> = ({authAction, setAuthAction}) =>{
const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ align: [] }],
      ['image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'align',
    'image'
  ];


  const navigate = useNavigate();
  const {baseUrl} = userAuth();  
  const { pathname } = useLocation();
  
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
const currentStage = 'Shipped';
const stages = ['Pending', 'Order Completed', 'Shipped', 'Delivered'];
  return (
    <div className="track-con" style={{display : authAction ? "flex" : "none"}}>

      <div className="track-body">
         
         <div className="track-cancel-con flex-center justification-between">

             <div className="track-header flex-center gap-10">
                 <h1>New Message</h1>
             </div>

            <div className="track-cancel">
                <div className="cancel"  onClick={() => setAuthAction(!authAction)}>
                <RxCross2 />
                </div>
            </div>

         </div>

         <div className="message-body">
            <div className="admin-input">
                <label>To:</label>
                <input  type="text" placeholder="Enter Email"/>
            </div>
            <div className="admin-input">
                <label>Cc/Bcc:</label>
                <input  type="text" placeholder="Enter Email"/>
            </div>
            <div className="admin-input">
                <label>Subject:</label>
                <input  type="text" placeholder="Enter Subject"/>
            </div>

            <div className="admin-input messageBody">
                <label>Message Body:</label>
               <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Compose your message..."
        style={{ height: '200px' }}
      />
            </div>

             <div className="btn-flex-con messageBtn">
                    
                    <div className="enterBtn">
                        send message
                    </div>
            </div>

         </div>

       
        


         

         

         

          

        
      </div>

    </div>
  )
}

export default ComposeMessage


