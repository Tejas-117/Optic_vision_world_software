import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../AddProduct/AddProduct.css"
import Header from '../../components/Header';
import { Box, Button, Card, TextField,  FormControl } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {useTheme} from "@mui/material";
import { token } from '../../theme';
import { Form, Formik } from "formik";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Loader from "../../components/Loader/Loader";
import MenuItem from '@mui/material/MenuItem';

function EditProduct() {
   const { productId } = useParams();
   console.log();
   const theme = useTheme();
   const colors = token(theme.palette.mode);
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

      const res = await fetch(`/products/${productId}/edit`, {
         method: 'PUT',
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
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
      const res = await fetch(`/products/${productId}`);
      const { data } = await res.json();
      
      if(res.status === 200) {
         for (const [key, value] of Object.entries(data)) {
            if(value === null) {
               delete data[`${key}`]
            }
         }

         setForm({ ...form,  ...data })
         console.table(data);
      }
   }

   useEffect(() => {
      console.table(form)
   }, [form])

   // fetch data about current product which is being edited
   useEffect(() => fetchProduct, [])

   return (
      <Box p="20px">
         <Header title="EDIT PRODUCT" subtitle="Modify the product details" style={{ gridColumn: "span 2"}} />

      <Box  mb="20px">

               <Card
               display="grid"
               m = "20px"       
               gap="30px"        
               sx = {{backgroundColor : colors.primary[400], boxShadow: 3}}
               >
               <CardContent >

                  <form action="" onSubmit={editProduct} style={{ margin: "0px"}}>
                  <FormControl  
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     width: "100%",
                     }}>

                     <Box
                        padding="10px"
                        display="grid"
                        rowGap="30px"
                        gridTemplateColumns="1fr 1fr" 
                     >

                     <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Primary details</Typography>
                     <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="1fr 1fr"
                        sx={{gridColumn: "span 2"}}
                     >

                                 <TextField 
                                    fullWidth
                                    type="text"
                                    name="product_code"
                                    variant='filled'
                                    label="Product Code"
                                    value={form.product_code}
                                    onChange={handleChange}
                                    required 
                                 />

                                 <TextField 
                                    fullWidth
                                    type="text"
                                    name="name"
                                    variant='filled'
                                    label='Name'
                                    value = {form.name}
                                    onChange={handleChange}
                                    required 
                                 />
                     </Box>

                     <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="1fr 1fr 1fr"
                        sx={{
                        gridColumn: "span 2"
                     }}>



                              <FormControl variant="filled" sx={{ minWidth: 120, gridColumn : "span 1" }}>
                                 <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                                 <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={form.category}
                                    name="category"
                                    onChange={handleChange}
                                 >
                                    <MenuItem value="1" >Category one</MenuItem>
                                    <MenuItem value="2">Category two</MenuItem>
                                    <MenuItem value="3" selected>Category three</MenuItem>
                                 </Select>
                              </FormControl>

                              <TextField 
                                 fullWidth
                                 type="text"
                                 name="model_number"
                                 variant='filled'
                                 label='Model Number'
                                 value = {form.model_number}
                                 onChange={handleChange}
                              />

                              <TextField 
                                 fullWidth
                                 type="text"
                                 name="brand"
                                 variant='filled'
                                 label='Brand'
                                 value = {form.brand}
                                 onChange={handleChange}
                              />
                     </Box>

                     <Divider display="grid" sx ={{ my : 1 ,  borderBottomWidth: 3, gridColumn : "span 2" }}/>
                     <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Secondary details</Typography>

                                                
                     <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="1fr 1fr 1fr"
                        sx={{
                        gridColumn: "span 2"
                     }}>

                              <TextField 
                                 fullWidth
                                 type="text"
                                 name="color"
                                 variant='filled'
                                 label='Color'
                                 value = {form.color}
                                 onChange={handleChange}
                              />

                              <TextField 
                                 fullWidth
                                 type="number"
                                 name="size"
                                 variant='filled'
                                 label='Size'
                                 value = {form.size.toString()}
                                 onChange={handleChange}
                              />

                              <TextField 
                                 fullWidth
                                 type="number"
                                 name="quantity"
                                 variant='filled'
                                 label='Quantity'
                                 value = {form.quantity.toString()}
                                 onChange={handleChange}
                              />
                     </Box>

                     <Divider display="grid" sx ={{ my : 1 ,  borderBottomWidth: 3, gridColumn : "span 2" }}/>
                     <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Pricing details</Typography>

                     <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="1fr 1fr"
                        sx={{
                        gridColumn: "span 2"
                     }}>

                              <TextField 
                                 fullWidth
                                 type="number"
                                 name="cgst"
                                 variant='filled'
                                 label='CGST'
                                 value = {form.cgst.toString()}
                                 onChange={handleChange}
                                 required 
                              />

                              <TextField 
                                 fullWidth
                                 type="number"
                                 name="sgst"
                                 variant='filled'
                                 label='SGST'
                                 value = {form.sgst.toString()}
                                 onChange={handleChange}
                                 required 
                              />
                     </Box>

                     <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="1fr 1fr 1fr"
                        sx={{
                        gridColumn: "span 2"
                     }}>

                              <TextField 
                                 fullWidth
                                 type="number"
                                 name="purchase_price"
                                 variant='filled'
                                 label='Purchase Price'
                                 value = {form.purchase_price.toString()}
                                 onChange={handleChange}
                                 required 
                              />


                              <TextField 
                                 fullWidth
                                 type="number"
                                 name="selling_price"
                                 variant='filled'
                                 label='Seliing Price'
                                 value = {form.selling_price.toString()}
                                 onChange={handleChange}
                                 required 
                              />

                              <TextField 
                                 fullWidth
                                 type="number"
                                 name="net_price"
                                 variant='filled'
                                 label='Net Price'
                                 value = {form.net_price.toString()}
                                 onChange={handleChange}
                                 required 
                              />
                              

                     </Box>
                  </Box>

                  <Box display="flex" justifyContent="end" mt="20px">
                           <Button style ={{ margin : '10px'}} className="submitButton" type="submit" color="secondary" variant="contained" >
                              Edit Product
                           </Button>
                                    {/* TODO: Style it properly */}
                                    {/* { isLoading && <Loader /> }
                  <Box display="grid" mt="20px">{message}</Box> */}
               </Box>

                  </FormControl>
               </form>      

               </CardContent>

            </Card>

      </Box>
   </Box>
   );
}

export default EditProduct;