import React from 'react'
import blogImg from '../assets/images/blogpic.png'
import { NavLink } from 'react-router-dom'

function Blog() {
  return (
    <div className='blog'>
          <div className="blogHeader">
             <h1>Blog</h1>
          </div>
           <div className="blogLatest"><h1>latest posts</h1></div>
          <div className="blogConFlex flex gap-10">

              <div className="blogCon">
                <div className="blogImage">
                    <img src={blogImg}/>
                </div>
                <div className="blogContent">
                    <div className="blogHeading">
                        Make your Dream a Reality
                    </div>
                    <div className="blogParagh">
                        <p>As you begin creating your own diffuser blends, it’s important to keep a few ...</p>
                    </div>
                </div>
              </div>
              
              <div className="blogCon">
                <div className="blogImage">
                    <img src={blogImg}/>
                </div>
                <div className="blogContent">
                    <div className="blogHeading">
                       Tacky is not a Vibe
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
                       I am African Fashion
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