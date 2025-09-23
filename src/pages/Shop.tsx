import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import shopImage from '../assets/images/shopImage.png'
import shopImage1 from '../assets/images/shopImageMobile.png'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.jpg'
import product4 from '../assets/images/product4.png'
import product5 from '../assets/images/product5.png'
import product6 from '../assets/images/product6.png'
import product7 from '../assets/images/product7.png'
import ads from '../assets/images/discount.png'
import { FiShoppingCart } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { CiFilter } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { userAuth } from './context/AuthContext'
import Pagination from '../component/Pagination'
import ButtonPreloader from '../component/ButtonPreloader'
import AuthComponent from '../component/AuthComponent'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'


 interface Category {
  id: number;
  name: string;
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
    availableStockUnlimited: boolean
    category: Category;
}

interface Meta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}
  
function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
     const [meta, setMeta] = useState<Meta | null>(null);
    const [filter, setFilter] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [authAction, setAuthAction] = useState<boolean>(false);
    const [subNav, setSubNav] = useState<boolean>(false);
    const [page, setPage] = useState(1);
     const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

    const {baseUrl, signin,  token, cart, setCart, loggedIn} = userAuth();

      const authFunction = () => {
        setAuthAction(true);
      }

      const AddToCart = async (productId : string, productName : string, productColor : string, productPrice : number, quantity : number,  productImage : string, productSize : string) => {
                      setLoadingProductId(productId);
                    const myHeaders = new Headers();
                    myHeaders.append("Authorization", token);
                    myHeaders.append("Content-Type", "application/json");
                    const raw = JSON.stringify({
                        'product_id' : productId,
                        'product_image' :  productImage,
                        'product_size' : productSize,
                        'product_name' : productName,
                        'product_color' : productColor,
                        'product_price' : productPrice,
                        'quantity' : quantity
                       
                    });
                    const requestOptions: RequestInit = {
                        method: "POST",
                        headers: myHeaders,
                        body: raw,
                        redirect: "follow"
                    };
                    try {
                        const response = await fetch(`${baseUrl}/add-to-cart`, requestOptions); 
                        if (!response.ok) {
                        const errorResponse = await response.json();
                        throw new Error(errorResponse.message);
                        }
                        const result = await response.json();    
                        setCart(result);
                        setLoading(false);    
                        setLoadingProductId(null);
                        toast.success("Product added Successfully");       
                    } catch (error) {
                        setLoading(false); 
                    }
      }

      useEffect(() => {
            getData(page);
      }, [page]);

     const getData = async (pageNumber : number) => {
            setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/active-product?page=${pageNumber}`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json();
                   setProducts(result.data); // products come under "data"
                   setMeta(result.meta);     // pagination meta
                   setLoading(false);
              } catch (error) {
                  
              }
    }

  return (
    <div className="shop-con pageNav">
    <Header />

    <div className="shop-container">

                    {
                    loading && (
                        <div className="cart-prealoader">
                            <ButtonPreloader/>
                        </div>

                    ) 
                    }

        <div className="flex-center justification-between shop-header">
            <div className="page-title">
               <span> Home </span> / Shop
            </div>

             <div className="flex-center gap-20 sort-cart-wrapper">
              <div className="flex-center shop-cart-con">
                <div className="shop-cart-icon"><FiShoppingCart /></div>
               <p className="shop-cart">cart</p>
               <div className="cartNum">{ cart }</div>
              </div>

              <div className="flex-center gap-5 sort-by-con">
                <div className="sort">Sort by: </div>
                <div className="sort-by">
                    <select >
                        <option value="">Name</option>
                    </select>
                </div>
              </div>
            </div>
        </div>

        <div className="shop-banner">
            <img src={shopImage}  className='shop-desk-image' />
            <img src={shopImage1}  className='shop-mobile-image' />
        </div>

        <div className="shop-search-con flex-center justification-between">

            <div className="shop-filter" style={{background: filter ? "#DADADA" : "white"}} onClick={()=>setFilter(!filter)}>
                <CiFilter />
                <input type="text" placeholder='filter' className="filter" readOnly  style={{background: filter ? "#DADADA" : "white"}}/>
                <RxCross2 className='filter-cancel' style={{display : filter ? "block" : "none"}}/>
            </div>

            <div className="shop-search">
                <IoSearchOutline />
                <input type="text" placeholder='Search Shop'/>
                <div className="search-shop">search</div>
            </div>  

        </div>

        <div className="shop-product-container">

            <div className="product-ads-con">

                <div className="product-filter">
                  <div className="product-filter-line" style={{display : filter ? "none" : "block"}}></div>

                  <div className="product-filter-list" style={{display : filter ? "block" : "none"}}>
                    <div className="filter-number">
                        Showing <span>50</span> items
                    </div>
                    <div className="filter-category">
                        <div className="filter-header">category</div>

                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox" name="" id="" /></div>
                            <p>diffusers</p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox" name="" id="" /></div>
                            <p>Men’s Fashion</p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p>Women’s Fashion</p>
                        </div>
                    </div>

                    <div className="filter-price">
                        <div className="filter-header">price range</div>

                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p className="flex-center gap-5">
                                <div className="start-price"><span>₦</span>0</div>
                                <div className="price-dash">-</div>
                                <div className="end-price"><span>₦</span>10</div>
                            </p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p className="flex-center gap-5">
                                <div className="start-price"><span>₦</span>10</div>
                                <div className="price-dash">-</div>
                                <div className="end-price"><span>₦</span>50</div>
                            </p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p className="flex-center gap-5">
                                <div className="start-price"><span>₦</span>50</div>
                                <div className="price-dash">-</div>
                                <div className="end-price"><span>₦</span>100</div>
                            </p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p className="flex-center gap-5">
                               
                                <div className="price-dash">&gt;</div>
                                <div className="end-price"><span>₦</span>100</div>
                            </p>
                        </div>

                    </div>

                    <div className="filter-color">
                        <div className="filter-header">color</div>
                        <div className="size-item flex-center gap-5">
                            <div className="color white"></div>
                            <div className="color color1"></div>
                            <div className="color color2"></div>
                            <div className="color color3"></div>
                            <div className="color color4"></div>
                        </div>
                    </div>

                    <div className="filter-size">
                        <div className="filter-header">size</div>
                          
                        <div className="size-item flex-center gap-5">

                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p>S</p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p>M</p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p>L</p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p>XL</p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p>XXL</p>
                        </div>
                        <div className="filter-list flex-center gap-10">
                            <div className="filter-input"><input type="checkbox"/></div>
                            <p>XXXL</p>
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="product-ads"><img src={ads}/></div>
                {/* <div className="product-ads"><img src={ads}/></div> */}
            </div>
             
             <div className="flex-center product-con">
             {
                loading ? (
                    <div className="productPreloader">
                              <ButtonPreloader/>
                    </div>
                    
                ) : (

                    products.map((item, index) => (
                        <div className="shopProduct"  key={index}>
                            <div className="shopProductImage">
                            <img src={item.productImage} />
                            </div>
                            <div className="shopProductDetails">
                            <div className="shopProductTitle">
                                <h2>{item.productName}</h2>
                                <div className="shopPrice">
                                    {/* .toLocaleString() */}
                                    <span>₦</span> {item.discountPrice.toLocaleString()}
                                </div>
                            </div>
                            <div className="shopProductDetail">
                                  
                                <NavLink to={`/product-details/${item.productId}`}>

                                <div className="shopProductDescription">
                                   {item.productDescription}
                                </div>

                                </NavLink>

                                <div className="shopProductIconWrap">
                               {
                                signin ? (
                                    loadingProductId === item.productId ? (
                                       <ButtonPreloader/>
                                    ) : (
                                      <div className="shopProductIcon" onClick={() => AddToCart(item.productId, item.productName, item.productColor, item.discountPrice, 1, item.productImage, item.productSize)}>
                                        <FiShoppingCart />
                                        <div className="shopPlusIcon"><FaPlus /></div>
                                    </div>   
                                    )
                                    
                                ) : (
                                  <div className="shopProductIcon" onClick={authFunction}>
                                    <FiShoppingCart />
                                    <div className="shopPlusIcon"><FaPlus /></div>
                                </div>  
                                )
                               }
                                

                                </div>
                            </div>
                            </div>
                        </div>
                    ))

                )
             


                }
             </div>
        </div>
    </div>

    <div className="shop-pagination">
        {meta && <Pagination meta={meta} onPageChange={setPage} />}
    </div>

    {
    !signin && (
        <AuthComponent authAction={authAction} setAuthAction={setAuthAction} setSubNav={setSubNav}/>
    )
    } 
          
    </div>
  )
}

export default Shop