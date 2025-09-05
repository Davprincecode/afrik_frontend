import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { RiDeleteBin6Line, RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import AllProducts from './AllProducts';
import ActiveProduct from './ActiveProduct';
import InActiveProduct from './InActiveProduct';


const headers = ['all', 'live', 'inactive'];

function AllProduct() {
    const [loading, setLoading] = useState<boolean>(false);
 
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
            </div>
            {
                activeTab == 'live' ? (
                    <ActiveProduct/>
                ) : activeTab == 'inactive' ? (
                    <InActiveProduct/>
                ) : (
                      <AllProducts/>
                )
            }
             
         </div>
  
      </div>
    )
}

export default AllProduct