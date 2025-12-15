import React, { useEffect, useRef, useState} from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import { NavLink, useLocation } from 'react-router-dom'
import blogHeader from '../assets/images/blogHeader.png'
import mobileBlogHeader from '../assets/images/mobileBlogHeader.png'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import latestblog1 from '../assets/images/lblog1.jpg'
import latestblog2 from '../assets/images/lblog2.jpg'
import latestblog3 from '../assets/images/lblog3.jpg'
import Header from '../component/Header'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { IoSearchOutline } from 'react-icons/io5'
import Footer from '../component/Footer'
import { userAuth } from './context/AuthContext'
import Pagination from '../component/Pagination'
import ButtonPreloader from '../component/ButtonPreloader'

interface blogInterface {
blogImage: string
blogText: string
blogTitle: string
created_at : string
id: string
status: string
}

interface Meta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

function BlogList() {
    const { pathname } = useLocation();
  const [blogPin, setBlogPin] = useState<blogInterface[]>([]);
  const [lastedBlog, setLastedBlog] = useState<blogInterface[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);
   const [meta, setMeta] = useState<Meta | null>(null);  

const {baseUrl} = userAuth();
      useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
     
        useEffect(() => { 
           getData(page)
          }, [page]);
        
        const getData = async (pageNumber : number) => {
            setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const requestOptions: RequestInit = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };
                try {
                    const response = await fetch(`${baseUrl}/blog?page=${pageNumber}`, requestOptions);
                
                    if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message);
                    }
                    const result = await response.json();
                    setBlogPin(result.data.blogPin);
                    setLastedBlog(result.data.lastedBlog); 
                    setMeta(result.meta);
                    setPageLoading(false);
                    setLoading(false);
                } catch (error) {
                    
                }
        }

 

const truncateRichHtml = (
    html: string,
    maxLength: number = 150
  ): { html: string; isTruncated: boolean } => {
    const tempDiv = document.createElement('div');
    // tempDiv.className = 'flex';
    tempDiv.innerHTML = html;

    const fullText = tempDiv.textContent?.trim() || '';

    if (fullText.length <= maxLength) {
      return { html, isTruncated: false }; 
    }

    let charCount = 0;

    const walk = (node: Node): string => {
      if (charCount >= maxLength) return '';

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        const remaining = maxLength - charCount;
        const slice = text.slice(0, remaining);
        charCount += slice.length;
        return slice;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const tag = el.tagName.toLowerCase();
        const attrs = Array.from(el.attributes)
          .map(attr => `${attr.name}="${attr.value}"`)
          .join(' ');
        const children = Array.from(el.childNodes).map(walk).join('');
        return `<${tag}${attrs ? ' ' + attrs : ''}>${children}</${tag}>`;
      }
      return '';
    };

    const truncatedHtml = walk(tempDiv) + "...";

    return { html: truncatedHtml, isTruncated: true };
  };


  return (
    <div className="our-blog pageNav">
        <Header />
        <div className="our-blog-container">

            <div className="our-blog-header" style={{backgroundImage : `url(${blogHeader})`}}>
                {/* <div className="our-blog-header-content">
                    <h1>Check out Articles <br /> we’ve written for you.</h1>

                    <div className="conScroll">
                        <h4>Scroll to explore</h4>
                    </div>
                    
                </div> */}
            </div>

            <div className="our-mobile-header" style={{backgroundImage : `url(${mobileBlogHeader})`}}></div>

            <div className="our-blog-sub-wrapper">

            <div className="our-blog-top-con">

                <div className="our-blog-top-header flex-center justification-between">
                    <div className="our-blog-top-title">
                        <h1>our <span>articles</span> </h1>
                      
                    </div>
                    {/* <div className="our-blog-search">
                        <IoSearchOutline />
                        <input type="text" placeholder='Search Blog'/>
                        <div className="search-blog">search</div>
                    </div>   */}
                </div>
                
           {
                loading ? (
                <ButtonPreloader/>
                ) : (
                    <div className="our-blog-top flex">


                    {  blogPin.length <= 2 && (blogPin.map((value, index) => {
                            const { html, isTruncated } = truncateRichHtml(value.blogText, 60);
                                
                                    return(
                                    <div className="our-blog-main-con" style={{width: "100%"}}>
                                        <div className="our-blog-main-image">
                                        <img src={value.blogImage} />
                                        </div>
                                        <div className="our-blog-content">
                                            <div className="our-blog-time"><p>{value.created_at}</p></div>
                                            <div className="our-blog-title"><h1>{value.blogTitle}</h1></div>
                                            <div className="our-blog-body"><p><div className='flex-wrap gap-2' dangerouslySetInnerHTML={{ __html:  html}} /></p>
                                        </div>
                                            <div className="our-blog-button">
                                                <NavLink to={`/blog-details/${value.id}`}>Read more <LuArrowUpRight /> </NavLink>
                                            </div>
                                        </div>
                                    </div>
                            )    
                            }))
                            
                        }
                        
                    {     blogPin.length === 3 && (() => {
                            const { html, isTruncated} = truncateRichHtml(blogPin[0].blogText, 60);
                            return (
                                <>
                            <div className="our-blog-main-con">
                                    <div className="our-blog-main-image">
                                    <img src={blogPin[0].blogImage} />
                                    </div>
                                    <div className="our-blog-content">
                                    <div className="our-blog-time"><p>{blogPin[0].created_at}</p></div>
                                    <div className="our-blog-title"><h1>{blogPin[0].blogTitle}</h1></div>
                                    <div className="our-blog-body">
                                    <p><div className='flex-wrap gap-2' dangerouslySetInnerHTML={{ __html: html }} /></p>
                                    </div>
                                    <div className="our-blog-button">
                                    <NavLink to={`/blog-details/${blogPin[0].id}`}>Read more <LuArrowUpRight /></NavLink>
                                    </div>
                                    </div>
                            </div>

                            <div className="our-blog-sub-flex">
                                {[blogPin[1], blogPin[2]].map((value, index) => {
                                const { html } = truncateRichHtml(value.blogText, 60);
                                return (
                                    <div className="our-blog-sub-con flex gap-20" key={value.id}>
                                    <div className="our-blog-sub-image">
                                        <img src={value.blogImage} />
                                    </div>
                                    <div className="our-blog-content">
                                        <div className="our-blog-time"><p>{value.created_at}</p></div>
                                        <div className="our-blog-title"><h1>{value.blogTitle}</h1></div>
                                        <div className="our-blog-body">
                                        <p><div className='flex-wrap gap-2' dangerouslySetInnerHTML={{ __html: html }} /></p>
                                        </div>
                                        <div className="our-blog-button">
                                        <NavLink to={`/blog-details/${value.id}`}>Read more <LuArrowUpRight /></NavLink>
                                        </div>
                                    </div>
                                    </div>
                                );
                                })}
                            </div>

                            </>

                            );

                            })()}

                        
                    </div>    
                )
           }
            


            </div>

            
            <div className="our-latest-blog">

                <div className="our-latest-header flex-center justification-between">
                        <div className="our-latest-title">
                            <h1>latest <span>blog</span> </h1>
                        </div>
                        <div className="our-latest-arrow flex-center gap-20">
                            <div className="latest-left-arrow"  onClick={() => meta?.prev_page_url && setPage(meta.current_page - 1)}>
                                <IoIosArrowBack />
                            </div>
                            <div className="latest-right-arrow" onClick={() => meta?.next_page_url && setPage(meta.current_page + 1)}>
                                <IoIosArrowForward />
                            </div>
                        </div> 
                </div>

           {
            loading ? (
              <ButtonPreloader/>
            ) : (
                <div className="our-latest-blog-containers flex gap-20">
                   
                   {
                    lastedBlog.map((value, index)=>{
                       const { html, isTruncated } = truncateRichHtml(value.blogText, 60);
                        return (
                        <div className="our-latest-blog-con" key={index}>
                        <div className="our-latest-blog-image">
                            <img src={value.blogImage} />
                        </div>
                        <div className="our-blog-content">
                            <div className="our-blog-time"><p>{value.created_at}</p></div>
                            <div className="our-blog-title"><h1>{value.blogTitle}</h1></div>
                            <div className="our-blog-body"><p><div className='flex-wrap gap-2' dangerouslySetInnerHTML={{ __html:  html}} /></p></div>
                            <div className="our-blog-button">
                                <NavLink to={`/blog-details/${value.id}`}>Read more <LuArrowUpRight /> 
                                </NavLink>
                            </div>
                        </div>
                    </div>
                       )})
                   }
                    
                    
                </div>
            )}

            </div>
            </div>


           <div className="shop-pagination">
        {meta && <Pagination meta={meta} onPageChange={setPage} />}
    </div>

        </div>
        <Footer/>
    </div>
  )
}

export default BlogList