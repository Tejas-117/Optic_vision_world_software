import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import Header from '../../components/Header';
import { useTheme,Box,Button,FormControl } from '@mui/material';
import { token } from '../../theme';

function AddProduct() {
   // state to represent form fields
   const [form, setForm] = useState({
      product_code: '',
      name: '',
      category: 1,
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
   const theme = useTheme();
   const colors = token(theme.palette.mode);
   // handle any change in form field
   function handleChange(e, type = 'string') {
      setForm({ ...form, [e.target.name]: (type === 'string') ?  e.target.value : parseInt(e.target.value) || 0 });
   }

   useEffect(() => {
      // update the net_price when other prices are changed.
      setForm({ ...form, net_price: (form.selling_price + form.cgst + form.sgst) || 0 })
   }, [form.selling_price, form.cgst, form.sgst])
   
   // function to sumbit form data to the API
   async function addProduct(e) {
      e.preventDefault();
      
      const res = await fetch(`/products/add`, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
         body: JSON.stringify(form)
      });

      const data = await res.json();
      console.log(data);
   }

   useEffect(() => {
      // console.table(form)
   }, [form])
   
   // all fields: product_code, name, category(id), brand, color, size, model_number, quantity, purchase_price, selling_price, cgst, sgst, net_price

   // required fields: product_code, name, purchase_price, selling_price, cgst, sgst, net_price
   return (
      <Box m="20px">
         <Header title="ADD PRODUCT" subtitle="Enter the details of the product" />
      <Box className='add_product_container' mb="20px">

            <form action="" onSubmit={addProduct}>
               <FormControl  sx={{backgroundColor:colors.blueAccent[800],
                                   display: "flex",
                                   flexDirection: "column",
                                   width: "600px",
                                   padding: "30px",
                                   borderRadius: "20px",
                                   marginBottom: "70px",}}>

               <label htmlFor="productCode" >Product Code: </label>
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
               <input onChange={(e) => handleChange(e, 'integer')} value={form.purchase_price.toString()} type="number" name="purchase_price" required />

               <label htmlFor="selling_price">Selling Price: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.selling_price.toString()} type="number" name="selling_price" required />

               <label htmlFor="cgst">CGST: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.cgst.toString()} type="number" name="cgst" required />

               <label htmlFor="sgst">SGST: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.sgst.toString()} type="number" name="sgst" required />

               <label htmlFor="net_price">Net Price: </label>
               <input onChange={(e) => handleChange(e, 'integer')} value={form.net_price.toString()} type="number" name="net_price" required />
               <Box display="flex" justifyContent="center" mt="30px">
                  <Button className="add_product_form button" type="submit" color="secondary" variant="contained" sx={{fontWeight:"bolder",fontSize:"15px"}}>
                              ADD Product
                  </Button>
               </Box>
               </FormControl>
            </form>      
      </Box>
    </Box>
   );
}

export default AddProduct;