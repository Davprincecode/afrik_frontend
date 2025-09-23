import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { CiSearch } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { userAuth } from '../../context/AuthContext';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import ButtonPreloader from '../../../component/ButtonPreloader';
import AdminPagination from './AdminPagination';




interface PaymentInterface {
  paymentFunction: () => void; 
}

interface orderInterface {
    id : string;
    customerAddress:  string;
    customerId:  string;
    customerName:  string;
    orderDate:  string;
    orderId:  string;
    orderStatus:  string;
    total:  string;
}

interface Meta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

const PurchaseCourse = () =>{

            const [meta, setMeta] = useState<Meta | null>(null);
            const [page, setPage] = useState(1);
            const [isActive, setIsActive] = useState(false);
            const [loading, setLoading] = useState<boolean>(false);
            const [order, setOrder] = useState<orderInterface[]>([]);
            const{baseUrl, token} = userAuth();


            useEffect(() => {
            getData(page)
            }, []);

            const getData = async (pageNumber : number) => {
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
            const response = await fetch(`${baseUrl}/order-course?page=${pageNumber}`, requestOptions);


            if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
            }
            const result = await response.json();  
            setOrder(result.data);
            setMeta(result.meta);
            setLoading(false);
            } catch (error) {
            setLoading(false);
            }
            }
    return (
      <div>
         
  
         <div className="admin-shop-transactions">
            <div className="admin-shop-header">
                          
                            <div className="admin-header-form  flex-center gap-10 justification-between">
            
                                <div className="flex-center gap-10">
                                    <div className="header-form-filter">
                                        <select name="" id="">
                                            <option value="">Filter</option>
                                        </select>
                                    </div>
                                    <div className="header-form-input">
                                        <input type="text" placeholder='Search' />
                                        <CiSearch />
                                    </div>
                                </div>

                                {/* <IoSettingsOutline className='setting-icon' onClick={paymentFunction}/> */}
                            </div>
            
                        </div>
            <div className="admin-shop-container">


                                    {
                                    loading && (
                                        <div className="cart-prealoader">
                                            <ButtonPreloader/>
                                        </div>
                
                                    ) 
                                    }
                                    
                    <table>

                        <tr>
                        <th>s/n</th>
                        <th>id</th>
                        <th>date</th>
                        <th>Customer</th>
                        <th>total</th>
                        <th>status</th>
                        <th>action</th>
                        <th></th>
                         </tr>


{
                        order.map((item, index)=>(
                            <tr key={index}>
                             <td>{index + 1}</td>
                             <td>{item.orderId}</td>
                             <td>{item.orderDate}</td>
                             <td>{item.customerName}</td>
                             <td>{item.total}</td>
                             <td><div className={item.orderStatus}>{item.orderStatus}</div></td>
                              <td className='action-arrow viewDetails'>view details</td>
                            </tr>
                        ))
                        
                      }

                       
                       

                    </table>
            </div>

            <div className="adminPagination">
               {meta && <AdminPagination meta={meta} onPageChange={setPage} />}
            </div>

         </div>
  
      </div>
    )
}

export default PurchaseCourse