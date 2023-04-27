import {Box, Button , Modal, Typography, useTheme } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import {Formik, Field} from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { token } from "../../theme";
import "./style.css";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

//SPH - Decimal - -25 to 25(0.25)
//CYL - Decimal - -6 to 6(0.25)
//Axis - Integer - 0 to 80(5)
//VA - String
//PD - Decimal - 50 to 70(0.5)
//Addition - Decimal - 0.50 to 3.50(0.25)
//Remarks - String - 0 to 200 characters
//Test date - date

const PrescriptionForm = () =>{
    const isNonMobile = useMediaQuery("(min-width:600px");
    const theme = useTheme();
    const colors = token(theme.palette.mode);

    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customer, setCustomer] = useState({});

    const [customerMessage, setCustomerMessage] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // get customer info
    async function getCustomerInfo() {
      setIsLoading(true);
      setCustomerMessage("");

      const res = await fetch(`/customers/customer?name=${customerName}&phone=${customerPhone}`);
      const data = await res.json();
      
      console.log(data);
      setCustomerMessage(data.message);

      if(res.status === 200) {
        setCustomer(data.data);
        setCustomerName(data.data.name);
        setCustomerPhone(data.data.phone);

        // setTimeout(() => setCustomerMessage(""), 2000);
      }

      setIsLoading(false);
    }

    // submit the data to the API
    async function handleFormSubmit (values) {
      setIsLoading(true);
      setMessage("");
      setOpen(true);
      
      const res = await fetch(`/prescriptions/${customer.customer_id}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(values)
      })
      
      const data = await res.json();
      
      setMessage(data.message)
      setIsLoading(false);

      setTimeout(() => {
        setOpen(false)          

        // TODO: redirect to billing
        if(res.status === 200) {
          navigate(`/billing`);
        }
      }, 2000);
    };

    return (
        <Box m="20px">
            <Header title="Add Prescription" subtitle="Enter the prescription details." />

            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}>
                {({values,handleSubmit,handleBlur,handleChange,})=>(

                    <form onSubmit={handleSubmit} >
                      <Card
                        display="grid"
                        mb="30px"
                        sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                        backgroundColor: colors.primary[400], boxShadow: 3}}>

                        <CardContent>
                            <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Customer Details</Typography>
                            <Box 
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="3fr 2fr">
                              <TextField id="customerName" label="Customer Name" variant="filled" required
                              value={customerName} onChange={(e) => setCustomerName(e.target.value)} 
                              sx={{m: 2, backgroundColor:colors.primary[400] }}/>

                              <TextField id="customerPhone" label="Phone Number" variant="filled" required
                              value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}
                              sx={{m: 2, backgroundColor:colors.primary[400] }}/>
                              <Box display="flex">
                                <Button sx={{ mx : 2 }} color="secondary" variant="contained" onClick={getCustomerInfo}>
                                    <b>Get Customer</b>
                                </Button>

                                {/* TODO: Add styling */}
                                {customerMessage}
                              </Box>

                            </Box>                            
                        </CardContent>
                      </Card>

                      <Box
                          display="grid"
                          gap="30px"
                          my="30px"
                          // mt="30px"
                          gridTemplateColumns="repeat(2,minmax(0,1fr))"
                          sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" }}}>

                        {/* LEFT EYE */}                                
                        <Card
                            display="grid"
                            gap="50px"
                            gridtemplaterows="repeat(3,minmax(0,2fr))"
                            sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                            backgroundColor: colors.primary[400], boxShadow: 3}}>
                              <CardContent>
                                  <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Left Eye</Typography>

                          <Box  display="grid" m="20px">
                            <Typography variant="h5"mb="10px" >Spherical(SPH)</Typography>
                            <Field
                                as="select"
                                name="lsph"
                                id="lsph"
                                value={values.lsph}
                                label="--select--"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{gridColumn:"span 1"}}
                              >
                                {options(-25.00,25.00,0.25)}
                            </Field>
                          </Box>
                            
                            <Box  display="grid" m="20px">
                                <Typography variant="h5"mb="10px">Cylindrical(CYL)</Typography>
                                <Field
                                    as="select"
                                    name="lcyl"
                                    id="lcyl"
                                    value={values.lcyl}
                                    label="--select--"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    sx={{gridColumn:"span 1"}}
                                  >
                                {options(-6.00,6.00,0.25)}
                                </Field>
                            </Box>
                            
                              <Box  display="grid" m="20px">
                                <Typography variant="h5"mb="10px">Axis</Typography>
                                <Field
                                    variant="filled"
                                    as="select"
                                    name="laxis"
                                    id="laxis"
                                    value={values.laxis}
                                    label="--select--"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    sx={{gridColumn:"span 1"}}
                                  >
                                    {options(0,180,5)}
                                </Field>
                              </Box>
                          </CardContent>
                        </Card>

                        {/* RIGHT EYE */}                        
                        <Card
                          display="grid"
                          gap="30px"
                          ml="40px"
                          gridtemplaterows="repeat(3,minmax(0,2fr))"
                          sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                            backgroundColor: colors.primary[400], boxShadow: 3}}>
                            <CardContent>
                                <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Right Eye
                                </Typography>

                              <Box  display="grid" m="20px">
                                <Typography variant="h5"mb="10px" >Spherical(SPH)</Typography>

                                <Field
                                  as="select"
                                  name="rsph"
                                  id="rsph"
                                  value={values.rsph}
                                  label="--select--"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  sx={{gridColumn:"span 1"}}
                                  >
                                    {options(-25.00,25.00,0.25)}
                                </Field>
                              </Box>
                            
                              <Box  display="grid" m="20px">
                                  <Typography variant="h5"mb="10px">Cylindrical(CYL)</Typography>

                                  <Field
                                    as="select"
                                    name="rcyl"
                                    id="rcyl"
                                    value={values.rcyl}
                                    label="--select--"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    sx={{gridColumn:"span 1"}}
                                    >
                                  {options(-6.00,6.00,0.25)}
                                  </Field>
                              </Box>
                            
                              <Box  display="grid" m="20px">
                                  <Typography variant="h5"mb="10px">Axis</Typography>
                                  
                                  <Field
                                      variant="filled"
                                      as="select"
                                      name="raxis"
                                      id="raxis"
                                      value={values.raxis}
                                      label="--select--"
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      sx={{gridColumn:"span 1"}}
                                    >
                                      {options(0,180,5)}
                                  </Field>
                              </Box>
                            </CardContent>
                        </Card>
                      </Box>

                      <Card
                      sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                      backgroundColor: colors.primary[400], boxShadow: 3}}>
                        <CardContent>
                          <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Visual Addition & Others Information</Typography>
                              
                              {/* <Typography variant="h3" color={colors.blueAccent[500]} fontStyle="italic" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Other Information</Typography> */}
                              <Box
                                  display="grid"
                                  gap="10px"
                                  gridTemplateColumns="repeat(3,minmax(0,1fr))"
                                  sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" }}}>
                                  <Box  display="grid" m="20px">
                                      <Typography variant="h5"mb="10px">Pupillary Distance (PD) </Typography>
                                      <Field
                                        variant="filled"
                                        as="select"
                                        name="pd"
                                        id="pd"
                                        value={values.pd}
                                      label="--select--"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        sx={{gridColumn:"span 1"}}
                                        >
                                          {options(50,70,0.5)}
                                      </Field>
                                  </Box>

                                  <Box  display="grid" m="20px">
                                    <Typography variant="h5"mb="10px">Addition</Typography>
                                      <Field
                                        variant="filled"
                                        as="select"
                                        name="addition"
                                        id="addition"
                                        value={values.addition}
                                        label="--select--"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        sx={{gridColumn:"span 1"}}
                                        >
                                          {options(0.50,3.50,0.25)}
                                      </Field>
                                  </Box>

                                  <Box  display="grid" m="10px">
                                    <Typography variant="h5"mb="10px">Test Date</Typography>
                                      <Field
                                        className="testDate"
                                        variant="filled"
                                        type="date"
                                        name="testDate"
                                        id="testDate"
                                        value={values.testDate}
                                        placeholder="DD-MM-YYYY"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        sx={{gridColumn:"span 1"}}
                                        />                            
                                  </Box>
                              </Box>

                              <Box  m="20px" >
                              <Typography variant="h5"mb="10px">Remarks</Typography>
                                <Field
                                  variant="filled"
                                  as="textarea"
                                  name="remarks"
                                  id="remarks"
                                  value={values.remarks}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  //sx={{gridColumn:"span 1"}}
                                  />                            
                              </Box>
                        </CardContent>                  
                      </Card> 
                      
                      <div>
                           <Modal
                              open={open}
                              onClose={() => setOpen(false)}
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

                      <Box display="flex" justifyContent="end" mt="30px">
                        <Button className="submitButton" style={{ margin : '0px', marginBottom : '40px' }} type="submit" color="secondary" variant="contained">
                          Add Prescription
                        </Button>
                      </Box>
                    </form>)}
            </Formik>
        </Box>
    )
}

const initialValues = {
  lsph: "-25",
  lcyl: "-6",
  laxis: "0",

  rsph: "-25",
  rcyl: "-6",
  raxis: "0",
  
  va: "",
  pd: "50",
  addition: "0.5",
  remarks: "",
  testDate: ""
}
const options = (min,max,steps)=>{
    const items= [];
    for (let i = min; i <= max; i += steps) {
      items.push(
      <option key={i} value={i}>
          {i}
      </option>);           
    }
    return items;
}

export default PrescriptionForm; 