import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { RiDeleteBin6Line, RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';


const headers = ['all', 'live', 'inactive'];

function AllProduct() {
 
  const [activeTab, setActiveTab] = useState('all'); 

    return (
      <div>
         <div className="admin-shop-transactions">

            <div className="admin-shop-header">
                <div className="admin-header-list flex-center gap-10">
                     {headers.map((label) => (
                            <div
                            key={label}
                            className={`header-list ${activeTab === label ? 'header-list-active' : ''}`}
                            onClick={() => setActiveTab(label)}
                            >
                            {label}
                            </div>
                        ))}
                </div>

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

            </div>

            <div className="admin-shop-container">
                    <table>
                        <tr>
                            <th>sn</th>
                            <th>id</th>
                            <th>product</th>
                            <th>inventory</th>
                            <th>price</th>
                            <th>rating</th>
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
                        <td>1</td>
                        <td>15252</td>
                        <td>1-2</td>
                        <td>
                        <FiEdit3 />
                        <RiDeleteBin6Line />
                        </td>
                        
                        
                        </tr>

                    
                    </table>
            </div>
         </div>
  
      </div>
    )
}

export default AllProduct