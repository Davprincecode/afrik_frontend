import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { GoDash, GoPlus } from 'react-icons/go'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import { CiHeart } from 'react-icons/ci'
import { FaFacebookF, FaLinkedinIn, FaPlus, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import img from '../assets/images/shopImageMobile.png'
import { userAuth } from './context/AuthContext'
import { toast } from 'react-toastify'
import ButtonPreloader from '../component/ButtonPreloader'
import AuthComponent from '../component/AuthComponent'
import { FaXTwitter } from 'react-icons/fa6'



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
    availableStockUnlimited: boolean;
    stock : string;
}

type RatingBreakdown = {
  [key: number]: number; 
};

type reviewer = {
    userId : string;
    name : string;
    profileImage : string;
    rating : number
    note : string;
}

function ProductDetails() {    
    const { productId } = useParams<{ productId: string }>();
     const [authAction, setAuthAction] = useState<boolean>(false);
     const [subNav, setSubNav] = useState<boolean>(false);
    const [id, setId] =  useState<string>('');
    const [productName, setProductName] =  useState<string>('');
    const [productColor, setProductColor] =  useState<string>('');
    const [productDescription, setProductDesription] =  useState<string>('');
    const [productImage, setProductImage] =  useState<string>('');
    const [currency, setCurrency] =  useState<string>('');
    const [discountPrice, setDiscountPrice] =  useState<number>(0);
    const [productPrice, setProductPrice] =  useState<number>(0);
    const [productSize, setProductSize] =  useState<string>('');
    const [stock, setStock] =  useState<string>('');
    const [availableQty, setAvailableQty] =  useState<number>(0);
    const [availableStockUnlimited, setAvailableStockUnlimited] =  useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [similarProducts, setSimilarProducts] = useState<ProductInterface[]>([]);
    const [subProducts, setSubProducts] = useState<ProductInterface[]>([]);
    const [reviewers, setReviewers] = useState<reviewer[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingProductId, setLoadingProductId] = useState<string | null>(null);
    const [details, setSetDetails] = useState<boolean>(true);
    const [measurement, setMeasurement] = useState<boolean>(false);
    const [review, setReview] = useState<boolean>(false);
      const [averageRating, setAverageRating] = useState<number>(0);
     const [totalReviews, setTotalReviews] = useState<number>(0);
     const [percentages, setPercentages] = useState<RatingBreakdown>([]);
     const [ratingBreakdown, setRatingBreakdown] = useState<RatingBreakdown>([]);
    const { pathname } = useLocation();
    const {baseUrl, signin,  cart, setCart, token} = userAuth();
    const currentUrl = encodeURIComponent(window.location.href);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        getData();
    }, [pathname]);

    useEffect(() => {
        getReview();
    }, [pathname, id]);

        const getData = async () => {
                setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                // myHeaders.append("Authorization", token);
                const requestOptions: RequestInit = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };
                try {
                    const response = await fetch(`${baseUrl}/page-product-details/${productId}`, requestOptions);  
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
                        setCurrency(result.data.product.currency);
                        setProductPrice(result.data.product.productPrice);
                        setDiscountPrice(result.data.product.discountPrice);
                        setProductImage(result.data.product.productImage);
                        setStock(result.data.product.stock);
                        setSimilarProducts(result.data.similarProduct); 
                        setSubProducts(prev  => [ result.data.product]);
                        setSubProducts(prev => [...prev, ...result.data.subProduct]); 
                        setLoading(false);
                } catch (error) {
                    setLoading(false);
                    if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                    toast.error(error.message);
                    } else {
                    toast.error('An unknown error occurred.');
                    }
                    
                }
        }

        const getReview = async () => {
                setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                // myHeaders.append("Authorization", token);
                const requestOptions: RequestInit = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };
                try {
                    const response = await fetch(`${baseUrl}/product-review/${id}`, requestOptions);  
                
                    if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message);
                    }
                        const result = await response.json(); 
                           setAverageRating(result.averageRating);
                            setTotalReviews(result.totalReviews);
                            setPercentages(result.percentages);
                            setRatingBreakdown(result.ratingBreakdown);
                            setReviewers(result.reviewer);
                        setLoading(false);
                } catch (error) {
                    setLoading(false);
                    if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                    // toast.error(error.message);
                    } else {
                    // toast.error('An unknown error occurred.');
                    }
                    
                }
        }

    const getProduct = (productId : string, productName : string, productColor : string, availableQty : number,
        availableStockUnlimited : boolean, productDescription : string, productSize : string,
        productPrice : number, discount : number, productImage:string, stock:string) => {
            // addToSubProduct();
            // removeSubProduct(productId);
            // setProductId(productId);
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
            setStock(stock);
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
            availableStockUnlimited: availableStockUnlimited,
            stock : stock
        }
        setSubProducts((prev) => [...prev, data]);
    }

    const removeSubProduct = (productId : string) => {
       setSubProducts((prev) => prev.filter((p) => p.productId !== productId));
    }

    const AddToCart = async (productId : string, productName : string, productColor : string, productPrice : number, quantity : number,  productImage : string, productSize : string, currency : string) => {
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
                        'currency' : currency,
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
                    if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                    toast.error(error.message);
                    } else {
                    toast.error('An unknown error occurred.');
                    }
                        setLoading(false); 
                    }
        }

    const BuyNow = async (productId : string, productName : string, productColor : string, productPrice : number, quantity : number,  productImage : string, productSize : string, currency : string) => {
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
                            'currency'  : currency,
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
                            navigate('/payment');      
                                 
                        } catch (error) {
                        setLoading(false);
                        if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                        toast.error(error.message);
                        } else {
                        toast.error('An unknown error occurred.');
                        }
                            setLoading(false); 
                        }
          }

        const handleIncrement = () => {
            let qty = quantity + 1;
            if(availableStockUnlimited ==  false){
            //   console.log("is fals");
              if(qty > availableQty){
                  toast.error("Only" + " " + availableQty + " " + "is" +" " + "Available" + " " +  "In Stock")
              }else{
                setQuantity(qty);
              }
            }else{
               setQuantity(qty);
            }
        
        };

        const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
        };

    const OutOfStock = () =>  {
       toast.error("Out Of Stock")
    }
     const authFunction = () => {
        setAuthAction(true);
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


{/* ========================== */}
          <div className="flex gap-10 prd-wrapper">
{/* ================================================================= */}
              <div className="prd-con">
                <div className="prd-img-con">
                    <div className="prd-preview-img">
                        <img src={productImage} />
                    </div>
                    <div className="flex-center sub-img-con" >
                    {
                            subProducts.map((value, index)=> (
                            <div className={`sub-img ${value.productId === id ? 'sub-active' : ''}`}
                            key={index} 
                            onClick={() => getProduct(value.productId, value.productName, value.productColor, value.availableQty, value.availableStockUnlimited, value.productDescription, value.productSize, value.productPrice, value.discountPrice, value.productImage, value.stock) } >

                            <img src={value.productImage} />

                            </div>
                            
                        ))
                    }
                    
                       </div>


                </div>


        <div className="prd-review prd-review-desktop">
           
            <div className="flex-center gap-10 rating-con">
                <div className="rating">
                     <div className="prd-review-header">
                <h1>Reviews and Ratings</h1>
            </div>
                                        <p className="rating-overall">Overall Rating & Review</p>

                    <div className="overall-number">
                    <h1>{averageRating.toFixed(1)}</h1>
                    </div>

                    <div className="flex-center justification-center gap-5 starReviews">
                    {[...Array(5)].map((_, index) => (
                    <IoIosStar
                    key={index}
                    className={index < Math.round(averageRating) ? 'starFilledColor' : 'star'}
                    />
                    ))}
                    </div>
                    <p>Based on <span>{totalReviews}</span> reviews</p>
                    {/* <a href="#">Rate now</a> */}
                </div>
                
                {/* <div className="reviews"> */}
                {/* ===================reviews========= */}

                <div className="rating-breakdown">
                {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="rating-row">
                <span className="star-label">{star} star</span>
                <div className="bar-container">
                <div
                className="bar-fill"
                style={{ width: `${percentages[star] || 0}%` }}
                />
                </div>
                <span className="count-label">{ratingBreakdown[star] || 0}</span>
                </div>
                ))}
                </div>

                {/* ==================================== */}
                {/* </div> */}
            </div>

          </div>

              </div>
{/* ===================================== */}
              <div className="prd-details">
                 <div className="prd-name"><h1>{productName}</h1></div>
                 <div className="flex-center gap-10 rate">
                    
                    {/* <div className="moq">moq: <span>10</span></div>  */}
                    <div className="stock"> stock : 
                        {
                            stock == "out of stock" ? (
                                 <span style={{color:"red"}}> {stock} </span>
                            ) : (
                               <span> {stock} </span>
                            )
                        }
                         
                       </div>
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
                    {
                        subProducts.map((value, index)=> (
                          <div className={`color ${value.productId === id ? 'active' : ''}`} key={index}>
                                <img src={value.productImage} />
                               </div>
                        ))
                    }
                    
                </div>

                <div className="flex-center gap-10 qty-con">
                    {
                        stock == "out of stock" ? (

                                <div className="flex-center justification-between qty">
                                    <div className="decreament" onClick={OutOfStock}>
                                        <HiOutlineMinusSmall />
                                    </div>
                                <div className="qty-number">0</div>
                                        <div className="increament" onClick={OutOfStock}>
                                        <GoPlus />
                                        </div>
                                </div>
                        ) : (
                                <div className="flex-center justification-between qty">
                                    <div className="decreament" onClick={handleDecrement}>
                                        <HiOutlineMinusSmall />
                                    </div>
                                <div className="qty-number">{quantity}</div>
                                        <div className="increament" onClick={handleIncrement}>
                                        <GoPlus />
                                        </div>
                                </div>
                        )
                    }

                    {
                        loading ? (
                            <div className="prealoader inActive">
                                <ButtonPreloader/>
                            </div>
                        ) : (

                        signin ? (
                            
                        stock == "out of stock" ? (
                               <div className="add-to-cart" onClick={() => OutOfStock() }>add to cart</div>
                        ) : (
                               <div className="add-to-cart" onClick={() => AddToCart(id, productName, productColor, discountPrice, quantity, productImage, productSize, "NGN") }>add to cart</div>
                        )
                        ) : (
                           <div className="add-to-cart" onClick={authFunction}>add to cart</div> 
                        )
                            
                        )
                    }
                    
                </div>

                <div className="flex-center gap-10 buy-con">
                    {
                        loading ? (
                            <div className="prealoader inActive">
                                <ButtonPreloader/>
                            </div>
                        ) : (

                            signin ? (
                            stock == "out of stock" ? (
                                    <div className="buy-now"  onClick={() => OutOfStock() }>buy now</div>
                                ) : (
                                   <div className="buy-now"  onClick={() => BuyNow(id, productName, productColor, discountPrice, quantity, productImage, productSize, "NGN") }>buy now</div> 
                                )
                            ) : (
                                <div className="buy-now"  onClick={authFunction}>buy now</div>    
                            )
                        )}
                    <div className="love-emoji"><CiHeart /></div>
                </div>

                <div className="share">
                    <p>Share this:</p>
<div className="flex-center gap-10 social-con">
  <div className="social-item">
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>
  </div>
  <div className="social-item">
    <a
      href={`https://x.com/intent/tweet?url=${currentUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaXTwitter />
    </a>
  </div>
  <div className="social-item">
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
  </div>
  <div className="social-item">
    <a
      href={`https://wa.me/2347077744145?text=${currentUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  </div>
  {/* <div className="social-item">
    <a
      href={`https://www.instagram.com/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillInstagram />
    </a>
  </div> */}
</div>

                </div>
                <div className="details top">
                    <div className="flex-center justification-between">
                        <div className="item">product description</div>
                        <div className="item-icon" onClick={()=>setSetDetails(!details)}>
                            {
                                details ? (
                                <GoDash />
                                ) : (
                                <GoPlus />
                                )
                            }
                        </div>
                    </div>
                    <div className="prdDetails" style={{display : details ? "block" : "none", marginTop : "20px", marginBottom :" 40px"}}>
                        {productDescription}
                    </div>
                </div>
                <div className="details">
                    <div className="flex-center justification-between">
                        <div className="item">size/measurement</div>
                        <div className="item-icon" onClick={()=>setMeasurement(!measurement)}>
                             {
                                measurement ? (
                                <GoDash />
                                ) : (
                                <GoPlus />
                                )
                            }
                        </div>
                    </div>

                     <div className="measurement" style={{display : measurement ? "block" : "none"}}>
                            <img src={img} alt="" />
                        </div>
                </div>
                <div className="details">
                    <div className="flex-center justification-between">
                        <div className="item">reviews</div>
                        <div className="item-icon" onClick={()=>setReview(!review)}>
                             {
                                review ? (
                                <GoDash />
                                ) : (
                                <GoPlus />
                                )
                            }</div>
                    </div>

                    <div className="review-details-con" style={{display :  review ? "block" : "none"}}>
                       
                       {
                         reviewers.map((item, index) => (
                      <div className="review-details" key={index}>

                            <div className="review-details-header flex gap-10">
                                <div className="details-img"><img src={item.profileImage} alt="" /></div>

                                <div className="review-details-name">
                                    <p>{item.name}</p>
                                    <div className="reviews-details-num-con reviews-num-con flex-center gap-10">
                                      

                                        {[...Array(5)].map((_, index) => (
                                            <IoIosStar
                                            key={index}
                                            className={index < item.rating ? 'starFilled' : 'star'}
                                            />
                                          ))}

                                    </div>
                                </div>

                            </div>

                            <div className="reviews-content">
                                <p>{item.note}</p>
                            </div>

                        </div>
                         ))
                       }
                       

                    </div>

                </div>

                

              </div>

          </div>

         {/* ----------------------------- mobile ------------- */}
  <div className="prd-review prd-review-mobile">
           
            <div className="flex-center gap-10 rating-con">
                <div className="rating">
                     <div className="prd-review-header">
                <h1>Reviews and Ratings</h1>
            </div>
                    <p className="rating-overall">Overall Rating & Review</p>

                    <div className="overall-number">
                    <h1>{averageRating.toFixed(1)}</h1>
                    </div>

                    <div className="flex-center justification-center gap-5 starReviews">
                    {[...Array(5)].map((_, index) => (
                    <IoIosStar
                    key={index}
                    className={index < Math.round(averageRating) ? 'starFilledColor' : 'star'}
                    />
                    ))}
                    </div>
                    <p>Based on <span>{totalReviews}</span> reviews</p>
                    {/* <a href="#">Rate now</a> */}
                </div>
                 {/* ===================reviews========= */}

                <div className="rating-breakdown">
                {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="rating-row">
                <span className="star-label">{star} star</span>
                <div className="bar-container">
                <div
                className="bar-fill"
                style={{ width: `${percentages[star] || 0}%` }}
                />
                </div>
                <span className="count-label">{ratingBreakdown[star] || 0}</span>
                </div>
                ))}
                </div>

                {/* ==================================== */}
            </div>

          </div>

         {/* ======================================== */}



            <div className="similar-prd">
                <h1>similar items</h1>

                <div className="flex-center product-con">

                                { similarProducts.map((item, index) => (

                                   <div className="shopProduct"  key={index}>
                                        <NavLink to={`/product-details/${item.productId}`}>
                                        <div className="shopProductImage">
                                        <img src={item.productImage} />
                                        </div>
                                        </NavLink>

                                        <div className="shopProductDetails">
                                        <NavLink to={`/product-details/${item.productId}`}>
                                        <div className="shopProductTitle">
                                            <h2>{item.productName}</h2>
                                            <div className="shopPrice">
                                                <span>₦</span> {item.productPrice.toLocaleString()}
                                            </div>
                                        </div>
                                        </NavLink>

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
                                                            <div className="shopProductIcon"  onClick={() => AddToCart(item.productId, item.productName, item.productColor, item.discountPrice, 1, item.productImage, item.productSize, "NGN")}>
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
                                }
                             </div>

            </div>



{
!signin && (
    <AuthComponent authAction={authAction} setAuthAction={setAuthAction} setSubNav={setSubNav}/>
)
} 

       </div>
       <Footer/>
    </div>
  )
}

export default ProductDetails