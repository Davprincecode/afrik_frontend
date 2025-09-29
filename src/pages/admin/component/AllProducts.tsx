import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { RiDeleteBin6Line, RiDeleteBinLine, RiEdit2Fill } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { userAuth } from '../../context/AuthContext';
import AdminPagination from './AdminPagination';
import { tr } from 'framer-motion/client';
import { toast } from 'react-toastify';
import DeletePopup from './DeletePopUp';
import ButtonPreloader from '../../../component/ButtonPreloader';

interface Meta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

interface Product {
    productId: string;
    productName: string;
    productColor: string;
    productDescription: string;
    productImage: string;
    discountPrice: number;
    productPrice: number;
    productSize: string;
    availableQty: string;
    availableStockUnlimited: boolean;
    status : string
}

function AllProducts() {
     const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);
    const [meta, setMeta] = useState<Meta | null>(null);
    const {baseUrl, token} = userAuth();
    const[loading, setLoading] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState(false);
        const [selectedId, setSelectedId] = useState<string | null>(null);
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
                    const response = await fetch(`${baseUrl}/product?page=${pageNumber}`, requestOptions);
                    if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message);
                    }
                    const result = await response.json();  
                    setProducts(result.data);
                    setMeta(result.meta);
                    setLoading(false);
                } catch (error) {
                    
                }
        }

        const handleId = (id : string) => {
        // setEditId(id);
        // heroFunction();
        };
        const handleStatusToggle = async (id: string) => {
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
            const response = await fetch(`${baseUrl}/status-product/${id}`, requestOptions);
            if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
            }
            const result = await response.json();   
                getData(page);
                // setLoading(false);
        } catch (error) {
            
        }

        };

        const handleDeleteClick = (id: string) => {
        setSelectedId(id);
        setShowPopup(true);
        };
        const handleDeleteConfirm = async (id: string | number) => {
            setLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", token);
            const requestOptions: RequestInit = {
                method: "DELETE",
                headers: myHeaders,
                redirect: "follow"
            };
            try {
                const response = await fetch(`${baseUrl}/hero-section/${id}`, requestOptions);
                if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message);
                }
                const result = await response.json();   
                setProducts(result.data);
                setLoading(false);
                setShowPopup(false);
                setSelectedId(null);
                setLoading(false);
                toast.error("delete successfully");
            } catch (error) {
                
            }

        };


        const handleSearch = async (search : string) => {
            if(search == ''){
                getData(page);
            }
            setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const requestOptions: RequestInit = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };
                try {
                    const response = await fetch(`${baseUrl}/all-product-search/${search}`, requestOptions);
                    if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message);
                    }
                    const result = await response.json();
                    setProducts(result.data);
                    setMeta(result.meta);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                }
        }

        const handleFilter = async (search : string) => {
            if(search == ''){
                getData(page);
            }
            setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const requestOptions: RequestInit = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };
                try {
                    const response = await fetch(`${baseUrl}/all-product-filter/${search}`, requestOptions);
                    if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message);
                    }
                    const result = await response.json();
                    setProducts(result.data);
                    setMeta(result.meta);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                }
        }

  return (
    <div>

<div className="admin-header-form  flex-center gap-10 justification-between">

        <div className="flex-center gap-10">
            <div className="header-form-filter">
                <select  onChange={(e) => handleFilter(e.target.value)}>
                        <option value="">Filter</option>
                        <option value="pin">Pinned</option>
                        <option value="unpin">Unpinned</option>
                </select>
            </div>
            <div className="header-form-input">
                <input type="text" placeholder='Search' onChange={(e) => handleSearch(e.target.value)}/>
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
                
                <th>product</th>
                <th>inventory</th>
                <th>price</th>
                <th>rating</th>
                <th>status</th>
                <th>action</th>
            </tr>

            {
                products.map((item, index)=>(
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <div className="flex gap-5 inv-con">

                            <div className="inv">
                            <img src={item.productImage}/>
                            </div>
                            <div className="invProductName">
                            <h4>{item.productName}</h4>
                            <p>{item.productSize}</p>
                            </div>
                            
                            </div>
                        </td>
                        
                        <td>{
                        item.availableStockUnlimited  ?
                            "unlimited" 
                            : item.availableQty
                            }</td>
                        <td>{item.productPrice.toLocaleString()}</td>
                        <td>later imp</td>
                       
                        <td>
                            <div className="radio-group">
                            <label className="toggle-switch">
                            <input
                            type="checkbox"
                            checked={item.status === 'active'}
                            onChange={() => handleStatusToggle(item.productId)}
                            />
                            <span className="slider"></span>
                            </label>
                            </div>
                        </td>
                        
                            <td>
                                <div className="flex-center gap-10">
                                <div className="delete">
                                <MdDelete className='delete' onClick={() => handleDeleteClick(item.productId)} />
                                </div>
                                <div className="edit">
                                    <RiEdit2Fill className="edit" onClick={() => handleId(item.productId)}/>
                                </div>
                                </div>
                            </td>
                        </tr>
                ))
            }


            {/* <tr>
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
        
            </tr> */}

            

        
        </table>
</div>

    <DeletePopup
    isOpen={showPopup}
    itemId={selectedId ?? ""}
    onCancel={() => setShowPopup(false)}
    onDelete={handleDeleteConfirm}
    />
    
        <div className="adminPagination">
               {meta && <AdminPagination meta={meta} onPageChange={setPage} />}
            </div>
    </div>
  )
}

export default AllProducts