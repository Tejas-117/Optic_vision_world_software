import {Box, Button , Divider, Text, Typography,useTheme } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { token } from "../../theme";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatDate";

const CustomerPost = () =>{
    const isNonMobile = useMediaQuery("(min-width:600px");
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    
    const { customerId } = useParams();
    const [customerInfo, setCustomerInfo] = useState({});


    // fetch customer data using customerId
    async function fetchCustomer() {
      const res = await fetch(`/customers/${customerId}/history`);
      const data = await res.json();
      
      if(res.status === 200) {
        console.log(data.data);
        setCustomerInfo(data.data)
      }
    }

    useEffect(() => {
      fetchCustomer();
    }, []);

    return (
        <Box m="20px" p="10px">
            <Header title="Customer Details" subtitle="Detailed view of a customer's information." />

                    <Box
                        display="grid"
                        gap="30px"
                        my="30px"
                        // mt="30px"
                        gridTemplateColumns="3fr 2fr"
                        sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" }}}>


                          {/* Customer Details  */}

                        <Card
                          display="grid"
                          mb="30px"
                          sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                          backgroundColor: colors.primary[400], boxShadow: 3}}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" 
                                    sx= {{ mx : 3}}>
                                    <Typography variant="h1" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>{ customerInfo.designation + " " + customerInfo.name }</Typography>
                                    <Box sx={{ mx : 3 }}>
                                        <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 0 }}>Joined on:</Typography>
                                        <Typography variant="h3" fontWeight="bold">{ formatDate(customerInfo.joined_on) }</Typography>
                                    </Box>
                                </Box>

                                <Divider sx ={{ my : 2 ,  borderBottomWidth: 3 }}/>


                                <Box display="flex" justifyContent="space-between" 
                                    sx= {{ mx : 3, my : 4 }}>

                                    <Box >
                                        <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Phone Number: </Typography>
                                        <Typography variant="h3" fontWeight="bold"> { customerInfo.phone } </Typography>
                                    </Box>

                                    <Box sx= {{ mx : 2 }}>
                                        <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Email ID: </Typography>
                                        <Typography variant="h3" fontWeight="bold"> { customerInfo.email } </Typography>
                                    </Box>

                                </Box>

                                <Box display="flex" justifyContent="space-between" 
                                    sx= {{ mx : 3, my : 4 }}> 
                                    
                                    <Box>
                                        <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Address: </Typography>
                                        <Typography variant="h3" fontWeight="bold" style={{ wordWrap: "break-word" }}> { customerInfo.address } </Typography>
                                    </Box>

                                </Box>

                                <Box display="flex" justifyContent="space-between" 
                                    sx= {{ mx : 3, my : 4 }}>

                                    <Box>
                                        <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >DOB: </Typography>
                                        <Typography variant="h3" fontWeight="bold">{ formatDate(customerInfo.dob) || "-" }</Typography>
                                    </Box>

                                    <Box sx={{ mr : 8 }}>
                                        <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Reference ID: </Typography>
                                        <Typography variant="h3" fontWeight="bold">{ customerInfo.reference_id || "-" }</Typography>
                                    </Box>

                                </Box>
                
                            </CardContent>
                          </Card>

                              {/* Reminders */}

                          <Card
                              display="grid"
                              // gridTemplateRows="repeat(3,minmax(0,2fr))"
                              mb="30px"
                              sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                              backgroundColor: colors.primary[400], boxShadow: 3}}>

                                <CardContent>
                                  <Box display="flex"   justifyContent="space-between" 
                                      sx= {{ mx : 3, my : 2, flexDirection : 'column'}}> 
                                      
                                      <Box>
                                          <Typography variant="h1" fontWeight="bold" color={colors.blueAccent[500]} >Reminders </Typography>
                                      </Box>

                                      <Divider sx ={{ my : 1 ,  borderBottomWidth: 3 }}/>

                                      <Box>
                                          <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} > Dues : </Typography>

                                      </Box>

                                    <Box display="flex" justifyContent="space-between"> 
                                      <Box>
                                          <Typography variant="h6" fontWeight="bold" color={colors.blueAccent[500]} > Description:  </Typography>
                                          <Typography variant="h3" fontWeight="bold" > Glasses & Lenses </Typography>
                                      </Box>

                                      <Box 
                                      sx={{ mr : 2 }}
                                      >
                                          <Typography variant="h6" fontWeight="bold" color={colors.blueAccent[500]} > Due Amount:  </Typography>
                                          <Typography variant="h3" fontWeight="bold" > Rs. 2,300 </Typography>
                                      </Box>
                                    </Box>

                                    <Box display="flex" justifyContent="flex-start" sx={{ my : 2 }}>
                                      <Button color="secondary" variant="contained" >
                                            <Typography variant="h7" fontWeight="bold" > View details </Typography>
                                      </Button>
                                    </Box>

                                    <Divider sx ={{ my : 1 ,  borderBottomWidth: 3 }}/>

                                    <Box>
                                          <Typography variant="h3" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} > Delivery : </Typography>

                                      </Box>

                                    <Box display="flex" justifyContent="space-between"> 
                                      <Box>
                                          <Typography variant="h6" fontWeight="bold" color={colors.blueAccent[500]} > Description:  </Typography>
                                          <Typography variant="h3" fontWeight="bold" > Glasses & Lenses </Typography>
                                      </Box>

                                      <Box 
                                      // sx={{ mr : 6 }}
                                      >
                                          <Typography variant="h6" fontWeight="bold" color={colors.blueAccent[500]} > Delivery date :  </Typography>
                                          <Typography variant="h3" fontWeight="bold" > 16th April, 2023 </Typography>
                                      </Box>
                                    </Box>

                                    <Box display="flex" justifyContent="flex-start" sx={{ my : 2 }}>
                                      <Button color="secondary" variant="contained" >
                                            <Typography variant="h7" fontWeight="bold" > View details </Typography>
                                      </Button>
                                    </Box>

                                  </Box>


                                </CardContent>

                          </Card>
                    </Box>

                          <Box
                            display="grid"
                            gap="30px"
                            my="30px"
                            // mt="30px"
                            gridTemplateColumns="repeat(2,minmax(0,1fr))"
                            sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" }}}>



                            {/* Prescription history */}
                                
                                <Card
                                    display="grid"
                                    gap="50px"
                                    gridtemplaterows="repeat(3,minmax(0,2fr))"
                                    sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                                    backgroundColor: colors.primary[400], boxShadow: 3}}>
                                      <CardContent>

                                      <Box display="flex"   justifyContent="space-between" 
                                      sx= {{ mx : 3, my : 2, flexDirection : 'column'}}> 
                                      
                                          <Typography variant="h2" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Prescription history</Typography>

                                          <Box>  
                                            {/* generate everything in this container for each prescription  */}
                                          <Divider sx ={{ my : 2 ,  borderBottomWidth: 3 }}/>
                                                <Box sx= {{ my : 3 }}>
                                                  <Typography variant="h7" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" > Checked on: </Typography>
                                                  <Typography variant="h4" fontStyle="" fontWeight="bold" > { formatDate(customerInfo?.prescription?.[0]?.test_date) } </Typography>                                             
                                                </Box>

                                                <Box display= "flex" justifyContent="space-between"> 

                                                <Box>
                                                <Box>
                                                <Typography variant="h4" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]} sx={{ mb : 3 , mt : 2 }}> Left eye </Typography>
                                                </Box>

                                                <Box display= "flex" justifyContent="flex-end">

                                                  <Box sx={{ mr: 3 }}>
                                                    <Typography variant="h7" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]}> SPH </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold"> { customerInfo?.prescription?.[0]?.lsph } </Typography>
                                                  </Box>

                                                  <Box sx={{ mr: 3 }}>
                                                    <Typography variant="h7" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]}> CYL </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold"> { customerInfo?.prescription?.[0]?.lcyl } </Typography>
                                                  </Box>

                                                  <Box sx={{ mr: 3 }}>
                                                    <Typography variant="h7" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]}> Axis </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold"> { customerInfo?.prescription?.[0]?.laxis } </Typography>
                                                  </Box>

                                                </Box>
                                                </Box>

                                                <Box>
                                                <Box>
                                                <Typography variant="h4" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]} sx={{ mb : 3 , mt : 2 }}> Right eye </Typography>
                                                </Box>

                                                <Box display= "flex" justifyContent="flex-end">

                                                  <Box sx={{ mr: 3 }}>
                                                    <Typography variant="h7" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]} > SPH </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold"> { customerInfo?.prescription?.[0]?.rsph } </Typography>
                                                  </Box>

                                                  <Box sx={{ mr: 3 }}>
                                                    <Typography variant="h7" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]} > CYL </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold"> { customerInfo?.prescription?.[0]?.rcyl } </Typography>
                                                  </Box>

                                                  <Box sx={{ mr: 3 }}>
                                                    <Typography variant="h7" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]} > Axis </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold"> { customerInfo?.prescription?.[0]?.raxis } </Typography>
                                                  </Box>

                                                </Box>
                                                </Box>

                                                </Box>

                                                {/* <Typography variant="h6" fontStyle="" fontWeight="bold" color={colors.blueAccent[500]} > Additional Information </Typography> */}

                                                <Box display= "flex" justifyContent="space-between" sx={{ my : 5 }}>

                                                <Box display= "flex">
                                                  <Box sx = {{ mr : 4 }}>
                                                    <Typography variant="h7" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" > PD </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold" > { customerInfo?.prescription?.[0]?.pd || "-"} </Typography>                                             
                                                  </Box>

                                                  <Box>
                                                    <Typography variant="h7" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" > Addition </Typography>
                                                    <Typography variant="h1" fontStyle="" fontWeight="bold" > { customerInfo?.prescription?.[0]?.addition || "-"} </Typography>                                             
                                                  </Box>
                                                </Box>


                                                </Box>
                                                    <Box>
                                                      <Typography variant="h7" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" > Remarks: </Typography>
                                                      <Typography variant="h3" fontStyle="" fontWeight="bold" > { customerInfo?.prescription?.[0]?.remarks || 'no remarks' } </Typography> 
                                                    </Box>
                                                </Box>

                                                <Divider sx ={{ my : 2 ,  borderBottomWidth: 3 }}/>
                                          </Box>

                                      </CardContent>
                                </Card>

                                                            {/* Purchase History */}
                                
                                                            <Card
                                    display="grid"
                                    gap="50px"
                                    gridtemplaterows="repeat(3,minmax(0,2fr))"
                                    sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                                    backgroundColor: colors.primary[400], boxShadow: 3}}>
                                      <CardContent>

                                      <Box display="flex"   justifyContent="space-between" 
                                      sx= {{ mx : 3, my : 2, flexDirection : 'column'}}> 
                                      
                                          <Typography variant="h2" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Purchase history</Typography>

                                          <Box>  
                                            {/* generate everything in this container for each prescription  */}
                                          <Divider sx ={{ my : 2 ,  borderBottomWidth: 3 }}/>


                                                <Box sx= {{ my : 3 }}>
                                                  <Typography variant="h7" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" > Made on: </Typography>
                                                  <Typography variant="h4" fontStyle="" fontWeight="bold" > 24 December, 2022 </Typography>                                             
                                                </Box>

                                                  i need more details for this !


                                                <Divider sx ={{ my : 2 ,  borderBottomWidth: 3 }}/>
                                          </Box>
                                      </Box>
                                      </CardContent>
                                </Card>

                            </Box>
                            </Box>    
      )
}

export default CustomerPost; 