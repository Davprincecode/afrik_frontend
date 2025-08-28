import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import invImg from '../../assets/images/inventoryImg.png'

function ShopTransaction() {
  const [isActive, setIsActive] = useState(false);
  
    return (
      <div>
          <h2>website hero slidder images,captions & call to actions</h2>
  
         <div className="shop-transactions">
            <div className="shop-header"></div>
            <div className="shop-container">
                    <table>
                        <tr>
                            <th>sn</th>
                            <th>id</th>
                            <th>product</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>Payment</th>
                        <th>status</th>
                        <th>order status</th>
                        <th>action</th>
                        </tr>

                        <tr>
                        <td>1</td>
                        <td>#564563</td>
                        <td>
                            <div className="flex gap-5 inv-con">
                                <div className="inv">
                                    <img src={invImg}/>
                                </div>
                                <div className="invProductName">
                                    <h4>Men Grey Hoodle</h4>
                                    <p>Hoodle</p>
                                </div>
                            </div>
                             
                        </td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td >
                           <div className="paid">paid</div> 
                        </td>
                        <td className='pending'>pending</td>
                        <td>
                            <div className="orderpending flex-center gap-10">pending <IoIosArrowDown /></div>
                        </td>
                        <td className='action'>view details</td>
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>#564563</td>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td >
                           <div className="paid">paid</div> 
                        </td>
                        <td className='complete'>pending</td>
                        <td>
                            <div className="orderconfirm flex-center gap-10">comfirm <IoIosArrowDown /></div>
                        </td>
                        <td className='action'>view details</td>
                        </tr>



                        <tr>
                        <td>2</td>
                        <td>#564563</td>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td >
                           <div className="paid">paid</div> 
                        </td>
                        <td className='complete'>pending</td>
                        <td>
                            <div className="ordercancalled flex-center gap-10">cancelled <IoIosArrowDown /></div>
                        </td>
                        <td className='action'>view details</td>
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>#564563</td>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td >
                           <div className="paid">paid</div> 
                        </td>
                        <td className='complete'>pending</td>
                        <td>
                            <div className="orderrefund">refund</div>
                        </td>
                        <td className='action'>view details</td>
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>#564563</td>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td >
                           <div className="paid">paid</div> 
                        </td>
                        <td className='complete'>pending</td>
                        <td>
                            <div className="ordershipped">shipped</div>
                        </td>
                        <td className='action'>view details</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>#564563</td>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td >
                           <div className="paid">paid</div> 
                        </td>
                        <td className='complete'>pending</td>
                        <td>
                            <div className="orderdelivered">delivered</div>
                        </td>
                        <td className='action'>view details</td>
                        </tr>
                    </table>
            </div>
         </div>
  
      </div>
    )
}

export default ShopTransaction