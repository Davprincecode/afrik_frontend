import React, { useEffect, useRef, useState } from "react";
import WordLikeEditor from "../WordEditor";
import { div } from "framer-motion/client";
import SideNavAdmin from "../../../component/SideNavAdmin";
import AdminTopHeader from "../../../component/AdminTopHeader";
import { RxCross2 } from "react-icons/rx";
import ButtonPreloader from "../../../component/ButtonPreloader";
import { userAuth } from "../../context/AuthContext";
import CategoryPop from "../../../component/CategoryPop";
import { toast } from "react-toastify";

interface tagInterface {
"id": number,
"tagName": string
}
interface categoryInterface {
"id": number,
"categoryName": string
}
type tagType = {
    tagName  : string; 
}


 const BlogEditor = () => {

  const {baseUrl, token} = userAuth();
    const[tag, setTag] = useState<tagInterface[]>([]);
    const[tagged, setTagged] = useState<tagType[]>([]);
    const[category, setCategory] = useState<categoryInterface[]>([]);
    const[size, setSize] = useState<tagInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const[categoryId, setCategoryId] = useState<number>(0);
    const[authAction, setAuthAction] = useState<boolean>(false);

        
  useEffect(() => {
          handleTags()
          handleCategory()
        }, []);

  const handleTags = async () => {
            setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/product-tag`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json();  
                   setTag(result);
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

  const handleCategory = async () => {
            setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/blog-category`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json(); 
                   setCategory(result.data);
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

const handleTagged = (tagName: string) => {
  setTagged([...tagged, { tagName }]);
};
const removeTag = (indexToRemove: number) => {
  setTagged(prev => prev.filter((_, index) => index !== indexToRemove));
};

const handleSelectedCategory = (data : number) => {
    setCategoryId(data);  
}
const [editorContent, setEditorContent] = useState<string>('');


const handle = async () => {
       console.log(editorContent);
       
}
const handleBlog = async () => {

  const myHeaders = new Headers();
         myHeaders.append("Authorization", token);
         const raw = JSON.stringify(
                { contents : editorContent }
        );
         const requestOptions: RequestInit = {
             method: "POST",
             headers: myHeaders,
             body: raw,
             redirect: "follow"
         };
         try {
             const response = await fetch(`${baseUrl}/blog`, requestOptions); 
             const results = await response.text();   
             console.log(results);
             if (!response.ok) {
             const errorResponse = await response.json();
             throw new Error(errorResponse.message);
             }
             const result = await response.json();   
             console.log(result);
              
                 setLoading(false); 
                 toast.success("Data Upload Successfully");       
         } catch (error) {
                        setLoading(false);
                        if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                        toast.error(error.message);
                        } else {
                        toast.error('An unknown error occurred.');
                        }
             setLoading(false); 
         }
};



        return ( 
                <div>
                <div className="wrap-blog flex justification-between">

                <WordLikeEditor editorContent={editorContent} setEditorContent={setEditorContent}/>

                <div className="blog-2-container">
                        <div className="categoryTag">
                        {/* Categories */}
                                <div className="prod-category">
                                <div className="admin-prod-title">Categories</div>
                                        {
                                        loading ? (
                                        <ButtonPreloader/>
                                        ) : (

                                        category.map((value, index)=>(
                                                <div className="prod-cat-item flex-center gap-10" >
                                                <input 
                                                type="checkbox"
                                                checked={categoryId === value.id} 
                                                onChange={()=>handleSelectedCategory(value.id)}
                                                />
                                                <p>{value.categoryName}</p>
                                                </div>
                                        )) 

                                        )
                                        
                                        }
                                <div className="create-new" onClick={() => setAuthAction(!authAction)}>Create New</div>
                                </div>
                                </div>

                {/* Image & Tags */}
                <div className="product-form-top flex justification-between">
                        <div className="prod-category">
                        <div className="admin-prod-title">Tags</div>
                        <div className="admin-input">
                        <label>Add Tags</label>
                        <input
                        type="text"
                        placeholder="Enter Tag Name"
                        onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                        handleTagged(e.currentTarget.value);
                        }
                        }}
                        />
                        </div>
                        <div className="addTags flex-center gap-10">
                        {
                        tagged.map((tag, index) => (
                        <div key={index} className="addTag flex-center gap-10">
                                <p>{tag.tagName}</p>
                                <RxCross2 onClick={() => removeTag(index)} />
                        </div>
                        ))
                        }
                        </div>
                        {/* <div className="create-new">Create New</div> */}
                        </div>
                </div>
                </div>

                </div>
                {
                                loading ? (
                                <div className="admin-input">
                                        <div className='inActive'><ButtonPreloader/></div>
                                </div>
                                ) : (
                                
                                <div className="admin-input">
                                <div className="btn" onClick={handle}>Submit</div>
                                </div> 
                                
                                //       <div className="admin-input inActive">
                                //         <div className="btn inActive">Submit</div>
                                //       </div> 
                                
                                
                        )}
                <CategoryPop  authAction={authAction} setAuthAction={setAuthAction} setCategory={setCategory}/>


                </div>




        );
}


export default BlogEditor