import { useState, useRef, useEffect } from "react"
import ClientDetails from "./billcomponents/ClientDetails"
import Dates from "./billcomponents/Dates"
import Some from "./billcomponents/Some"
import Footer from "./billcomponents/Footer"
import Header1 from "./billcomponents/Header1"
import TableForm from "./billcomponents/TableForm"
import { CardContent, FormControl, Grid, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { token } from "../../theme";
import { Card, Box, Button } from "@mui/material";
import Header from "../../components/Header";
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';

// TODO: Add another box in billing form to input payment details

function Bill(){
  const [showInvoice,setShowInvoice] = useState(false)

  const [customerId, setCustomerId] = useState("");
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [invoicedate,setinvoicedate]=useState("");
  const [invoicenumber,setinvoicenumber]=useState("")
  const [accnumber,setaccnumber]=useState("");

  const [productCode, setProductCode] = useState("");
  const [productName ,setProductName] = useState("");
  const [productPrice ,setProductPrice] = useState("");
  const [productCGST ,setProductCGST] = useState("");
  const [productSGST ,setProductSGST] = useState("");
  const [discount,setDiscount] = useState(0);
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

  const [prescription, setPrescription] = useState(null);
  const [prescriptionCharge, setPrescriptionCharge] = useState(0);

  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(invoicedate);
    console.log(typeof(invoicedate));
  }, [invoicedate])

  const getCustomerInfo = async(number) =>{
    setphno(number);

    try{
      const res = await fetch(`/customers/customer?phone=${number}`);
      const data = await res.json();
      
      if(res.status === 200) {
        setName(data.data.name);
        setemail(data.data.email);
        setAddress(data.data.address);
        setCustomerId(data.data.customer_id);
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const Print = () =>{    
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents; 
  }
 

  const handelPrint = () =>{
    window.print()
  }

  // function to fetch prescription
  const fetchPrescription = async (e) => {
    e.preventDefault();

    if(!customerId || customerId < 1) return;

    const res = await fetch(`/customers/${customerId}/prescription`);
    const data = await res.json();

    if(res.status === 200) {
      setPrescription(data.prescription);
    }
  }

  // function to add bill
  const addBill = async (e) => {
    e.preventDefault();
    // setShowInvoice(true);

    const postData = {
      orderItems: list,
      amount: 0,
      cgst: 0,
      sgst: 0,
      discount: 0,
      net_price: 0,
      amount_paid: 0,
      balance: 0,
      payment_method: "cash"
    }

    // Compute overall values of different fields and then submit data 
    list.forEach((order_item) => {
      postData.amount += order_item.productPrice;
      postData.cgst += order_item.cgst;
      postData.sgst += order_item.sgst;
      postData.discount += parseInt(isNaN(order_item.discount) || 0);
      postData.net_price += parseInt(order_item.sub_total);
      postData.amount_paid = postData.net_price;
    })

    const res = await fetch(`/bills/add?customer_id=${customerId}&prescription_id=${prescription.prescription_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(postData)
    })

    const data = await res.json();

    if(res.status === 200) {
      setMessage("Successfully generated bill!!")
    }
  }

  return (
<>
    <main className="xl:max-w-10xl xl:mx-auto rounded shadow">
      {showInvoice ?(
        <>
        <div id='printablediv'>
        <CssBaseline />
      
        <div ref={componentRef} className="p-5">
     <Header1 handelPrint={handelPrint} Print={Print}/>
    {/* <ClientDetails name={name} address={address}/> */}
   <ClientDetails name={name} invoicedate={invoicedate} invoicenumber={invoicenumber} accnumber={accnumber} address={address}/>
   <Dates invoicenumber={invoicenumber} invoicedate={invoicedate} />
   {/* <Table  />      */}
   <Some productName={productName} quantity={quantity} amount={amount} productPrice={productPrice} list={list} setList={setList} total={total} />
  
   <Footer name={name} email={email} address={address} phno={phno} accnumber={accnumber}/>
   </div>
   <button onClick={()=> setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duraction-300">Edit here</button>
   </div>
   
   </>) :(
    <>
       
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
                value = {phno}
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
                InputLabelProps={{ shrink: true }}
                value={invoicedate}
                onChange={(e) => setinvoicedate(e.target.value)}
                sx={{ gridcolumn: "span 1" }} />
            </Box>
          </CardContent>

        </Card>

        {/* fetch latest prescription of the customer */}
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
            <Typography variant="h4" color={colors.greenAccent[400]} fontWeight="bolder" sx={{ gridColumn: "span 2" }}> Fetch recent prescription</Typography>

                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Prescription Id"
                  value={prescription ? prescription.prescription_id : -1}
                />

                <TextField  
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Prescription charge"
                  value={prescriptionCharge}
                  onChange={(e) => setPrescriptionCharge(parseInt(!(e.target.value) ? 0 : e.target.value))}
                />

              <Button className="submitButton" onClick={fetchPrescription} color="secondary" variant="contained">
                Fetch Prescription
              </Button>
            </Box>
          </CardContent>
        </Card>



        <article>
          <TableForm prescriptionCharge={prescriptionCharge} productCode={productCode} setProductCode={setProductCode}  productName = {productName} setProductName={setProductName} productPrice={productPrice} setProductPrice={setProductPrice} productCGST={productCGST} setProductCGST={setProductCGST} productSGST={productSGST} setProductSGST={setProductSGST} total={total} setTotal={setTotal} discount={discount} setDiscount={setDiscount} amount={amount} setamount={setamount}
          quantity = {quantity} setquantity={setquantity}
          setList={setList} list={list} /> 
        </article> 

        <Card sx={{ backgroundColor: colors.primary[400], m: 3, }}
          p="30px">
          <CardContent>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <Typography variant="h4" color={colors.greenAccent[400]} fontWeight="bolder" sx={{ my : 2 }}> Payment details </Typography>
              </Grid>

              <Grid item xs={4}>
                <FormControl variant="filled" sx={{ minWidth: 1 }}>
                  <InputLabel id ="demo-simple-select-filled-label">Payment Method</InputLabel>
                    <Select 
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    name="Payment Method"
                    // value={}
                    // onChange={}
                    >
                      <MenuItem value="UPI"> UPI </MenuItem>
                      <MenuItem value="Cash" selected > Cash </MenuItem>
                      <MenuItem value="Card"> Card </MenuItem>
                    </Select>

                </FormControl> 
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Amount Paid"
                  // value={}
                  // id=""
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Balance Amount"
                  // value={}
                  // id=""
                />
              </Grid>
              
            </Grid>


          </CardContent>
        </Card>

          <Box display="flex" justifyContent="en">
            <Button 
              className="submitButton" 
              type="submit" 
              onClick={(e) => addBill(e)} 
              color="secondary" 
              variant="contained"
              style={{ margin : "0px 20px"}}
            >
              Print Bill
            </Button>

            <Button 
              className="submitButton" 
              type="submit" 
              // onClick=
              color="secondary" 
              variant="contained"
              style={{ margin : "0px 20px"}}
            >
              Save as draft
            </Button>



            {message}
          </Box>
          </Box>
        </>
      )}
      </main>  
    </>
  )
}
export default Bill;