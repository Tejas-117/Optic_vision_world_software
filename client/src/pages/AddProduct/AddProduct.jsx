import React, { useEffect, useState } from 'react';
import { Box, Button, Card, TextField, useTheme } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import { boxShadow } from '@mui/system';
import {Formik, Field} from "formik";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import './AddProduct.css';
import Header from '../../components/Header';
import { token } from '../../theme';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

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
      <Box p = "20px">
         <Header title="ADD PRODUCT" subtitle="Enter the details of the product" />

         <Card 
               display="grid"
               m = "20px"
               >

                  <CardContent>

                     <Formik
                     sx={{ m : 0 }}
                     onSubmit={addProduct}>
                        {({
                           // values,
                           // errors,
                           // touched,
                           handleChange,
                           handleBlur,
                           // handleSubmit,
                        }) => (
                           <Box onSubmit={addProduct} >
                              <Box
                              padding="10px"
                              display="grid"
                              rowGap="30px"
                              // gridTemplateColumns="repeat(6 , minmax(0, 1fr))"
                              gridTemplateColumns="1fr 1fr"
                              
                              >

                                 <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Primary details</Typography>

                                 <Box
                                    // padding="10px"
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="1fr 1fr"
                                    // gridTemplateColumns="1fr"
                                    sx={{
                                       gridColumn: "span 2"
                                    // "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
                                    }}>
                                          
                                 <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="Product Code"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={form.product_code}
                                 // error={!!touched.name && !!errors.name}
                                 // helperText={touched.name && errors.name}
                                 sx={{ gridColumn: "span 1" }}
                              />

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="Name"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={form.name}
                                 name="Name"
                                 sx={{ gridColumn: "span 1" }}
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
                                                   <option value="1">Category one</option>
                                                   <option value="2">Category two</option>
                                                   <option value="3">Category three</option>
                                                </Select>
                                             </FormControl>

                                             <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Model Number"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={form.model_number}
                                                name="model_number"
                                                // error={!!touched.name && !!errors.name}
                                                // helperText={touched.name && errors.name}
                                                sx={{ gridColumn: "span 1" }}
                                             />
                                             
                                             <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Brand"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={form.brand}
                                                name="brand"
                                                // error={!!touched.email && !!errors.email}
                                                // helperText={touched.email && errors.email}
                                                sx={{ gridColumn: "span 1" }}
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
                                 variant="filled"
                                 type="text"
                                 label="Color"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={form.color}
                                 name="color"
                                 // error={!!touched.phone && !!errors.phone}
                                 // helperText={touched.phone && errors.phone} 
                                 sx={{ gridColumn: "span 1" }}
                              />

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="number"
                                 label="Size"
                                 onBlur={handleBlur}
                                 onChange={(e) => handleChange(e, 'integer')}
                                 value={form.size.toString()}
                                 name="size"
                                 multiline
                                 maxRows={4}
                                 // error={!!touched.address && !!errors.address}
                                 // helperText={touched.address && errors.address}
                                 sx={{ gridColumn: "span 1" }}
                              />



                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="Quantity"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={form.quantity}
                                 name="quantity"
                                 // error={!!touched.phone && !!errors.phone}
                                 // helperText={touched.phone && errors.phone} 
                                 sx={{ gridColumn: "span 1" }}
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
                                 variant="filled"
                                 type="text"
                                 label="CGST"
                                 onBlur={handleBlur}
                                 onChange={(e) => handleChange(e, 'integer')}
                                 value={form.cgst.toString()}
                                 name="cgst"
                                 // error={!!touched.phone && !!errors.phone}
                                 // helperText={touched.phone && errors.phone} 
                                 sx={{ gridColumn: "span 1" }}
                              />  

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="SGST"
                                 onBlur={handleBlur}
                                 onChange={(e) => handleChange(e, 'integer')}
                                 value={form.sgst.toString()}
                                 name="sgst"
                                 // error={!!touched.phone && !!errors.phone}
                                 // helperText={touched.phone && errors.phone} 
                                 sx={{ gridColumn: "span 1" }}
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
                                 variant="filled"
                                 type="text"
                                 label="Purchase Price"
                                 onBlur={handleBlur}
                                 onChange={(e) => handleChange(e, 'integer')}
                                 value={form.purchase_price.toString()}
                                 name="purchase_price"
                                 // error={!!touched.phone && !!errors.phone}
                                 // helperText={touched.phone && errors.phone} 
                                 sx={{ gridColumn: "span 1" }}
                              /> 

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="Selling Price"
                                 onBlur={handleBlur}
                                 onChange={(e) => handleChange(e, 'integer')}
                                 value={form.selling_price.toString()}
                                 name="selling_price"
                                 // error={!!touched.phone && !!errors.phone}
                                 // helperText={touched.phone && errors.phone} 
                                 sx={{ gridColumn: "span 1" }}
                              />  


                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="Net Price"
                                 onBlur={handleBlur}
                                 onChange={(e) => handleChange(e, 'integer')}
                                 value={form.net_price.toString()}
                                 name="net_price"
                                 // error={!!touched.phone && !!errors.phone}
                                 // helperText={touched.phone && errors.phone} 
                                 sx={{ gridColumn: "span 1" }}
                              />  


                                    </Box>

                              </Box>

                           </Box>
                        )}
                     </Formik>
                  </CardContent>
               </Card>

               <Box display="grid" mt="20px">
                  <Button sx ={{ m : 0 }} className="submitButton" type="submit" color="secondary" variant="contained" >
                              Add Product
                  </Button>
               </Box>



      {/* <Box className='add_product_container' mb="20px">

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
            </form>       */}
      {/* </Box> */}
    </Box>
   );
}

export default AddProduct;