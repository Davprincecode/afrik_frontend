import React, { useEffect, useState } from 'react'
import blogImg1 from '../assets/images/blogpic1.png'
import blogImg2 from '../assets/images/blogpic2.png'
import blogImg3 from '../assets/images/blogpic3.png'
import { NavLink } from 'react-router-dom'
import ComingSoon from './ComingSoon'
import { userAuth } from '../pages/context/AuthContext'


interface blogInterface {
    blogImage: string
    blogText: string
    blogTitle: string
    created_at : string
    id: string
    status: string
}

const Blog = () => {
  
     const [lastedBlog, setLastedBlog] = useState<blogInterface[]>([]);
      const[loading, setLoading] = useState<boolean>(false);
      const{baseUrl} = userAuth();

         useEffect(() => { 
           getData()
          }, []);
        
        const getData = async () => {
            setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const requestOptions: RequestInit = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };
                try {
                    const response = await fetch(`${baseUrl}/homepage-blog`, requestOptions);
                
                    if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message);
                    }
                    const result = await response.json();
                    setLastedBlog(result.data);
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
    <div className='blog'>
       {/* <ComingSoon popAction={popAction} setPopAction={setPopAction} /> */}
          <div className="blogHeader">
             <h1>Blog</h1>
          </div>
           <div className="blogLatest"><h1>latest posts</h1></div>
          <div className="blogConFlex flex gap-10">


            {
              lastedBlog.map((item, index)=>{
                const { html, isTruncated } = truncateRichHtml(item.blogText, 60);
                return (
                    
                    <div className="blogCon" >
                        <NavLink  to={`/blog-details/${item.id}`} key={index}>
                        <div className="blogImage">
                            <img src={item.blogImage}/>
                        </div>
                        <div className="blogContent">
                            <div className="blogHeading">
                                {item.blogTitle}
                            </div>
                            <div className="blogParagh">
                                <p><div className='flex-wrap gap-2' dangerouslySetInnerHTML={{ __html:  html}} /></p>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                    
                )
              })  
            }
              
            
          </div>
          
          <div className="blogBottom" >
               <NavLink to="/our-blog">GO TO BLOG</NavLink> 
             </div>
    </div>
  )
}

export default Blog