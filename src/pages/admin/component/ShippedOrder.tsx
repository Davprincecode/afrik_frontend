import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { CiSearch } from 'react-icons/ci';
import { RiDeleteBinLine, RiFolderDownloadLine } from 'react-icons/ri';
import { MdDelete, MdOutlineArrowDropDownCircle, MdOutlineDelete } from 'react-icons/md';
import ButtonPreloader from '../../../component/ButtonPreloader';
import AdminPagination from './AdminPagination';
import { userAuth } from '../../context/AuthContext';
import { AiOutlineEye } from 'react-icons/ai';
import OrderDetails from '../../../component/OrderDetails';


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

function ShippedOrder() {
    const [meta, setMeta] = useState<Meta | null>(null);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [order, setOrder] = useState<orderInterface[]>([]);
    const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
    const handleToggleDropdown = (id: string) => {
        setActiveOrderId(prev => (prev === id ? null : id));
        };
    const handleToggleView = (id: string) => {
    setActiveViewId(prev => (prev === id ? null : id));
    };
        const [activeViewId, setActiveViewId] = useState<string | null>(null);
    const {baseUrl, token} = userAuth();
    const [authAction, setAuthAction] = useState<boolean>(false);

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
                        const response = await fetch(`${baseUrl}/get-order/shipped?page=${pageNumber}`, requestOptions);
                        if (!response.ok) {
                        const errorResponse = await response.json();
                        throw new Error(errorResponse.message);
                        }
                        const result = await response.json();  
                        setOrder(result.data);
                        setMeta(result.meta);
                        setLoading(false);
                    } catch (error) {
                        
                    }
            }
const confirmOrder = async (id: string) => {
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
              const response = await fetch(`${baseUrl}/get-order/delivered/${id}/shipped`, requestOptions);
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();   
              setOrder(result.data);
              setMeta(result.meta);
              setLoading(false);
          } catch (error) {
              
          }
  setActiveOrderId(null); // Close dropdown
};

const cancelOrder = async (id: string) => {
//   await fetch(`/api/orders/${id}/cancel`, { method: 'POST' });
//   setActiveOrderId(null); // Close dropdown
};

const downLoadOrder = (id : string) => {

}
const viewOrder = (id : string) => {

}
  return (
    <div>
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
                                <MdDelete className='delete'/>
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
                        <th>sn</th>
                        <th>order id</th>
                        <th>date</th>
                        <th>Customer</th>
                        <th>total</th>
                        <th>payment status</th>
                        <th>order status</th>
                        <th></th>
                        
                        </tr>
                            {order.map((item, index) => (
                            <React.Fragment key={item.id}>
                            <tr>
                            <td>{index + 1}</td>
                            <td>{item.orderId}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.customerName}</td>
                            <td>{item.total}</td>
                            <td><div className="paid">paid</div></td>
                            <td  style={{position : 'relative'}} >
                            <div className="ordershipped" 
                            >
                            {item.orderStatus} 
                            </div>

                            {activeOrderId === item.id && (
                            <div className="confirmPop">
                            <div className='performAction'>
                              <div className="confirmAction  statusAction"  onClick={() => confirmOrder(item.orderId)}>Confirm Order</div>
                              <div className="cancelAction statusAction"  onClick={() => cancelOrder(item.orderId)}>Cancel Order</div>
                            </div>
                            </div>
                            )}

                            </td>


                            <td className='action-arrow'   style={{position : 'relative'}}  onClick={() => handleToggleView(item.id)}>
                            <MdOutlineArrowDropDownCircle />

                            {activeViewId === item.id && (
                            <div className="viewPop">
                            <div className='viewAction'>
                              <div className="confirmView  statusAction"   onClick={() => setAuthAction(!authAction)}>
                                <AiOutlineEye /> View Order Details
                              </div>
                              <div className="cancelView statusAction"  onClick={() => cancelOrder(item.id)}>
                                <RiFolderDownloadLine /> Download Order Details
                              </div>
                            </div>
                            </div>
                            )}

                            </td>

                            </tr>

                            </React.Fragment>
                            ))}

                       
                    </table>
            </div>

            <div className="adminPagination">
               {meta && <AdminPagination meta={meta} onPageChange={setPage} />}
            </div>

            <OrderDetails  authAction={authAction} setAuthAction={setAuthAction}/>
    </div>
  )
}

export default ShippedOrder