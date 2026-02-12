import React from 'react'
import shopImage from '../assets/images/shopImage.png'
import shopImage1 from '../assets/images/shopImageMobile.png'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.jpg'
import product4 from '../assets/images/product4.png'
import product5 from '../assets/images/product5.png'
import product6 from '../assets/images/product6.png'
import product7 from '../assets/images/product7.png'
import sub1 from '../assets/images/product3sub1.png'
import sub2r from '../assets/images/productrem1.png'
import ads from '../assets/images/discount.png'


function Shop1() {
  return (
    <div>



        {/* -------------------------- */}

<div className="flex-center gap-10 flex-wrap">

  {/* <div className="product-card">
  <div className="image-wrapper" style={{backgroundImage : 'url("https://api.loveafrikgroup.com/images/1766504404_main.jpeg")'}}>
  </div>

  <div className="product-info">
    <h3>Product Name</h3>
    <p>Short description here</p>
  </div>
</div> */}

<div className="product-card">
  <div className="image-wrapper">
    <img src="https://api.loveafrikgroup.com/images/1766504404_main.jpeg" />
  </div>

  <div className="product-info">
    <h3>Product Name</h3>
    <p>Short description here</p>
  </div>
</div>

<div className="product-card">
  <div className="image-wrapper">
    <img src={sub2r} />
  </div>

  <div className="product-info">
    <h3>Product Name</h3>
    <p>Short description here</p>
  </div>
</div> 


<div className="product-card">
  <div className="image-wrapper">
    <img src="	https://api.loveafrikgroup.com/images/1766504230_main.jpeg" />
  </div>

  <div className="product-info">
    <h3>Product Name</h3>
    <p>Short description here</p>
  </div>
</div>


<div className="product-card">
  <div className="image-wrapper">
    <img src={sub1} />
  </div>

  <div className="product-info">
    <h3>Product Name</h3>
    <p>Short description here</p>
  </div>
</div>



</div>
{/* ------------------------------- */}

    </div>
  )
}

export default Shop1