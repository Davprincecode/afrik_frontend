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
import ComingSoon from './ComingSoon'

const data = [
        {
            id: 1,
            productName: 'Cream Indulgence Diffuser',
            productPrice : 22500,
            productDetail : 'Sweet & creamy, elegant mildly floral, yummy & relaxing, rich & earthy…',
            productImage : product1
        },
        {
            id: 2,
            productName: 'Spicy Obsession Diffuser',
            productPrice : 36000,
            productDetail : 'A rare blend of spicy and citrus fragrances. The perfect memory of liveliness and ...',
            productImage : product2
        },
        {
            id: 3,
            productName: 'Dark Seduction Diffuser',
            productPrice : 27000,
            productDetail : 'A strong, masculine & sexy scent leaving your space with a rich, mysterious yet... ',
            productImage : product3
        }
        
        
        
        
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
const [popAction, setPopAction] = useState<boolean>(false);
  return (
    <div className='productCon'>
        <ComingSoon popAction={popAction} setPopAction={setPopAction} />
         <div className="productContainer flex-center gap-20">

            <div className="productHeader">
                <div className="productHeaderTitle">
                    BestSellers
                </div>
                <div className="productShop" onClick={() => setPopAction(!popAction)}>
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
                                        <span>₦</span>{item.productPrice.toLocaleString()}
                                    </div>
                                </div>
                                <div className="productDetail">
                                    <div className="productDescription">
                                    {item.productDetail}
                                    </div>
                                    <div className="productIconWrap">
                                    <div className="productIcon">
                                        <FiShoppingCart />
                                        <div className="plusIcon"><FaPlus /></div>
                                    </div>
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