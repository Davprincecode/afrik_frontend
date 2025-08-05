import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'
import blogHeader from '../assets/images/blogHeader.jpg'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import latestblog1 from '../assets/images/lblog1.jpg'
import latestblog2 from '../assets/images/lblog2.jpg'
import latestblog3 from '../assets/images/lblog3.jpg'
import Header from '../component/Header'

function BlogList() {
  return (
    <div className="our-blog">

        <Header />
        
    <div className="our-blog-container">

        <div className="our-blog-header" style={{backgroundImage : `url(${blogHeader})`}}>
            <div className="our-blog-header-content">
                <h1>Check out Articles we’ve written for you.</h1>
                <h4>Scroll to explore</h4>
            </div>
        </div>

        <div className="our-blog-sub-wrapper">

        <div className="our-blog-top-con">
          <div className="our-blog-search">
            <input type="text" />
        </div>

        <div className="our-blog-top flex">

                <div className="our-blog-main-con">

                    <div className="our-blog-main-image">
                    <img src={blog1} />
                    </div>
                    <div className="our-blog-content">
                        <div className="our-blog-time"><p>10 Min</p></div>
                        <div className="our-blog-title"><h1>Top Trends Shaping Real Estate in 2024</h1></div>
                        <div className="our-blog-body"><p>Stay ahead of the curve! Explore the latest trends influencing the real estate market this year.</p></div>
                        <div className="our-blog-button"><NavLink to="#">Read more <LuArrowUpRight /> </NavLink></div>
                    </div>

                </div>

                <div className="our-blog-sub-flex">

                    <div className="our-blog-sub-con flex gap-20">
                        <div className="our-blog-sub-image">
                            <img src={blog2} />
                        </div>
                        <div className="our-blog-content">
                            <div className="our-blog-time"><p>8 Min</p></div>
                            <div className="our-blog-title"><h1>Top Trends Shaping Real Estate in 2024</h1></div>
                            <div className="our-blog-body"><p>Stay ahead of the curve! Explore the latest trends influencing the real estate market this year.</p></div>
                            <div className="our-blog-button"><NavLink to="#">Read More <LuArrowUpRight /> </NavLink></div>
                        </div>
                    </div>

                    <div className="our-blog-sub-con flex gap-20">
                        <div className="our-blog-sub-image">
                            <img src={blog3} />
                        </div>
                        <div className="our-blog-content">
                            <div className="our-blog-time"><p>8 Min</p></div>
                            <div className="our-blog-title"><h1>Top Trends Shaping Real Estate in 2024</h1></div>
                            <div className="our-blog-body"><p>Stay ahead of the curve! Explore the latest trends influencing the real estate market this year.</p></div>
                            <div className="our-blog-button"><NavLink to="#">Read More <LuArrowUpRight /> </NavLink></div>
                        </div>
                    </div>

                </div>
        </div>  
        </div>

        
        <div className="our-latest-blog">

            <div className="our-latest-blog-containers flex gap-20">

                <div className="our-latest-blog-con">
                    <div className="our-latest-blog-image">
                        <img src={latestblog1} />
                    </div>
                    <div className="our-blog-content">
                        <div className="our-blog-time"><p>10 Min</p></div>
                        <div className="our-blog-title"><h1>Top Trends Shaping Real Estate in 2024</h1></div>
                        <div className="our-blog-body"><p>Stay ahead of the curve! Explore the latest trends influencing the real estate market this year.</p></div>
                        <div className="our-blog-button"><NavLink to="#">Read more <LuArrowUpRight /> </NavLink></div>
                    </div>
                </div>
                <div className="our-latest-blog-con">
                    <div className="our-latest-blog-image">
                        <img src={latestblog2} />
                    </div>
                    <div className="our-blog-content">
                        <div className="our-blog-time"><p>10 Min</p></div>
                        <div className="our-blog-title"><h1>Top Trends Shaping Real Estate in 2024</h1></div>
                        <div className="our-blog-body"><p>Stay ahead of the curve! Explore the latest trends influencing the real estate market this year.</p></div>
                        <div className="our-blog-button"><NavLink to="#">Read more <LuArrowUpRight /> </NavLink></div>
                    </div>
                </div>
                <div className="our-latest-blog-con">
                    <div className="our-latest-blog-image">
                        <img src={latestblog3} />
                    </div>
                    <div className="our-blog-content">
                        <div className="our-blog-time"><p>10 Min</p></div>
                        <div className="our-blog-title"><h1>Top Trends Shaping Real Estate in 2024</h1></div>
                        <div className="our-blog-body"><p>Stay ahead of the curve! Explore the latest trends influencing the real estate market this year.</p></div>
                        <div className="our-blog-button"><NavLink to="#">Read more <LuArrowUpRight /> </NavLink></div>
                    </div>
                </div>

            </div>

        </div>
        

        </div>
    </div>
    
    </div>
  )
}

export default BlogList