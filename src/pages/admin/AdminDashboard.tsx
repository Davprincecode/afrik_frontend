import React from 'react'
import AdminTopHeader from '../../component/AdminTopHeader'
import SideNavAdmin from '../../component/SideNavAdmin'
import prdImg from '../../assets/images/popular1.png'
import prdImg1 from '../../assets/images/popular2.png'
import { NavLink } from 'react-router-dom'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Bookings',
      data: [12, 19, 3, 5, 9],
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
      tension: 0.4,
    },
  ],
};


function AdminDashboard() {
  return (
    <div className='admin-dashboard'>
        <AdminTopHeader />

         <div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">

                <div className="adminTitle">
                  <h2>Dashboard</h2>
                </div>

                <div className="flex  mainBodyContainer">

                   <div className="mainOverview">

                          <div className="overview">

                            <div className="popularBookingHeader">
                              <div className="popularBookTitle">Overview</div>
                              <div className="popularSelect">
                                <select><option >all time</option></select>
                              </div>
                            </div>

                            <div className="overviewBody flex justification-between">

                              <div className="overviewMain1">
                                 <div className="overviewHeader flex-center justsification-between">
                                    <p>today order</p>
                                    <p>...</p>
                                 </div>

                                 <div className="overviewPrice flex-center justsification-between">
                                          <div className="overviewPriceHeader">
                                            <div className="popularBookTitle">16.5k</div>
                                            <p>orders over time</p>
                                          </div>
                                          <div className="overviewLast flex-center gap-10">
                                            <div className="overArrow">i</div>
                                            <div className="overPercentage">6%</div>
                                            <div className="overVs">vs</div>
                                            <div className="overToday">last day</div>

                                          </div>
                                 </div>

                                <Line data={data} />
                              </div>

                              <div className="overviewMain2">

                                    <div className="customer">
                                      <div className="customerHeader">
                                        <p>customers</p>
                                        <p className='customerNumber'>10,243</p>
                                      </div>
                                      <div className="percentage perCircle">
                                         8%
                                      </div>
                                    </div>

                                    <div className="income">
                                      <div className="customerHeader">
                                        <p>income</p>
                                        <p className='customerNumber'>10,243</p>
                                      </div>
                                      <div className="percentage">
                                         8%
                                      </div>
                                    </div>

                                       

                              </div>
                              
                            </div>



                          </div>

                          
                          <div className="mainRecentTransaction recentTransaction">
                              <div className="mainRecentHeader">
                                <div className="mainTitle">recent orders</div>
                                <NavLink to="/view">view all</NavLink>
                              </div>
                              <div className="mainRecent">
                                <table>
                                            <tr>
                                                <th>id</th>
                                                <th>customer</th>
                                                <th>status</th>
                                                <th>total</th>
                                            </tr>

                                            <tr>
                                              <td>#722627332</td>
                                              <td>joseph welder</td>
                                              <td><div className="pending">pending</div></td>
                                              <td>₦3200</td>
                                            </tr>
                                            <tr>
                                              <td>#722627332</td>
                                              <td>joseph welder</td>
                                              <td><div className="completed">completed</div></td>
                                              <td>₦3200</td>
                                            </tr>
                                            <tr>
                                              <td>#722627332</td>
                                              <td>joseph welder</td>
                                              <td><div className="cancelled">cancelled</div></td>
                                              <td>₦3200</td>
                                            </tr>
                                 </table>
                              </div>
                          </div>


                          <div className="mainRecentTransaction">
                              <div className="mainRecentHeader">
                                <div className="mainTitle">recent transactions</div>
                                <NavLink to="/view">view all</NavLink>
                              </div>
                              <div className="mainRecent">
                                <table>
                                            <tr>
                                                <th>id</th>
                                                <th>customer</th>
                                                <th>status</th>
                                                <th>total</th>
                                            </tr>

                                            <tr>
                                              <td>#722627332</td>
                                              <td>joseph welder</td>
                                              <td><div className="pending">pending</div></td>
                                              <td>₦3200</td>
                                            </tr>
                                            <tr>
                                              <td>#722627332</td>
                                              <td>joseph welder</td>
                                              <td><div className="completed">completed</div></td>
                                              <td>₦3200</td>
                                            </tr>
                                            <tr>
                                              <td>#722627332</td>
                                              <td>joseph welder</td>
                                              <td><div className="cancelled">cancelled</div></td>
                                              <td>₦3200</td>
                                            </tr>
                                 </table>
                              </div>
                          </div>

                   </div>


                   <div className="mainProduct">

                     <div className="popularProduct">
                        <div className="popularTitle">popular products</div>

                        <div className="popularForm">
                          <div className="popularHeader flex-center gap-10 justification-between">
                            <p>product</p>
                            <p>earnings</p>
                          </div>
                          <div className="popularItem flex-center gap-10 justification-between">
                            <div className="popularCon flex ">
                              <div className="popularImage">
                                <img src={prdImg} alt="" />
                              </div>
                              <div className="popularName">
                                <p className="pName">Product A</p>
                                <p>ui kit</p>
                              </div>
                            </div>
                            <div className="popularPrice">₦3200</div>
                          </div>
                        </div>
                        
                        <div className="flex-product-link">
                          <NavLink to="view" className="view">all products</NavLink>
                        </div>
                        
                     </div>

                     <div className="popularBooking">
                        <div className="popularBookingHeader">
                          <div className="popularBookTitle">bookings</div>
                          <div className="popularSelect">
                            <select><option >recent</option></select>
                          </div>
                        </div>
                        <div className="popularDate">
                          <div className="popularTodayCon">
                            <div className="popularToday">today</div>
                            <div className="popularDay">7</div>
                          </div>
                          <div className="popularTodayCon">
                            <div className="popularToday">this month</div>
                            <div className="popularDay">47</div>
                          </div>
                        </div>

                        <NavLink to="view" className="view">view all</NavLink>
                     </div>

                   </div>

                </div>


           </div>
         </div>
        

    </div>
  )
}

export default AdminDashboard