import React, { useEffect } from 'react'

function VerifyPayment() {
     const params = new URLSearchParams(window.location.search);
    const reference = params.get('reference');
    const tranRef = params.get('trxref');
    // console.log(reference);
    // console.log(tranRef);
    

     const fetchData = async () => {
        const tokens: string =  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjVkZDgxNWU3ZGQ5ODM5YmJkYzRkYWI0YzViODU1NmEyOGZjODFiYjJmNzJhYWQ5NTI2YjU0NTIwN2NjY2U1ODU1NGFlZGE2OGUxYzFmNzkiLCJpYXQiOjE3NTU4Mjc4MDIuNTc0Njk1LCJuYmYiOjE3NTU4Mjc4MDIuNTc0Njk5LCJleHAiOjE3ODczNjM4MDIuNTQ4Mzc3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E7DOLsowewxviFAVdgyDmks3WfZo4mbWhALC1FiQoYEEPgYypsne0jo3utFMKhKKOXlb1OJG2RmzJUAnP_PpySuV-YazGssXcyTRYf14FzjTGdAvzClTY8NNPky3R5xo3N3fKL9NTgszoSuvDTMNSMeDixA5sf6BaEmYyGZQAAhGEn3FH-TC8AoDmlrTGZQgALk6rYgAqyMl4q-dKwRG0lQH2aOyTHSpiSZqQVVgWNa5R68V_TlaytyNAEmtJjA-SwULzBIWyCnOKHkZ5DIBjC0u6nJr-Dr5dG7paPVuPFKo7RvEaYnR9xpUrZlA8fNGqqdmCSbFgnqV69L2YK9vMr4tpHJHhUe45nxcjocxlQuvipV9DBLJxuRXKdWNPURRAQG3w5XkyRYOWmu6zB2FZrTJ7E5ykM3w8i0Z_2HKpH650psBe2yCHfhZXkGJ1ttjkmK_x8SPNveyyScKIno-N6WszZdWXUTAMN9Y6EfQzK4ZY9zGkfwFur-GPIbJv62Ec6FLMFwvhFk6GkwdqCL9XvnYaP-7gif35_HE62Ej3BcGrPm-ouIL-RINCkIoGwMXtdZ4agxvtC8M8DhWzF8aoaTQiPFNvnh-O7x_nY5m_TPPxjK4vYp2-OnBeqbvmbRiAoeNqXjXpETk0B09CEuN6jIA9gSppgk-1r9eP4pBXE4';
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", tokens);
        const requestOptions: RequestInit = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/v1/payment/${reference}`, requestOptions); 
          const results = await response.text();
          console.log(results);
            
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
            const result = await response.json();  
           
            // console.log(result);
           
        } catch (error) {          
         
        }
    };
    
    useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>VerifyPayment</div>
  )
}

export default VerifyPayment