import React from 'react'
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.jpg'
import product4 from '../assets/images/product4.png'
import product5 from '../assets/images/product5.png'
import product6 from '../assets/images/product6.png'
import product7 from '../assets/images/product7.png'
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <div className='productCon'>
         <div className="productContainer flex-center gap-20">

            <div className="productHeader">
                <div className="productHeaderTitle">
                    BestSellers
                </div>
                <div className="productShop">
                    <NavLink to="#" className="shopBtn">
                        view shop
                    </NavLink>
                </div>
            </div>

            <div className="productList flex-center gap-20">
                <div className="arrowLeft">
                    <FaChevronLeft />
                </div>
                <div className="product">
                    <div className="productImage">
                        <img src={product1} />
                    </div>
                    <div className="productDetails">
                        <div className="productTitle flex-center">
                            <h2>Aroma diffuser</h2>
                            <div className="price">
                                <span>₦</span>25,000
                            </div>
                        </div>
                        <div className="productDetail">
                            <div className="productDescription">
                               Original product comes in three styles of color, usb charger
                            </div>
                            <div className="productIcon">
                                <FiShoppingCart />
                                <div className="plusIcon"><FaPlus /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <div className="productImage">
                        <img src={product2} />
                    </div>
                    <div className="productDetails">
                        <div className="productTitle  flex-center">
                            <h2>Aroma diffuser</h2>
                            <div className="price">
                                <span>₦</span>25,000
                            </div>
                        </div>
                        <div className="productDetail">
                            <div className="productDescription">
                               Original product comes in three styles of color, usb charger
                            </div>
                            <div className="productIcon">
                                <FiShoppingCart />
                                <div className="plusIcon"><FaPlus /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="productImage">
                        <img src={product3} />
                    </div>
                    <div className="productDetails">
                        <div className="productTitle  flex-center">
                            <h2>Aroma diffuser</h2>
                            <div className="price">
                                <span>₦</span>25,00000
                            </div>
                        </div>
                        <div className="productDetail">
                            <div className="productDescription">
                               Original product comes in three styles of color, usb charger
                            </div>
                            <div className="productIcon">
                                <FiShoppingCart />
                                <div className="plusIcon"><FaPlus /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrowRight">
                    <FaChevronRight />
                </div>
            </div>


         </div>
    </div>
  )
}

export default Product