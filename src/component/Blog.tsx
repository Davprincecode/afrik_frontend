import React from 'react'
import blogImg from '../assets/images/blogpic.png'
import { NavLink } from 'react-router-dom'

function Blog() {
  return (
    <div className='blog'>
          <div className="blogHeader">
            Blog
          </div>

          <div className="blogConFlex flex-center gap-10">

              <div className="blogCon">
                <div className="blogImage">
                    <img src={blogImg}/>
                </div>
                <div className="blogContent">
                    <div className="blogHeading">
                        How to create your own essential oil diffuser blends
                    </div>
                    <div className="blogParagh">
                        <p>As you begin creating your own diffuser blends, it’s important to keep a few ....</p>
                    </div>
                </div>
              </div>
              <div className="blogCon">
                <div className="blogImage">
                    <img src={blogImg}/>
                </div>
                <div className="blogContent">
                    <div className="blogHeading">
                        How to create your own essential oil diffuser blends
                    </div>
                    <div className="blogParagh">
                        <p>As you begin creating your own diffuser blends, it’s important to keep a few ....</p>
                    </div>
                </div>
              </div>
              <div className="blogCon">
                <div className="blogImage">
                    <img src={blogImg}/>
                </div>
                <div className="blogContent">
                    <div className="blogHeading">
                        How to create your own essential oil diffuser blends
                    </div>
                    <div className="blogParagh">
                        <p>As you begin creating your own diffuser blends, it’s important to keep a few ....</p>
                    </div>
                </div>
              </div>
              <div className="blogCon">
                <div className="blogImage">
                    <img src={blogImg}/>
                </div>
                <div className="blogContent">
                    <div className="blogHeading">
                        How to create your own essential oil diffuser blends
                    </div>
                    <div className="blogParagh">
                        <p>As you begin creating your own diffuser blends, it’s important to keep a few ....</p>
                    </div>
                </div>
              </div>


             

          </div>
          
          <div className="blogBottom">
               <NavLink to="#">GO TO BLOG</NavLink> 
             </div>
    </div>
  )
}

export default Blog