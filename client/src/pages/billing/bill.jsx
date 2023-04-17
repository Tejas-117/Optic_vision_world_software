import { useState,useRef,useEffect } from "react"
import ClientDetails from "./billcomponents/ClientDetails"
import Dates from "./billcomponents/Dates"
import Some from "./billcomponents/Some"
import Footer from "./billcomponents/Footer"
import Header1 from "./billcomponents/Header1"
import TableForm from "./billcomponents/TableForm"
import { CardContent, TextField, Typography, useTheme } from "@mui/material";
import { token } from "../../theme";
import { Card, Box, Button } from "@mui/material";
import Header from "../../components/Header";
import CssBaseline from '@mui/material/CssBaseline';


function Bill(){
  const [showInvoice,setShowInvoice] = useState(false)
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [invoicedate,setinvoicedate]=useState("")
  const [invoicenumber,setinvoicenumber]=useState("")
  const [accnumber,setaccnumber]=useState("")
  const [productName ,setProductName] = useState("");
  const [productPrice ,setProductPrice] = useState("");
  const [productCGST ,setProductCGST] = useState("");
  const [productSGST ,setProductSGST] = useState("");
  const [discount,setDiscount] = useState("");
  const [total,setTotal] = useState(0);

  const [quantity,setquantity]=useState("")
  const [email,setemail]=useState("")
  const [phno,setphno]=useState("");
  const [amount,setamount]=useState("");
  const [list,setList]=useState([])
  const [width] = useState(641);
  const componentRef = useRef();
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const getCustomerInfo = async(number) =>{
    try{
      //if(number.length == 10){
      console.log(number);
       const res = await fetch(`/customers/customer?phone=${number}`);
      const data = await res.json();
      console.log(data);
      
      if(res.status === 200) {
        setName(data.data.name);
        setphno(data.data.phone);
        setemail(data.data.email);
        setAddress(data.data.address)
//}
      }}
      catch(err){
        console.log(err);
      }
    }


 

  const handelPrint = () =>{
    window.print()
  }
  return (
        <Box p="20px">
        <Header title="BILLING INVOICE" subtitle="Create your bill here" />
        <Card sx={{ backgroundColor: colors.primary[400], m: 3, }}
          p="30px"
        >

          <CardContent>


            <Box
              padding="10px"
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gap="30px"
            >

              <Typography variant="h4" color={colors.greenAccent[400]} fontWeight="bolder" sx={{ gridColumn: "span 2" }}> Enter Customer details here</Typography>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Billing Address"
                value={address}
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />

        <TextField 
          fullWidth
          variant="filled"
          type="text"
          label="Phone Number"
          value = {null}
          onChange={(e) => getCustomerInfo(e.target.value)}
          sx = {{ gridcolumn : "span 1"}}
          />

              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />

              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Invoice date"
                value={invoicedate}
                onChange={(e) => setinvoicedate(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Invoice number"
                value={invoicenumber}
                onChange={(e) => setinvoicenumber(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Account number"
                value={accnumber}
                onChange={(e) => setaccnumber(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Account number"
                value={accnumber}
                onChange={(e) => setaccnumber(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />



            </Box>
          </CardContent>

        </Card>
   
    <article>
                <TableForm productName = {productName} setProductName={setProductName} productPrice={productPrice} setProductPrice={setProductPrice} productCGST={productCGST} setProductCGST={setProductCGST} productSGST={productSGST} setProductSGST={setProductSGST} total={total} setTotal={setTotal} discount={discount} setDiscount={setDiscount} amount={amount} setamount={setamount}
                 quantity = {quantity} setquantity={setquantity}
                setList={setList} list={list} /> 
    </article> 



    <main className=" p-5 xl:max-w-10xl xl:mx-auto rounded shadow">
      {showInvoice ?(
        <>
        <CssBaseline />
      
        <div ref={componentRef} className="p-5">
     <Header1 handelPrint={handelPrint}/>
    <ClientDetails name={name} address={address}/>
   <ClientDetails name={name} invoicedate={invoicedate} invoicenumber={invoicenumber} accnumber={accnumber}/>
   <Dates invoicenumber={invoicenumber} invoicedate={invoicedate} />
   {/* <Table  />      */}
   <Some productName={productName} quantity={quantity} amount={amount} productPrice={productPrice} list={list} setList={setList} />
  
   <Footer name={name} email={email} address={address} phno={phno} accnumber={accnumber}/>
   <button onClick={()=> setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duraction-300">Edit here here</button>
   </div>
   </>) :(
       <>
            <Box display="flex" justifyContent="start">
                <Button className="submitButton" type="submit" onClick={() => setShowInvoice(true)} color="secondary" variant="contained">
                  Print Bill
                </Button>
              </Box></>
          )}

      </main>
      
  
  </Box>)
}
export default Bill;