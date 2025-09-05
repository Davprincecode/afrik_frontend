import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { CiSearch } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdDelete, MdOutlineArrowDropDownCircle, MdOutlineDelete } from 'react-icons/md';
import { userAuth } from '../../context/AuthContext';
import { tr } from 'framer-motion/client';
import ButtonPreloader from '../../../component/ButtonPreloader';
import AdminPagination from './AdminPagination';

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

function PendingOrder() {
    const [meta, setMeta] = useState<Meta | null>(null);
    const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
    const handleToggleDropdown = (id: string) => {
    setActiveOrderId(prev => (prev === id ? null : id));
    };
    const [page, setPage] = useState(1);
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
              const response = await fetch(`${baseUrl}/get-order/pending?page=${pageNumber}`, requestOptions);
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
  await fetch(`/api/orders/${id}/confirm`, { method: 'POST' });
  setActiveOrderId(null); // Close dropdown
};

const cancelOrder = async (id: string) => {
  await fetch(`/api/orders/${id}/cancel`, { method: 'POST' });
  setActiveOrderId(null); // Close dropdown
};
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

                      {
                        order.map((item, index)=>(
                            <tr key={index}>
                             <td>{index + 1}</td>
                             <td>{item.orderId}</td>
                             <td>{item.orderDate}</td>
                             <td>{item.customerName}</td>
                             <td>{item.total}</td>
                             <td><div className="paid">paid</div></td>
                             <td><div className="orderpending flex-center gap-10" onClick={() => handleToggleDropdown(item.id)}>{item.orderStatus} <IoIosArrowDown /></div></td>
                              <td className='action-arrow'><MdOutlineArrowDropDownCircle /></td>
                            </tr>
                        ))
                        
                      }
                       

{/* {activeOrderId === order.id && (
      <tr>
        <td colSpan={5} style={{ position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: '#f9f9f9',
                      padding: '10px',
                      border: '1px solid #ccc',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      zIndex: 1000,
                    }}
                  >
            <button onClick={() => confirmOrder(order.id)}>✅ Confirm Order</button>
            <button onClick={() => cancelOrder(order.id)}>❌ Cancel Order</button>
          </div>
        </td>
      </tr>
 )} */}

                    </table>
            </div>

            <div className="adminPagination">
               {meta && <AdminPagination meta={meta} onPageChange={setPage} />}
            </div>
    </div>
  )
}

export default PendingOrder