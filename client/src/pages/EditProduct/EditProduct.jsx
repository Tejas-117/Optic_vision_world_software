import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../AddProduct/AddProduct.css"

function EditProduct() {
   const { productId } = useParams();
   const navigate = useNavigate();
   
   // state to represent form fields
   const [form, setForm] = useState({
      product_code: '',
      name: '',
      category: 0,
      brand: '',
      color: '',
      size: 0,
      model_number: 0,
      quantity: 0,
      purchase_price: 0,
      selling_price: 0,
      cgst: 0,
      sgst: 0,
      net_price: 0
   });

   // function to edit a product
   async function editProduct(e) {
      e.preventDefault();

      const res = await fetch(`http://localhost:8000/products/${productId}/edit`, {
         method: 'PUT',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(form)
      })

      const data = await res.json();

      if(res.status === 200) {
         navigate(`/products`);
      }
      else {
         // TODO: display the appropriate error message
      }
   }
   
   // handle any change in form field
   function handleChange(e, type = 'string') {
      setForm({ ...form, [e.target.name]: (type === 'string') ?  e.target.value : parseInt(e.target.value) || 0 });
   }

   useEffect(() => {
      // update the net_price when other prices are changed.
      setForm({ ...form, net_price: form.selling_price + form.cgst + form.sgst })
   }, [form.selling_price, form.cgst, form.sgst])


   async function fetchProduct() {
      const res = await fetch(`http://localhost:8000/products/${productId}`);
      const { data } = await res.json();
      
      if(res.status === 200) {
         for (const [key, value] of Object.entries(data)) {
            if(value === null) {
               delete data[`${key}`]
            }
         }

         setForm({ ...form,  ...data })
         // console.table(data);
      }
   }

   useEffect(() => {
      console.table(form)
   }, [form])

   // fetch data about current product which is being edited
   useEffect(() => fetchProduct, [])

   return (
      <div className='add_product_container'>
            <h1>Edit Product</h1>

            <form className='add_product_form' action="" onSubmit={editProduct}>
               <label htmlFor="productCode">Product Code: </label>
               <input onChange={handleChange} value={form.product_code} type="text" name="product_code" required />

               <label htmlFor="name">Name: </label>
               <input onChange={handleChange} value={form.name} type="text" name="name" required />

               <label htmlFor="category">Category: </label>
               <select onChange={handleChange} value={form.category} name="category" required>
                  <option value="1">Category one</option>
                  <option value="2">Category two</option>
                  <option value="3">Category three</option>
               </select>

               <label htmlFor="brand">Brand: </label>
               <input onChange={handleChange} value={form.brand} type="text" name="brand"  />

               <label htmlFor="color">Color: </label>
               <input onChange={handleChange} value={form.color} type="text" name="color" />


               <label htmlFor="size">Size: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.size.toString()} type="number" name="size" />

               <label htmlFor="model_number">Model Number: </label>
               <input onChange={handleChange} value={form.model_number} type="text" name="model_number" />

               
               <label htmlFor="quantity">Quantity: </label>
               <input onChange={handleChange} value={form.quantity} type="text" name="quantity" />


               <label htmlFor="purchase_price">Purchase Price: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.purchase_price} type="number" name="purchase_price" required />

               <label htmlFor="selling_price">Selling Price: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.selling_price.toString()} type="number" name="selling_price" required />

               <label htmlFor="cgst">CGST: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.cgst.toString()} type="number" name="cgst" required />

               <label htmlFor="sgst">SGST: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.sgst.toString()} type="number" name="sgst" required />

               <label htmlFor="net_price">Net Price: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.net_price.toString()} type="number" name="net_price" required />

               <button>Edit Product</button>
            </form>      
      </div>
   );
}

export default EditProduct;