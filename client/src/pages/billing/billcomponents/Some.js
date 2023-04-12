import React from "react"
import {AiOutlineDelete} from "react-icons/ai";
import { Card,Box,Button,Typography,useTheme } from "@mui/material";
import { token
} from "../../../theme";
export default function Some({list,total}) {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return(
       <>
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
                        {/* <th className="h6 font-bold" scope="col">Edit/Delete</th> */}
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
                        {/* { <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td> } */}
                    



                    </tr>
                </tbody>
                </React.Fragment></>
        ))}
        </table>
        </Card>
        <div>
        <h2 className="flex items-end justify-end text-white-800 text-4xl font-bold">
           Total:- Rs {total?.toLocaleString()} /-
        </h2>
      </div>
      </>
       
    )
}