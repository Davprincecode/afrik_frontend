import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { GoPlus } from 'react-icons/go'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import { CiHeart } from 'react-icons/ci'
import { FaFacebookF, FaLinkedinIn, FaPlus, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { userAuth } from './context/AuthContext'
import { toast } from 'react-toastify'
import ButtonPreloader from '../component/ButtonPreloader'



 interface ProductInterface {
    productId: string;
    productName: string;
    productColor: string;
    productDescription: string;
    productImage: string;
    discountPrice: number;
    productPrice: number;
    productSize: string;
    availableQty: number;
    availableStockUnlimited: boolean
}

function ProductDetails() {    
    const { productId } = useParams<{ productId: string }>();
     
    const [id, setId] =  useState<string>('');
    const [productName, setProductName] =  useState<string>('');
    const [productColor, setProductColor] =  useState<string>('');
    const [productDescription, setProductDesription] =  useState<string>('');
    const [productImage, setProductImage] =  useState<string>('');
    const [discountPrice, setDiscountPrice] =  useState<number>(0);
    const [productPrice, setProductPrice] =  useState<number>(0);
    const [productSize, setProductSize] =  useState<string>('');
    const [availableQty, setAvailableQty] =  useState<number>(0);
    const [availableStockUnlimited, setAvailableStockUnlimited] =  useState<boolean>(false);

    const [quantity, setQuantity] = useState<number>(1);

    const [similarProducts, setSimilarProducts] = useState<ProductInterface[]>([]);
    const [subProducts, setSubProducts] = useState<ProductInterface[]>([]);
    
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

    const { pathname } = useLocation();
    const {baseUrl, cart, setCart, token} = userAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    useEffect(() => {

        const getData = async () => {
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
                        const response = await fetch(`${baseUrl}/product-details/${productId}`, requestOptions);  
                        if (!response.ok) {
                        const errorResponse = await response.json();
                        throw new Error(errorResponse.message);
                        }
                        const result = await response.json(); 
                        
                        setId(result.data.product.productId);
                        setProductName(result.data.product.productName);
                        setProductColor(result.data.product.productColor);
                        setAvailableQty(result.data.product.availableQty);
                        setAvailableStockUnlimited(result.data.product.availableStockUnlimited);
                        setProductDesription(result.data.product.productDescription);
                        setProductSize(result.data.product.productSize);
                        setProductPrice(result.data.product.productPrice);
                        setDiscountPrice(result.data.product.discountPrice);
                        setProductImage(result.data.product.productImage);
                        setSimilarProducts(result.data.similarProduct);  
                        setSubProducts(result.data.subProduct);   
                        setLoading(false);
                    } catch (error) {
                        
                    }
            }

        getData();
    }, []);

    const getProduct = (productId : string, productName : string, productColor : string, availableQty : number,
        availableStockUnlimited : boolean, productDescription : string, productSize : string,
        productPrice : number, discount : number, productImage:string) => {

            addToSubProduct();
            removeSubProduct(productId);            
            setId(productId);
            setProductName(productName);
            setProductColor(productColor);
            setAvailableQty(availableQty);
            setAvailableStockUnlimited(availableStockUnlimited);
            setProductDesription(productDescription);
            setProductSize(productSize);
            setProductPrice(productPrice);
            setDiscountPrice(discount);
            setProductImage(productImage);
    }

    const addToSubProduct = () => {
        const data =  {
            productId: id,
            productName: productName,
            productColor: productColor,
            productDescription: productDescription,
            productImage: productImage,
            discountPrice: discountPrice,
            productPrice: productPrice,
            productSize: productSize,
            availableQty: availableQty,
            availableStockUnlimited: availableStockUnlimited
        }

        setSubProducts((prev) => [...prev, data]);

    }

    const removeSubProduct = (productId : string) => {
       setSubProducts((prev) => prev.filter((p) => p.productId !== productId));
    }

      const AddToCart = async (productId : string, productName : string, productColor : string, productPrice : number, quantity : number,  productImage : string, productSize : string) => {
                        setLoadingProductId(productId);
                        setLoading(true);
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
                            'quantity' : quantity,
                           
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

  return (
    <div className="productDetails pageNav">
       <Header/>

       <div className="prd-details-con">

          <div className="flex-center justification-between prd-header">
             <div className="page-title">
               <span> Home </span> / Shop
            </div>


            <NavLink to="/cart">
                <div className="flex-center shop-cart-con">
                    <div className="shop-cart-icon"><FiShoppingCart /></div>
                    <p className="shop-cart">cart</p>
                    <div className="cartNum">{cart}</div>
                </div>
            </NavLink>


          </div>

          <div className="flex gap-10 prd-wrapper">
              <div className="prd-con">
                <div className="prd-img-con">
                    <div className="prd-preview-img">
                        <img src={productImage} />
                    </div>

                    <div className="flex-center sub-img-con" >
                    {
                        subProducts.map((value, index)=> (

                            

                                <div className="sub-img"  key={index} onClick={() => getProduct(value.productId, value.productName, value.productColor, value.availableQty,
     value.availableStockUnlimited, value.productDescription, value.productSize,
      value.productPrice, value.discountPrice, value.productImage) }><img src={value.productImage} /></div>
                            
                        ))
                    }
                    
                       </div>


                </div>
              </div>
              <div className="prd-details">
                 <div className="prd-name"><h1>{productName}</h1></div>
                 <div className="flex-center gap-10 rate">
                    <div className="moq">moq: <span>10</span></div> 
                    <div className="stock">stock: <span>in stock</span></div>
                </div>
                <div className="prd-price">
                    <h2>₦{discountPrice}</h2>
                </div>
                <div className="prd-old-price">
                    ₦{productPrice}
                </div>
                <div className="prd-size">
                    size: <span>{productSize}</span>
                </div>
                <div className="prd-color">
                    color: <span>{productColor}</span>
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
                        <div className="qty-number">{quantity}</div>
                        <div className="increament"><GoPlus /></div>
                    </div>

                  

                    {
                        loading ? (
                            <div className="prealoader inActive">
                                <ButtonPreloader/>
                            </div>
                        ) : (
                           <div className="add-to-cart" onClick={() => AddToCart(id, productName, productColor, discountPrice, quantity, productImage, productSize) }>add to cart</div>
                        )
                    }
                    
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

                                { similarProducts.map((item, index) => (

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
                                            {item.productDescription}
                                            </div>
                                            <div className="shopProductIconWrap">
                                                 {
                                                        loadingProductId === item.productId ? (
                                                              <ButtonPreloader/>
                                                        ) : (
                                                            <div className="shopProductIcon"  onClick={() => AddToCart(item.productId, item.productName, item.productColor, item.discountPrice, 1, item.productImage, item.productSize)}>
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
                                }
                             </div>

            </div>

       </div>
       <Footer/>
    </div>
  )
}

export default ProductDetails