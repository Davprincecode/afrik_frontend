import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom';
import Header from '../component/Header';
import  blogImage from '../assets/images/blog-details1.jpg';
import blogImage1 from '../assets/images/blog-details2.jpg';
import latestblog1 from '../assets/images/lblog1.jpg';
import latestblog2 from '../assets/images/lblog2.jpg';
import latestblog3 from '../assets/images/lblog3.jpg';
import commentImage from '../assets/images/commentImage.jpg';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LuArrowUpRight } from 'react-icons/lu';
import { userAuth } from './context/AuthContext';
import { HiCalendarDateRange } from 'react-icons/hi2';
import ButtonPreloader from '../component/ButtonPreloader';
import AuthComponent from '../component/AuthComponent';
import Pagination from '../component/Pagination';


interface blogInterface {
blogImage: string
blogText: string
blogTitle: string
createdAt : string
categoryName : string
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

   interface commentInterface {
    content: string
    fullName : string
    id : string
    commentId : string
    likesCount : number
    createdAt : string;
    replies : commentReplyInterface[]
   }
   interface commentReplyInterface{
    content: string
    fullName : string
    id : string
    commentId : string
    // likesCount : number
    createdAt : string
   }

function BlogDetails() {
  //  const { pathname } = useLocation();
   const { blogId } = useParams<{ blogId: string }>();
   const [relatedBlog, setRelatedBlog] = useState<blogInterface[]>([]);
   const [blog, setBlog] = useState<blogInterface>();
   const [message, setMessage] = useState<string>('');
   const [replyMessage, setReplyMessage] = useState<string>('');
   const [replyIndex, SetReplyIndex] = useState<string>('');
    const [categoryId, setCategoryId] = useState<string>('');
    const [relatedLoading, setRelatedLoading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [replyLoading, setReplyLoading] = useState<boolean>(false);
    const [subNav, setSubNav] = useState<boolean>(false);
    const [comments, setComments] = useState<commentInterface[]>([]);
    const [commentLoading, setCommentLoading] = useState<boolean>(false);
     const [authAction, setAuthAction] = useState<boolean>(false);
    const [meta, setMeta] = useState<Meta | null>(null);    
    const {baseUrl,  signin, token} = userAuth();
    const [page, setPage] =  useState(1);

    // useEffect(() => {
    // window.scrollTo(0, 0);
    // }, [pathname]);

    useEffect(() => { 
      getData();
      getComment();
      }, [blogId]);

    useEffect(() => {
        if(categoryId){
          getRelated(page); 
        } 
      }, [categoryId, page, blogId]);
     const authFunction = () => {
        setAuthAction(true);
      }
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
              const response = await fetch(`${baseUrl}/blog-details/${blogId}`, requestOptions);
              
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();   
              
              
                setLoading(false);
              setBlog(result.data); 
              setCategoryId(result.data.categoryId);
          } catch (error) {
              
          }
    }

    const getRelated = async (pageNumber : number) => {
      setRelatedLoading(true);
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const requestOptions: RequestInit = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/blog-details/${categoryId}/${blogId}?page=${pageNumber}`, requestOptions);
                  
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();  
              setRelatedLoading(false);
              setRelatedBlog(result.data);
              setMeta(result.meta);
          } catch (error) {
              
          }
    }

    const getComment = async () => {
      setCommentLoading(true);
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const requestOptions: RequestInit = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/comment/${blogId}`, requestOptions);
            // const results = await response.text();
            //   console.log(results);
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json(); 
              setComments(result.data);
              setCommentLoading(false);  
          } catch (error) {
              
          }
    }

    const comment = async () =>{
            setCommentLoading(true);
          const raw = {
          'blogId': blogId,
          "content" : message
          };
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify(raw)
              // redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/comment`, requestOptions);
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json(); 
              setMessage("");
              getComment();
                setCommentLoading(false);
          } catch (error) {
              
          }
    }

    const rePlyComment = async (parentId : string) =>{
          setReplyLoading(true);
          const raw = {
          'blogId': blogId,
          "parentId": String(parentId),
          "content" : replyMessage
          };
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify(raw)
              // redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/comment-reply`, requestOptions);
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json(); 
              setReplyMessage("");
              SetReplyIndex("");
              getComment();
                setReplyLoading(false);
          } catch (error) {
              
          }
    }

    const likeFunction = async (parentId : string) =>{
            // setCommentLoading(true);
          const raw = {
          'blogId': blogId,
          "parentId": String(parentId)
          };
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify(raw)
              // redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/like-comment`, requestOptions);
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json(); 
             getComment();
                // setCommentLoading(false);
          } catch (error) {
              
          }
    }
    
   const replyMessageFuntion = (data : string) => {

        if(replyIndex === data){  
          SetReplyIndex('')
        } else {
          SetReplyIndex(data);
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
    <div className="blog-details pageNav">
      <Header/> 
      <div className="blog-details-con">

        <div className="back-header">
          <NavLink to="/our-blog">
            <FaArrowLeft /> 
            <div className="back-title">back</div>
          </NavLink>
        </div>
         
        {
          loading ? (
              <ButtonPreloader/>
          ) : (
            <>
            
            <div className="blog-details-wrapper">

          <p className='blog-details-header1'>
            {blog?.categoryName}
          </p>
          
          <div className="blog-details-info">
            <h1>{blog?.blogTitle}</h1>

            <div className="flex-center gap-20">
              {/* <div className="flex-center gap-10">
                <FaUserCircle />
                <p>Tracey wilson</p>
              </div> */}
              <div className="flex-center gap-10 blog-details-date">
                <HiCalendarDateRange />
                <p>{blog?.createdAt}</p>
              </div>
            </div>

            <div className="blog-details-image">
              <img src={blog?.blogImage} />
            </div>
             
             <div className="blog-details-content">
                <p>
                  <div dangerouslySetInnerHTML={{ __html: blog?.blogText ?? "" }} />
                </p>
             </div>
 

             <div className="commentCon">

                <div className="flex-center gap-10 commentInputWrapper ">
                  <div className="commentUser">
                    <img src={commentImage} />
                  </div>
                  <div className="commentInputCon flex-center">
                    <div className="commentInput">
                      <input type="text" placeholder='Leave a Comment' value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    {
                       signin ? (
                      commentLoading ? (
                        <div className="post" >
                          <ButtonPreloader/>
                        </div>
                      ) : (
                          <div className="post" onClick={comment}>
                          post
                          </div>
                      ) ) : (
                        <div className="post" onClick={authFunction}>
                          post
                        </div>
                      )
                    }
                    
                  </div>
                </div>


               {
                comments.map((value, index)=>(
                  <div key={index}>
                 <div className="comment" >
                  <div className="commentName flex-center justification-between">
                    <h4>{value.fullName}</h4>
                     <p>{value.createdAt}</p>
                  </div>
                  <div className="commentDetails">
                    {value.content} 
                  </div>
                  <div className="flex justification-end gap-10 commentControl">
                     <p>Reply</p>
                     {
                      signin ? ( 
                        <>
                        <p className='like' onClick={(e) => likeFunction(value.id)}><AiOutlineLike /> <span>{value.likesCount}</span></p>
                         <p className='reply' onClick={(e) =>  replyMessageFuntion(value.id)}><FiMessageSquare /> <span>{value.replies.length}</span></p>
                        </>
                      ) : (
                       <>
                        <p className='like'  onClick={authFunction}><AiOutlineLike /> <span>{value.likesCount}</span></p>
                         <p className='reply'  onClick={authFunction}><FiMessageSquare /> <span>{value.replies.length}</span></p>
                        </>
                      )
                     }
                     
                  </div>
                </div>
                
                {
                  replyIndex == value.id && (
                  <div className="commentInputCon replyInputCon flex-center">
                    <div className="commentInput">
                       <input type="text" placeholder='Leave a Comment' value={replyMessage} onChange={(e) => setReplyMessage(e.target.value)}/>
                    </div>
                     {
                      replyLoading ? (
                          <div className="post">
                                <ButtonPreloader/>
                          </div>
                      ) : (
                          <div className="post" onClick={() => rePlyComment(value.commentId)}>
                            post
                          </div>
                      )
                     }
                    
                </div>  
                  )
                  
                }
                
                {
                  value.replies.map((item, index)=>(
                    <div className="comment anotherComment">
                  <div className="commentName flex-center justification-between">
                    <h4>{item.fullName}</h4>
                    <p>{item.createdAt}</p>
                  </div>
                  <div className="commentDetails">
                    {item.content}
                  </div>
                  {/* <div className="flex justification-end gap-10 commentControl">
                     <p>Reply</p>
                     <p><AiOutlineLike /> <span>5</span></p>
                     <p><FiMessageSquare /> <span>1</span></p>
                  </div> */}
                </div>
                  ))
                }
                </div>
                ))
               }



             </div>
          </div>
         </div>

         
         <div className="blog-details-related">
            <div className="our-latest-blog">
                <div className="our-latest-header flex-center justification-between">
                        <div className="our-latest-title">
                            <h1>Related <span>Topics</span> </h1>
                        </div>

                        <div className="our-latest-arrow flex-center gap-20">
                            <div className="latest-left-arrow" onClick={() => meta?.prev_page_url && setPage(meta.current_page - 1)}>
                                <IoIosArrowBack />
                            </div>
                            <div className="latest-right-arrow" onClick={() => meta?.next_page_url && setPage(meta.current_page + 1)}>
                                <IoIosArrowForward />
                            </div>
                        </div> 

                </div>

                <div className="our-latest-blog-containers flex gap-20">


                    {
                      relatedBlog.map((value, index)=>{
                        const { html, isTruncated } = truncateRichHtml(value.blogText, 60);

                        return (
                        <div className="our-latest-blog-con">
                        <div className="our-latest-blog-image">
                            <img src={value.blogImage} />
                        </div>
                        <div className="our-blog-content">
                            <div className="our-blog-time"><p>{value.createdAt}</p></div>
                            <div className="our-blog-title"><h1>{value.blogTitle}</h1></div>
                            <div className="our-blog-body">
                              <p><div className='flex-wrap  gap-2' dangerouslySetInnerHTML={{ __html:  html}} /></p></div>
                            <div className="our-blog-button">
                             
                              <NavLink to={`/blog-details/${value.id}`}>
                                Read more <LuArrowUpRight /> 
                              </NavLink>
                              </div>
                        </div>
                    </div>
                      ) })
                    }
                    

                </div>

            </div>

            <div className="shop-pagination">
                {meta && <Pagination meta={meta} onPageChange={setPage} />}
            </div>

         </div>
            
            </>
          )
        }

         


      </div>
{
    !signin && (
        <AuthComponent authAction={authAction} setAuthAction={setAuthAction} setSubNav={setSubNav}/>
    )
    } 

    </div>
  )
}

export default BlogDetails