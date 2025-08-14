import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import productImg from '../assets/images/product3.jpg'
import productSub1 from '../assets/images/product3sub1.png'
import productSub2 from '../assets/images/product3sub2.png'
import productSub3 from '../assets/images/product3sub3.jpg'
import productSub4 from '../assets/images/product3sub4.png'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.jpg'
import product4 from '../assets/images/product4.png'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { GoPlus } from 'react-icons/go'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import { CiHeart } from 'react-icons/ci'
import { FaFacebookF, FaLinkedinIn, FaPlus, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
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
 ]
function ProductDetails() {
    const [product, setProduct] = useState(data);
  return (
    <div className="productDetails pageNav">
       <Header/>

       <div className="prd-details-con">

          <div className="flex-center justification-between prd-header">
             <div className="page-title">
               <span> Home </span> / Shop
            </div>

             <div className="flex-center shop-cart-con">
                <div className="shop-cart-icon"><FiShoppingCart /></div>
                <p className="shop-cart">cart</p>
                <div className="cartNum">30</div>
              </div>
          </div>

          <div className="flex gap-10 prd-wrapper">
              <div className="prd-con">
                <div className="prd-img-con">
                    <div className="prd-preview-img">
                        <img src={productImg} />
                    </div>
                    <div className="flex-center sub-img-con">
                          <div className="sub-img"><img src={productSub1} /></div>
                          <div className="sub-img"><img src={productSub2} /></div>
                          <div className="sub-img"><img src={productSub3} /></div>
                          <div className="sub-img"><img src={productSub4} /></div>
                          <div className="sub-img"><img src={productSub4} /></div>
                    </div>
                </div>
              </div>
              <div className="prd-details">
                 <div className="prd-name"><h1>Opulence diffuser black</h1></div>
                 <div className="flex-center gap-10 rate">
                    <div className="moq">moq: <span>10</span></div> 
                    <div className="stock">stock: <span>in stock</span></div>
                </div>
                <div className="prd-price">
                    <h2>₦240,000</h2>
                </div>
                <div className="prd-old-price">
                    ₦20,000
                </div>
                <div className="prd-size">
                    size: <span>100ml</span>
                </div>
                <div className="prd-color">
                    color: <span>black</span>
                </div>
                <div className="color-type flex-center gap-5">
                    <div className="color black active"></div>
                    <div className="color white"></div>
                    <div className="color color1"></div>
                    <div className="color color2"></div>
                    <div className="color color3"></div>
                    <div className="color color4"></div>
                </div>

                <div className="flex-center gap-10 qty-con">
                    <div className="flex-center justification-between qty">
                        <div className="decreament"><HiOutlineMinusSmall /></div>
                        <div className="qty-number">10</div>
                        <div className="increament"><GoPlus /></div>
                    </div>
                    <div className="add-to-cart">add to cart</div>
                </div>

                <div className="flex-center gap-10 buy-con">
                    <div className="buy-now">buy now</div>
                    <div className="love-emoji"><CiHeart /></div>
                </div>

                <div className="share">
                    <p>Share this:</p>
                    <div className="flex-center gap-10 social-con">
                       <div className="social-item"><a href="#" target='_blank'><FaFacebookF /></a></div>
                       <div className="social-item"><a href="#" target='_blank'><FaTwitter /></a></div>
                       <div className="social-item"><a href="#" target='_blank'><AiFillInstagram /></a></div>
                       <div className="social-item"><a href="#" target='_blank'><FaLinkedinIn /></a></div>
                    </div>
                </div>
                <div className="details top">
                    <div className="flex-center justification-between">
                        <div className="item">details</div>
                        <div className="item-icon"><GoPlus /></div>
                    </div>
                </div>
                <div className="details">
                    <div className="flex-center justification-between">
                        <div className="item">size/measurement</div>
                        <div className="item-icon"><GoPlus /></div>
                    </div>
                </div>
                <div className="details">
                    <div className="flex-center justification-between">
                        <div className="item">reviews</div>
                        <div className="item-icon"><GoPlus /></div>
                    </div>
                </div>

                

              </div>

          </div>

          <div className="prd-review">
            <div className="prd-review-header"><h1>Reviews and Ratings</h1></div>
            <div className="flex-center gap-10 rating-con">
                <div className="rating">
                    <p className='rating-overall'> Overall Rating & Review</p>
                    <div className="overall-number"><h1>4.5</h1></div>
                    <div className="flex-center justification-center gap-5 starReviews">
                        <IoIosStar className="starFilledColor" />
                        <IoIosStar className="starFilledColor" />
                        <IoIosStar className="starFilledColor" />
                        <IoIosStar className="star" />
                        <IoIosStar className="star" />
                    </div>
                    <p>Based on <span>200</span> reviews</p>
                    <a href="#">Rate now</a>
                </div>
                <div className="reviews">
                    <div className="flex-center gap-10 reviews-num">
                        <p>5</p>
                        <div className="reviews-num-con flex-center gap-10">
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="star" />
                            <IoIosStar className="star" />
                        </div>
                        <div className="bar-con">
                            <div className="review-bar"></div>
                        </div>
                        <p>53</p>
                    </div>
                    <div className="flex-center gap-10 reviews-num">
                        <p>4</p>
                        <div className="reviews-num-con flex-center gap-10">
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="star" />
                            <IoIosStar className="star" />
                        </div>
                        <div className="bar-con">
                            <div className="review-bar"></div>
                        </div>
                        <p>53</p>
                    </div>
                    <div className="flex-center gap-10 reviews-num">
                        <p>3</p>
                        <div className="reviews-num-con flex-center gap-10">
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="star" />
                            <IoIosStar className="star" />
                        </div>
                        <div className="bar-con">
                            <div className="review-bar"></div>
                        </div>
                        <p>53</p>
                    </div>
                    <div className="flex-center gap-10 reviews-num">
                        <p>2</p>
                        <div className="reviews-num-con flex-center gap-10">
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="star" />
                            <IoIosStar className="star" />
                        </div>
                        <div className="bar-con">
                            <div className="review-bar"></div>
                        </div>
                        <p>53</p>
                    </div>
                    <div className="flex-center gap-10 reviews-num">
                        <p>1</p>
                        <div className="reviews-num-con flex-center gap-10">
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="starFilled" />
                            <IoIosStar className="star" />
                            <IoIosStar className="star" />
                        </div>
                        <div className="bar-con">
                            <div className="review-bar"></div>
                        </div>
                        <p>53</p>
                    </div>
                </div>
            </div>

          </div>



            <div className="similar-prd">
                <h1>similar items</h1>

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
       <Footer/>
    </div>
  )
}

export default ProductDetails