import React, { useState } from 'react'
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

const data = [
        {
            id: 1,
            productName: 'Aroma diffuser',
            productPrice : 25000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product1
        },
        {
            id: 2,
            productName: 'Aroma diffuser',
            productPrice : 55000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product2
        },
        {
            id: 3,
            productName: 'Aroma diffuser',
            productPrice : 65000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product3
        },
        {
            id: 4,
            productName: 'Aroma diffuser',
            productPrice : 25000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product4
        },
        {
            id: 5,
            productName: 'Aroma diffuser',
            productPrice : 55000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product5
        },
        {
            id: 6,
            productName: 'Aroma diffuser',
            productPrice : 65000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product6
        },
        {
            id: 7,
            productName: 'Aroma diffuser',
            productPrice : 300000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product7
        },
        {
            id: 8,
            productName: 'Aroma diffuser',
            productPrice : 6000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product7
        },
 ]
function Shop() {
    const [product, setProduct] = useState(data);
    const [filter, setFilter] = useState<boolean>(false);
  return (
    <div className="shop-con">
    <Header />

    <div className="shop-container">

        <div className="flex-center justification-between shop-header">
            <div className="page-title">
               <span> Home </span> / Shop
            </div>

             <div className="flex-center gap-20 sort-cart-wrapper">
              <div className="flex-center shop-cart-con">
                <div className="shop-cart-icon"><FiShoppingCart /></div>
               <p className="shop-cart">cart</p>
               <div className="cartNum">30</div>
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
                <div className="product-ads"><img src={ads}/></div>
            </div>
             
             <div className="flex-center product-con">

                {product.map((item, index) => (
                   <div className="shopProduct"  key={index}>
                        <div className="shopProductImage">
                        <img src={item.productImage} />
                        </div>
                        <div className="shopProductDetails">
                        <div className="shopProductTitle">
                            <h2>{item.productName}</h2>
                            <div className="shopPrice">
                                <span>₦</span> {item.productPrice.toLocaleString()}
                            </div>
                        </div>
                        <div className="shopProductDetail">
                            <div className="shopProductDescription">
                            {item.productDetail}
                            </div>
                            <div className="shopProductIconWrap">
                            <div className="shopProductIcon">
                                <FiShoppingCart />
                                <div className="shopPlusIcon"><FaPlus /></div>
                            </div>
                            </div>
                        </div>
                        </div>
                   </div>
                ))
                }
                
             </div>
        </div>
    </div>

    <div className="shop-pagination">
                <div className="paginationCon">
                                      <div className="paginationFlex flex-center gap-10">
                                          <div className="paginationArrow">
                                              <IoIosArrowBack />
                                          </div>
                                          <div className="paginationNumber flex-center gap-10">
                                              <div className="paginationActive pagination">
                                                  1
                                              </div>
                                              <div className="paginationNext pagination">
                                                  2
                                              </div>
                                              <div className="pagination">
                                                  3
                                              </div>
                                              <div className="pagination">
                                                  4
                                              </div>
                                          </div>
                                          <div className="paginationArrow">
                                              <IoIosArrowForward />
                                          </div>
                                      </div>
                        </div>
          </div>

          
    </div>
  )
}

export default Shop