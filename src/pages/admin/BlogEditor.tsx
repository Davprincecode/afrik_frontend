import React, { useRef, useState } from "react";
import WordLikeEditor from "./WordEditor";
import { div } from "framer-motion/client";
import SideNavAdmin from "../../component/SideNavAdmin";
import AdminTopHeader from "../../component/AdminTopHeader";


 function BlogEditor() {
return ( 
<div className='admin-blog'>
        <AdminTopHeader />

<div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">

<WordLikeEditor/>

</div>
</div>
</div>
);
}


export default BlogEditor