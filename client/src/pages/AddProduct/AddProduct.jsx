import { Box, Button, Card, Modal, TextField, useTheme } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import { Form, Formik } from "formik";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './AddProduct.css';
import Header from '../../components/Header';
import { token } from '../../theme';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

function AddProduct() {
   const initialValues = {
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
   };
   const theme = useTheme();
   const colors = token(theme.palette.mode);
   const [message, setMessage] = useState("");
   const navigate = useNavigate();
   const [open, setOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(false);


   function handleClose() {
      setOpen(false)
   }
   
   // function to sumbit form data to the API
   async function handleFormSubmit(values) { 
      setMessage("Adding Product to your Inventory...");
      setOpen(true);
      setIsLoading(true);
      
      const res = await fetch(`/products/add`, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
         body: JSON.stringify(values)
      });
      
      const data = await res.json();
      setMessage(data.message);
      setIsLoading(false);      
      
      setTimeout(() => {
         setOpen(false);

         if(res.status === 200) {
            navigate("/products");
         }
      }, 2500);
   }

   // all fields: product_code, name, category(id), brand, color, size, model_number, quantity, purchase_price, selling_price, cgst, sgst, net_price
   // required fields: product_code, name, purchase_price, selling_price, cgst, sgst, net_price

   return (
      <Box p = "20px">
         <Header title="ADD PRODUCT" subtitle="Enter the details of the product" />

         <Card 
            display="grid"
            m = "20px"               
            sx = {{backgroundColor : colors.primary[400], boxShadow: 3}}
         >
            <CardContent>
               <Formik
                  initialValues={initialValues}
                  
                  onSubmit={handleFormSubmit}
               >
                  {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                  }) => (
                     <Form
                     style={{ margin : "0px" }}
                     >
                        <Box
                           padding="10px"
                           display="grid"
                           rowGap="30px"
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
                                 value={values.product_code}
                                 name="product_code"
                                 sx={{ gridColumn: "span 1" }}
                              />

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="Name"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.name}
                                 name="name"
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
                                    value={values.category}
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
                                 variant="filled"
                                 type="number"
                                 label="Model Number"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.model_number.toString()}
                                 name="model_number"
                                 sx={{ gridColumn: "span 1" }}
                              />
                              
                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="text"
                                 label="Brand"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.brand}
                                 name="brand"
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
                                 value={values.color}
                                 name="color"
                                 sx={{ gridColumn: "span 1" }}
                              />

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="number"
                                 label="Size"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.size.toString()}
                                 name="size"
                                 sx={{ gridColumn: "span 1" }}
                              />

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="number"
                                 label="Quantity"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.quantity.toString()}
                                 name="quantity"
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
                                 type="number"
                                 label="CGST"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.cgst.toString()}
                                 name="cgst"
                                 sx={{ gridColumn: "span 1" }}
                              />  

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="number"
                                 label="SGST"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.sgst.toString()}
                                 name="sgst"
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
                                 type="number"
                                 label="Purchase Price"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.purchase_price.toString()}
                                 name="purchase_price"
                                 sx={{ gridColumn: "span 1" }}
                              /> 

                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="number"
                                 label="Selling Price"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.selling_price.toString()}
                                 name="selling_price"
                                 sx={{ gridColumn: "span 1" }}
                              />  


                              <TextField
                                 fullWidth
                                 variant="filled"
                                 type="number"
                                 label="Net Price"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.net_price}
                                 name="net_price"
                                 sx={{ gridColumn: "span 1" }}
                              />  
                           </Box>
                        </Box>

                        <div>
                           <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                           >
                              <Box  
                                 flexDirection="column"
                                 display="flex"
                                 alignItems="center"
                                 height="1"
                                 justifyContent="center"
                                 sx={{ backgroundColor : "none"}}
                              >
                                 { isLoading && <Loader /> }
                                 <Typography m={2} variant="h4" color={colors.grey[100]} fontStyle="" fontWeight="bold"> {message} </Typography>
                              </Box>
                           </Modal>
                        </div>

                        <Box display="flex" justifyContent="start" mt="20px">
                           <Button style ={{ margin : '10px'}} className="submitButton" type="submit" color="secondary" variant="contained" >
                              Add Product
                           </Button>
                        </Box>
                     </Form>
                  )}
               </Formik>
            </CardContent>
         </Card>      
      </Box>
   );
}

export default AddProduct;