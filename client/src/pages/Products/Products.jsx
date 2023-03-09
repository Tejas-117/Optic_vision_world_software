import React, { useEffect, useState } from 'react'

function Products() {
   const [products, setProducts] = useState([]);

   // function to fetch products on page load
   async function fetchProducts() {
      const url = `http://localhost:8000/products`;
      const res = await fetch(url);
      const { data } = await res.json();

      console.log(data);
      setProducts(data);
   }

   useEffect(() => {
      fetchProducts();
   }, [])
   
   return (
      <div>
         All Products!!!

         { products.map( (product, idx) => (
            <div key={idx}>{JSON.stringify(product)}</div>
         )) }
      </div>
   );
}

export default Products;