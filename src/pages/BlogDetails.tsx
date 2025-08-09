import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function BlogDetails() {
  const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails