import React, {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete} from "react-icons/ai";
import { Card,Box,Button,Typography,useTheme } from "@mui/material";
import { token
 } from "../../../theme";
export default function TableForm({description,setdescription,price,setprice,amount,setamount,quantity,setquantity,list,setList,total,setTotal}){
    const theme = useTheme();
    const colors = token(theme.palette.mode);

    const handleSubmit=(e)=>{
    e.preventDefault()
    const newItems={
        id:uuidv4(),
         description,
          quantity,
         price,
         amount,
    }
    setdescription("")
    setquantity("")
    setprice("")
    setamount("")
    setList([...list,newItems])
  }
  useEffect(() => {
    const calc = (amount) => {
      setamount(quantity * price)
    }

    calc(amount)
  }, [amount, price, quantity, setamount])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })
   
   const deleteRow = (id) =>{ 
    setList(list.filter((row) => row.id !== id))}
    return(
        <>
     

       <form onSubmit={handleSubmit} style={{marginLeft:"0px"}}  >
       <Card sx={{m:"30px",
                backgroundColor:colors.primary[400],
                p:"17px",
                borderRadius:"15px",
                }} >
       <div className="flex flex-col">
       <label htmlFor="description "className="font-bold mt-1">Item description</label>
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
       <div className="flex flex-col">
      {/* <label hrmlFor="amount" className="font-bold mt-1 mb-1">Amount </label> */}
      <Typography variant="h5" m="10px" fontStyle='italic' fontWeight="bolder">Amount</Typography>
      <Typography variant="h3" m="10px 30px" mt="0px">Rs {amount} /-</Typography>
      </div>
      <Box display="flex" justifyContent="start" mt="10px" mr="60px" ml="20px">
          <Button className="submitButton" type="submit" color="secondary" variant="contained">
                              Add Item
          </Button>
      </Box>
      </Card>
       </form>
       {/* Table items */}

      <Card sx={{m:"30px",
                backgroundColor:colors.greenAccent[800],
                p:"17px",
                borderRadius:"15px",
                }} >

       <table width="100%" className="table table-hover table-striped ">
       <thead >
                    <tr className="text-white bg-success" >
                        <th className="h6 font-bold" scope="col">Item description</th>
                        <th className="h6 font-bold" scope="col">Quantity</th>
                        <th className="h6 font-bold" scope="col">Price</th>
                        <th className="h6 font-bold" scope="col">Amount</th>
                        <th className="h6 font-bold" scope="col">Edit/Delete</th>
                    </tr>

                </thead>
        {list.map(({id,description,quantity,price,amount})=>(
          <>
                
            <React.Fragment key={id}>
            
                <tbody>
                    <tr className="text-white" scope="row">
                        <td className="text-white">{description}</td>
                        <td className="text-white" >{quantity}</td>
                        <td className="text-white">{price}</td>

                        <td className="amount text-warning">{amount}</td>
                        { <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td> }
                    



                    </tr>
                </tbody>
                </React.Fragment></>
        ))}
        </table>
        </Card>
        <div>
        <h2 className="flex items-end justify-end text-white-800 text-4xl font-bold">
           Total:- Rs {total.toLocaleString()} /-
        </h2>
      </div>
       
        </>
    )
}
