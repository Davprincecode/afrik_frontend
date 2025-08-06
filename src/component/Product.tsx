import React, { useEffect, useState } from 'react'
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
import { AnimatePresence, motion } from 'framer-motion'



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
            productPrice : 65000,
            productDetail : 'Original product comes in three styles of color, usb charger',
            productImage : product7
        },
 ]

function Product() {

  const [product, setProduct] = useState(data);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateSize = () => {
      setVisibleCount(window.innerWidth < 768 ? 2 : 3);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const shuffleLeft = () => {
    setProduct(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const shuffleRight = () => {
    setProduct(prev => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

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
                <div className="arrowLeft" onClick={shuffleLeft}>
                    <FaChevronLeft />
                </div>

                <div className="flex-center productItemWrapper">

                    <AnimatePresence initial={false} mode="popLayout">
                        {product.slice(0, visibleCount).map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="product"
                                >
                            <div className="productImage">
                                <img src={item.productImage} />
                            </div>
                            <div className="productDetails">
                                <div className="productTitle flex-center">
                                    <h2>{item.productName}</h2>
                                    <div className="price">
                                        <span>₦</span>{item.productPrice}
                                    </div>
                                </div>
                                <div className="productDetail">
                                    <div className="productDescription">
                                    {item.productDetail}
                                    </div>
                                    <div className="productIcon">
                                        <FiShoppingCart />
                                        <div className="plusIcon"><FaPlus /></div>
                                    </div>
                                </div>
                            </div>
                        

                            </motion.div>
                        ))}
                        
                    </AnimatePresence>

                </div>


                <div className="arrowRight" onClick={shuffleRight}>
                    <FaChevronRight />
                </div>
            </div>


         </div>
    </div>
  )
}

export default Product