import React, { useEffect, useState } from 'react'
import { userAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Pagination from '../../component/Pagination';
import ButtonPreloader from '../../component/ButtonPreloader';
import BookingDetails from '../../component/BookingDetails';



interface BookingInterface {
          bookingDate : string;
        bookingDateFormat : string;
        bookingEndTime : string;
        bookingId : string;
        bookingStartTime : string;
        customerId : string;
        customerName : string;
        customerEmail : string;
        customerPhoneNumber : string;
        customerOrderNote : string;
        id : string;
        orderDate : string;
        orderStatus : string;
        paymentMethod : string;
        timeLeft : string;
        total : number
}

interface Meta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

function UserBooking() {
    const [loading, setLoading] = useState<boolean>(false);
    const{baseUrl, token} = userAuth();
    const [page, setPage] = useState(1);
    const [booking, setBooking] = useState<BookingInterface[]>([]);
    const [meta, setMeta] = useState<Meta | null>(null);
    const [authAction, setAuthAction] = useState<boolean>(false);
    const [bookingOrder, setBookingOrder] = useState<BookingInterface[]>([])


     const viewOrder = (id : string) => {
        setBookingOrder(booking.filter(item => item.id == id));
        setAuthAction(!authAction)
    }

     useEffect(() => {
        getData(page)
        }, [page]);
    
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
            const response = await fetch(`${baseUrl}/get-user-booking?page=${pageNumber}`, requestOptions);
            if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
            }
            const result = await response.json(); 
            setBooking(result.data);
            setMeta(result.meta);
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

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        });

      };

  return (
    <div className='userBooking'>

                <div className="user-profile-table">
                <h1>Order List</h1>
                     
                     
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
                        <th>date</th>
                        <th>time</th>
                        <th>amount</th>
                        <th>note</th>
                        <th>status</th>
                        <th>action</th>
                        
                        </tr>

                            {booking.map((item, index) => (
                            <React.Fragment key={item.id}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{formatDate(item.bookingDate)}</td>
                                <td>{item.bookingStartTime} - {item.bookingEndTime}</td>
                                <td>
                                    {item.total}
                                    
                                </td>
                                <td>
                                    {item.customerOrderNote && item.customerOrderNote.length > 15
                                    ? item.customerOrderNote.slice(0, 15) + '...'
                                    : item.customerOrderNote}

                                </td>
                                <td>
                                    {
                                        item.orderStatus == "pending" ? (
                                             <div className="accepted">Accepted</div> 
                                        ) : (
                                            <div className="declined">Declined</div> 
                                        )
                                    }
                                    
                                </td>
                                <td> <div className="track"  onClick={() => viewOrder(item.id)}>tracking details</div> </td>

                            </tr>

                            </React.Fragment>
                            ))}
                    </table>
                </div> 

       <BookingDetails  authAction={authAction} setAuthAction={setAuthAction} bookingOrder={bookingOrder}/>

    <div className="shop-pagination">
        {meta && <Pagination meta={meta} onPageChange={setPage} />}
    </div>

    </div>
  )
}

export default UserBooking