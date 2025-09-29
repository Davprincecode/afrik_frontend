import React, { useEffect, useState } from 'react'
import { userAuth } from '../context/AuthContext';
import Pagination from '../../component/Pagination';


interface orderInterface {
    id : string;
    customerAddress:  string;
    customerId:  string;
    customerName:  string;
    customerEmail : string;
   customerPhoneNumber : string;
    orderDate:  string;
    orderId:  string;
    orderStatus:  string;
    total:  string;
    paymentMethod: string;
    products : products[]
}
interface products {
orderId : string;
productColor : string;
productId : string;
productImage : string;
productName : string;
quantity : number;
unitPrice : string;
total : string; 
}
interface Meta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

const  UserOrder = () =>  {
    
    const{baseUrl, token} = userAuth();
    const [page, setPage] = useState(1);
    const [meta, setMeta] = useState<Meta | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [order, setOrder] = useState<orderInterface[]>([]);
    const [PopOrder, setPopOrder] = useState<orderInterface[]>([]);

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
    const response = await fetch(`${baseUrl}/get-user-order?page=${pageNumber}`, requestOptions);
    if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
    }
    const result = await response.json(); 
    console.log(result);

    setOrder(result.data);
    setMeta(result.meta);
    setLoading(false);
    } catch (error) {

    }
    }

  return (
    <div className='userOrder'>

                <div className="user-profile-table">
                <h1>Order List</h1>
                <table>
                <tr className='table-header'>
                    <th>order Id</th>
                    <th>date</th>
                    <th>payment method</th>
                    <th>amount</th>
                    <th>status</th>
                    <th>tracking</th>
                </tr>
                
                {
                    order.map((item, index)=>(
                        <tr>
                            <td>{item.orderId}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.paymentMethod}</td>
                            <td>₦{item.total}</td>
                            <td>
                                <div className="inprogress">{item.orderStatus}</div> 
                            </td>
                            <td> <div className="track">tracking details</div> </td>
                        </tr>
                    ))
                }
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


  <div className="shop-pagination">
        {meta && <Pagination meta={meta} onPageChange={setPage} />}
    </div>

    </div>
  )
}

export default UserOrder