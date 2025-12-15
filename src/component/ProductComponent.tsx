import { useEffect, useState } from 'react'
import {toast } from 'react-toastify';
import {NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { userAuth } from '../pages/context/AuthContext';
import { RxCross2} from 'react-icons/rx';
import { IoIosCheckmarkCircleOutline, IoIosStar} from 'react-icons/io';
import { MdArrowOutward, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { IoLocationOutline } from 'react-icons/io5';
import { CiCircleQuestion } from 'react-icons/ci';
import ButtonPreloader from './ButtonPreloader';
import { div } from 'framer-motion/client';

interface authComponentInterface {
    authAction : boolean,
    setAuthAction: React.Dispatch<React.SetStateAction<boolean>>;

      PopOrder : orderInterface[];
      status : string;

}

interface orderInterface {
    id : string;
    customerAddress:  string;
    customerId:  string;
    customerName:  string;
    customerEmail:  string;
    customerPhoneNumber: string;
    orderDate:  string;
    orderId:  string;
    orderStatus:  string;
    review: boolean;
    total:  string;
    paymentMethod : string;
    products : products[]
}
interface products {
orderId : string;
productColor : string;
productId : string;
productImage : string;
productName : string;
productSize : string;
quantity : number;
unitPrice : string;
total : string; 
}

interface TestimonialForm {
  note: string;

  rating: number;

}

const ProductComponent : React.FC<authComponentInterface> = ({authAction, setAuthAction, PopOrder,  status} ) =>{

  const navigate = useNavigate();
  const {baseUrl, token} = userAuth();  
  const { pathname } = useLocation();

    const [note, setNote] = useState<string>('');
    const [rating, setRating]  =  useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [print, setPrint] = useState<boolean>(false);
    const [confirm, setConfirm] = useState<boolean>(false);
    const [reviewConfirm, setReviewConfirm] = useState<boolean>(false);

  const products = PopOrder?.[0]?.products ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<TestimonialForm[]>(
  products.map(() => ({ note: '', rating: 0 }))
  );
 
 const handleRating = (index: number) => {
  setReviews(prev => {
    const updated = [...prev];
    updated[currentIndex] = {
      ...updated[currentIndex],
      rating: index + 1,
    };
    return updated;
  });
};

const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setReviews(prev => {
    const updated = [...prev];
    updated[currentIndex] = {
      ...updated[currentIndex],
      note: e.target.value,
    };
    return updated;
  });
};

const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

 
  const handleSubmit = async () =>{
            setLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");
            const payload = products.map((product, index) => ({
                        productId: product.productId,
                        orderId: product.orderId,
                        rating: reviews[index].rating,
                        note: reviews[index].note,
                      }));
            const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify(payload),
              redirect: "follow"
            };
            try {
                const response = await fetch(`${baseUrl}/product-review`, requestOptions);
                if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message);
                }
                const result = await response.json();    
                toast.success(result.message);  
                 setConfirm(false);
                 setReviewConfirm(false);
                setLoading(false);
                 location.reload(); 
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


     const confirmOrder = async () => {
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
            const response = await fetch(`${baseUrl}/update-order/${PopOrder[0]?.orderId}`, requestOptions);
            if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
            }
            const result = await response.json();
            setConfirm(true);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
            toast.error(error.message);
            } else {
            toast.error('An unknown error occurred.');
            }
        }
    
        }

  const currentProduct = products[currentIndex];
  const currentReview = reviews[currentIndex] ?? { note: '', rating: 0 };

    const validateForm = () => {
            
            if (!note.trim()) {
            toast.error("You need to fill the full name");
            return false;
            }
            
            if(rating < 0){
            toast.error("You need to fill the rating");
            return false;
            }
        
            return true;
        };
        
        const handleReview = async () => {
            if(!validateForm()){
                return;
                }
                    const myHeaders = new Headers();
                    myHeaders.append("Authorization", token);
                    myHeaders.append("Content-Type", "application/json");
                    const raw = JSON.stringify({
                        'note' : note,
                        'rating' : rating
                    });
                    
                    const requestOptions: RequestInit = {
                        method: "POST",
                        headers: myHeaders,
                        body: raw,
                        redirect: "follow"
                    };
                    try {
                        const response = await fetch(`${baseUrl}/testimony`, requestOptions);
                        if (!response.ok) {
                        const errorResponse = await response.json();
                        throw new Error(errorResponse.message);
                        }
                        const result = await response.json();    
                            setRating(0);
                            setNote('');
                        setLoading(false); 
                        toast.success("Data Upload Successfully");       
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


  useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  const handlePrint = () => {
    setPrint(true);
  };

  useEffect(() => {
    if (print) {
      setTimeout(() => {
        window.print();
        setPrint(false); 
      }, 100);
    }
  }, [print]);
    
    const currentStage = status;
    const stages = ['pending', 'confirmed', 'shipped', 'delivered'];
  
  return (
    <div className="track-con" style={{display : authAction ? "flex" : "none"}}>

        {  
        
        PopOrder.map((item, index) => (

            <div className={print ? "track-body-print" : "track-body"}>
                
                <div className="track-cancel-con flex-center justification-between">

                    <div className="track-header flex-center gap-10">
                        <p>Home</p>
                        <MdOutlineKeyboardArrowRight />
                        <p>Orders</p>
                        <MdOutlineKeyboardArrowRight />
                        <p>ID {item.orderId}</p>
                    </div>

                    <div className="track-cancel">
                        <div className="cancel"  onClick={() => setAuthAction(!authAction)}>
                        <RxCross2 />
                        </div>
                    </div>

                </div>

                <div className="track-header-title flex-center justification-between">
                    <h1>Order ID : {item.orderId}</h1>

                    <div className="track-btn-con flex-center gap-10">

                            <div className="invoice-btn flex-center gap-10" onClick={handlePrint}>
                            <LiaFileInvoiceSolid />
                              invoice
                            </div>

                            <div className="track-btn flex-center gap-10">
                              track order
                            <IoLocationOutline />
                            </div>
                    </div>
                    
                </div>
                
                <div className="track-delivery flex-center gap-10">
                    <div className="track-delivery-date">
                    <span>order date : </span>{item.orderDate}
                    </div>
                    {/* <div className="dash-right"><RxDividerVertical /></div>
                    <div className="track-delivery-car flex-center gap-10">
                        <TbTruckDelivery />
                        <p>estimated delivery: Oct 16, 2025</p> 
                    </div> */}
                </div>


                <div className="track-body-details">

                    <div className="track-progress">

                        <div className="orderr-status flex-center gap-10">
                            <p>Order Status : </p>
                            <div className="view-pending">{status}</div>
                        </div>

                            <div className="progress-container">
                            {stages.map((stage, index) => {
                                    const isActive = stages.indexOf(currentStage) >= index;
                                    return (
                                        <div key={stage} className="progress-step">
                                        <div className={`progress-circle ${isActive ? 'active' : ''}`}></div>
                                        <div className="progress-label">{stage}</div>
                                        {index < stages.length - 1 && (
                                        <div className={`progress-line ${isActive ? 'active' : ''}`}></div>
                                        )}
                                        </div>
                                        );
                                    })}
                            </div>
                    </div>

                </div>

                <div className="track-item-con">
{
                        item.products.map((item, index)=>(
                    <div className="track-item flex justification-between">
                        <div className="track-item-details flex gap-10">
                            <div className="track-image">
                                <img src={item.productImage} alt="" />
                            </div>
                            <div className="track-name">
                                <h4>{item.productName}</h4>

                                <div className="track-size-con flex-center gap-10">
                                    <div className="track-size">{item.productColor}</div>
                                    <div className="track-mill">{item.productSize}</div>
                                </div>

                            </div>
                        </div>
                        <div className="track-price-con">
                            <h2>₦{item.unitPrice}</h2>
                            <div className="track-qty">
                                Qty : {item.quantity}
                            </div>
                        </div>
                    </div>
                        ))}
                    

                </div>

                <div className="track-address">
                    <h4>Delivery</h4>
                    <p>address : </p>
                    <p>{item.customerAddress}</p>
                </div>

                <div className="track-summary-con">
                    <div className="track-help">
                        <h4>Need Help</h4>
                        <NavLink to="/contact-us"><CiCircleQuestion /> Order issues <MdArrowOutward /></NavLink>
                    </div>

                    <div className="track-summary">
                        <h4>Order Summary</h4>

                        <div className="track-order-flex track-total flex-center gap-10 justification-between">
                            <div className="track-order-title">total</div>
                            <div className="track-order-price">₦{Number(item.total).toLocaleString()}</div>
                        </div>

                    </div>

                </div>

              { 
                item.orderStatus == "shipped" && (
                  loading ? (
                   <ButtonPreloader/>
                  ) : (
                    <div className="confirmOrder inputBtn" onClick={confirmOrder}>
                  confirm order recieved
                   </div> 
                  )
                )
              }

              {
                PopOrder[0]?.review == false && item.orderStatus == "delivered" && (
                  loading ? (
                   <ButtonPreloader/>
                  ) : (
                    <div className="confirmOrder inputBtn" onClick={() => setReviewConfirm(true)}>
                            give review
                   </div> 
                  )
                )
              }


            </div>

        ))}

 {
  confirm  ? (
   <div className="track-con" style={{display : authAction ? "flex" : "none"}}>
         {
           !reviewConfirm && (
            <div className="track-body-pop">

            <div className="pop-wrapper">
              <div className="pop-headder">
                <IoIosCheckmarkCircleOutline />
              </div>
              <div className="pop-body">
                <h1>order recieved confirmed</h1>
                <p>we`ve confirmed your order has been recieved. Tell us how it went, your feedback helps us serve you better!</p>
              </div>

                <div className="pop-btn" onClick={() => setReviewConfirm(!reviewConfirm)}>
                  continue
                </div>
            </div>

           </div>
           )
         }
          
                
           {
            reviewConfirm && (
              <div className="track-body-pop-review">
                        {
                        <div className="track-review-con">
                              <div className="track-review-header">
                            <h2>Submit Review ({currentIndex + 1}/{products.length})</h2>
                            <p>Select rating from {currentReview?.rating} - 5</p>
                            <div className="admin-star flex-center gap-5">
                              {[...Array(5)].map((_, index) => (
                                <IoIosStar
                                  key={index}
                                  onClick={() => handleRating(index)}
                                  style={{
                                    color: index < currentReview?.rating ? '#a67c00' : '#ccc',
                                    cursor: 'pointer',
                                    fontSize: '24px',
                                  }}
                                />
                              ))}
                            </div>
                          </div>

                            <div className="track-item">
                                <div className="track-item flex justification-between">
                                            <div className="track-item-details flex gap-10">
                                                <div className="track-image">
                                                    <img src={currentProduct.productImage} alt={currentProduct.productName} />
                                                </div>
                                                <div className="track-name">
                                                    <h4>{currentProduct.productName}</h4>

                                                    <div className="track-size-con flex-center gap-10">
                                                        <div className="track-size">{currentProduct.productColor}</div>
                                                        <div className="track-mill">{currentProduct.productSize}</div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="track-price-con">
                                                <h2>₦{currentProduct.unitPrice}</h2>
                                                <div className="track-qty">
                                                    Qty : {currentProduct.quantity}
                                                </div>
                                            </div>
                                        </div>
                            </div>

                          <div className="track-note">
                            <label>
                              Note <span>(optional)</span>
                            </label>
                            <textarea
                              placeholder="Enter Note"
                              cols={30}
                              rows={5}
                              value={currentReview?.note}
                              onChange={handleNoteChange}
                            />
                          </div>

                          <div className="inputBtnFlex flex gap-10">

                            {currentIndex > 0 &&  <div className='inputBtn' onClick={handlePrev}>Prev</div>}

                            {currentIndex < products.length - 1 ? (

                              reviews[currentIndex]?.rating > 0 ? (
                                    <div className='inputBtn' onClick={handleNext}>
                                      Next
                                    </div>
                              ) : (
                                  <div className='inputBtn inActive'>
                                    Next
                                  </div>
                              )
                              
                            ) : loading ? (
                              <div className="inputBtn"> <ButtonPreloader/> </div>
                            ) : (
                              reviews[currentIndex]?.rating > 0 ? (
                                  <div className='inputBtn' onClick={handleSubmit}>
                                    Submit
                                  </div>
                              ) : (
                                  <div className='inputBtn inActive'>
                                    Submit
                                  </div>
                              )
                            )}
                          </div>
                        </div>
                        }
            </div>
            )
           } 

        </div>
  ) : (
            reviewConfirm && (
               <div className="track-con" style={{display : authAction ? "flex" : "none"}}>

              <div className="track-body-pop-review">
                        {
                        <div className="track-review-con">
                              <div className="track-review-header">
                            <h2>Submit Review ({currentIndex + 1}/{products.length})</h2>
                            <p>Select rating from {currentReview?.rating} - 5</p>
                            <div className="admin-star flex-center gap-5">
                              {[...Array(5)].map((_, index) => (
                                <IoIosStar
                                  key={index}
                                  onClick={() => handleRating(index)}
                                  style={{
                                    color: index < currentReview?.rating ? '#a67c00' : '#ccc',
                                    cursor: 'pointer',
                                    fontSize: '24px',
                                  }}
                                />
                              ))}
                            </div>
                          </div>

                            <div className="track-item">
                                <div className="track-item flex justification-between">
                                            <div className="track-item-details flex gap-10">
                                                <div className="track-image">
                                                    <img src={currentProduct.productImage} alt={currentProduct.productName} />
                                                </div>
                                                <div className="track-name">
                                                    <h4>{currentProduct.productName}</h4>

                                                    <div className="track-size-con flex-center gap-10">
                                                        <div className="track-size">{currentProduct.productColor}</div>
                                                        <div className="track-mill">{currentProduct.productSize}</div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="track-price-con">
                                                <h2>₦{currentProduct.unitPrice}</h2>
                                                <div className="track-qty">
                                                    Qty : {currentProduct.quantity}
                                                </div>
                                            </div>
                                        </div>
                            </div>

                          <div className="track-note">
                            <label>
                              Note <span>(optional)</span>
                            </label>
                            <textarea
                              placeholder="Enter Note"
                              cols={30}
                              rows={5}
                              value={currentReview?.note}
                              onChange={handleNoteChange}
                            />
                          </div>

                          <div className="inputBtnFlex flex gap-10">

                            {currentIndex > 0 &&  <div className='inputBtn' onClick={handlePrev}>Prev</div>}

                            {currentIndex < products.length - 1 ? (

                              reviews[currentIndex]?.rating > 0 ? (
                                    <div className='inputBtn' onClick={handleNext}>
                                      Next
                                    </div>
                              ) : (
                                  <div className='inputBtn inActive'>
                                    Next
                                  </div>
                              )
                              
                            ) : loading ? (
                              <div className="inputBtn"> <ButtonPreloader/> </div>
                            ) : (
                              reviews[currentIndex]?.rating > 0 ? (
                                  <div className='inputBtn' onClick={handleSubmit}>
                                    Submit
                                  </div>
                              ) : (
                                  <div className='inputBtn inActive'>
                                    Submit
                                  </div>
                              )
                            )}
                          </div>
                        </div>
                        }
            </div>

            </div>
            )
  )
 }
        

    </div>
  )
}

export default ProductComponent


