import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { CiSearch } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdDelete, MdOutlineArrowDropDownCircle, MdOutlineDelete } from 'react-icons/md';
import { userAuth } from '../../context/AuthContext';
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


function DeliveredOrder() {
const [meta, setMeta] = useState<Meta | null>(null);
     const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
        const handleToggleDropdown = (id: string) => {
        setActiveOrderId(prev => (prev === id ? null : id));
        };
        const [loading, setLoading] = useState<boolean>(false);
        const [order, setOrder] = useState<orderInterface[]>([]);
      const[page, setPage] = useState<number>(1);
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

                        <tr>
                        <td>1</td>
                        <td>#564563</td>
                        <td>21/08/2025</td>
                        <td>joseph welder</td>
                        <td>₦23242</td>
                        <td>
                            <div className="paid">paid</div> 
                        </td>
                        <td>
                            <div className="orderpending flex-center gap-10">pending <IoIosArrowDown /></div>
                        </td>
                        <td className='action-arrow'><MdOutlineArrowDropDownCircle /></td>
                        </tr>

                       
                    </table>
            </div>

             <div className="adminPagination">
               {meta && <AdminPagination meta={meta} onPageChange={setPage} />}
            </div>
    </div>
  )
}

export default DeliveredOrder