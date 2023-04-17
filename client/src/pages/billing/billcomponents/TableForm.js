import React, {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete} from "react-icons/ai";
import { Card,Box,Button,TextField,Typography,useTheme, CardContent } from "@mui/material";
import { token} from "../../../theme";

export default function TableForm({productName, setProductName, productPrice,setProductPrice, productCGST,setProductCGST,productSGST,setProductSGST,total,setTotal,discount,setDiscount, amount,setamount,quantity,setquantity,list,setList}){
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    
    const handleSubmit=(e)=>{
    e.preventDefault()
    const newItems={
      id:uuidv4(),
         productName,
          quantity,
         productPrice,
         amount,
    }
    setProductName(productName);
    setProductPrice(productPrice);
    setquantity(quantity)
    setamount(amount)
    setList([...list,newItems]);
    
  
  }
 // console.log(list);

    useEffect(() => { const calc = (amount) => {
      // Calculate total discount
      const total_discount = productPrice * (discount / 100);
      console.log(total_discount);

       // Calculate discounted selling price
       const discounted_selling_price = productPrice - total_discount;

       // Calculate CGST amount
       const cgst_amount = discounted_selling_price * (productCGST / 100);

       // Calculate SGST amount
       const sgst_amount = discounted_selling_price * (productSGST / 100);

       // Calculate total price
       const total_price = quantity * (discounted_selling_price + cgst_amount + sgst_amount);
      setamount(total_price.toFixed(2))
      console.log(amount);
    }

    calc(amount)

  }, [amount, productPrice,quantity,productCGST,productSGST,discount,setamount])
  
    

  // Calculate total amount of items in table
 
  
    useEffect(()=>{
      const rows = document.querySelectorAll(".amount");
      let sum = 0;
      console.log(rows)
  
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].classList.contains("text-warning")) {
          const val = parseInt(rows[i].innerHTML);
          sum += isNaN(val) ? 0 : val;
        }
      }
      console.log("SUM",sum);
  
      if (sum !== total) {
        setTotal(sum);
    }
    console.log("Totl",total);
  },[list])
  

  
  //Searching for product based on id
  const getProduct = async (id)=>{
    try{
      
      const res = await fetch(`/products/${id}`);
      const data = await res.json();
      
      console.log(data);

      if(res.status === 200) {
        setProductName(data.data.name);
        setProductPrice(data.data.selling_price);
        setProductCGST(data.data.cgst);
        setProductSGST(data.data.sgst);
 
       
      }
    }
    catch(err){
      console.log(err);
    }
    }


  

   const deleteRow = (id) =>{ 
    setList(list.filter((row) => row.id !== id))}
    return(
        <>

      <form onSubmit={handleSubmit} style={{marginLeft:"0px"}}  >
        <Card  
        sx= {{backgroundColor : colors.primary[400], m : 3 , }}
        p="30px" >

          <CardContent>
          <Box 
            padding="20px"
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gap="30px"
            >
              <Typography variant="h4" color={colors.greenAccent[400]} fontWeight="bolder" sx = {{ gridColumn : "span 2" }} > Item Details </Typography>
              <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Product ID"
                value={null}
                onChange={(e) => getProduct(e.target.value)}
                sx = {{ gridcolumn : "span 1"}}
                />

              <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                id ="description"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                sx = {{ gridcolumn : "span 1"}}
                />

              <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Item quantity"
                id ="quantity"
                value = {quantity}
                onChange={(e) => setquantity(e.target.value)}
                sx = {{ gridcolumn : "span 4"}}
                />

              <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                id ="price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                sx = {{ gridcolumn : "span 4"}}
                />

                <Box display = "flex"
                gridAutoColumns= "1fr 1fr 1fr"
                gap="30px"
                gridColumn= "span 2">

                    <TextField 
                      fullWidth
                      variant="filled"
                      type="text"
                      label="CGST"
                      id ="cgst"
                      value={productCGST}
                      onChange={(e) => setProductCGST(e.target.value)}
                      sx = {{ gridcolumn : "span 1"}}
                      />

                    <TextField 
                      fullWidth
                      variant="filled"
                      type="text"
                      label="SGST"
                      id ="sgst"
                      value={productSGST}
                      onChange={(e) => setProductSGST(e.target.value)}
                      sx = {{ gridcolumn : "span 1"}}
                      />

                    <TextField 
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Discount"
                      id ="discount"
                      value = {discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      sx = {{ gridcolumn : "span 1"}}
                      />

                </Box>

                <Box display = "flex"
                justifyContent="space-between"
                gridColumn= "span 2">

                <Box>
                      <Button className="submitButton" type="submit" color="secondary" variant="contained" mb = "0px">
                        Add Item
                      </Button>
                  </Box>

                  <Box>
                          <Typography variant="h5" color={colors.greenAccent[400]} fontWeight="bolder">Amount</Typography>
                          <Typography className="amount" fontWeight="bolder" variant="h2" mt = "0px "> Rs. {amount} /-</Typography>
                  </Box>
                </Box>

          </Box>
                
          </CardContent>

{/* 
       <div className="flex flex-col">
       <label htmlFor="description "className="font-bold mt-1"></label>
        <input type="text" name="description" id="description"
        placeholder="Item description" value={description} onChange={(e) => setdescription(e.target.value)} />
       </div>
       <div className="flex flex-col">
       <label htmlFor="quantity" className="font-bold mt-1">Item quantity</label>
        <input type="text" name="quantity" id="quantity"
        placeholder="Item quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} />
       </div>
       <div className="flex flex-col">
       <label htmlFor="price" className="font-bold mt-1">Item price</label>
        <input type="text" name="price" id="price"
        placeholder="Item price" value={price} onChange={(e) => setprice(e.target.value)} />
       </div>
       <div className="flex flex-col"> */}
      {/* <label hrmlFor="amount" className="font-bold mt-1 mb-1">Amount </label> */}
      {/* <Typography variant="h5" m="10px" fontStyle='italic' fontWeight="bolder">Amount</Typography>
      <Typography variant="h3" m="10px 30px" mt="0px">Rs {amount} /-</Typography>
      </div> */}

      </Card>
       </form>
       {/* Table items */}

      <Card  
        sx= {{backgroundColor : colors.greenAccent[800], m : 3 , }}
        p="30px" >
          <CardContent>

       <table width="100%" className="table table-hover table-striped ">
       <thead >
                    <tr className="text-white bg-success" >
                        <th className="h6 font-bold" scope="col">Item description</th>
                        <th className="h6 font-bold" scope="col">Quantity</th>
                        <th className="h6 font-bold" scope="col">Price</th>
                        <th className="h6 font-bold" scope="col">Amount</th>
                    </tr>

                </thead>
        {list.map(({id,productName,quantity,productPrice,amount})=>(
          <>
                
            <React.Fragment key={id}>
            
                <tbody>
                    <tr className="text-white" scope="row">
                        <td className="text-white">{productName}</td>
                        <td className="text-white" >{quantity}</td>
                        <td className="text-white">{productPrice}</td>

                        <td className="amount text-warning">{amount}</td>
                        <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td> 
                    



                    </tr>
                </tbody>
                </React.Fragment></>
        ))}
        </table>
     </CardContent>
        </Card>
        <div>
          
        <h2 className="flex items-end justify-end text-white-800 text-4xl font-bold">
           Total:- Rs {total} /-
        </h2>
      </div>

        </>
    )
}
