import {Box, Button , Text, Typography,useTheme } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Formik, Field} from "formik";
import { boxShadow } from '@mui/system';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { token } from "../../theme";
import "./style.css";

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
    const handleFormSubmit = (values)=>{
        console.log(values);
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
                                  <TextField id="standard-basic" label="Customer Name" variant="outlined" size="small" 
                                  sx={{m: 2, backgroundColor:colors.primary[400] }}/>

                                  <TextField id="standard-basic" label="Phone Number" variant="outlined" size="small" 
                                  sx={{m: 2, backgroundColor:colors.primary[400] }}/>




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

                          {/* <Box  display="grid" m="20px">
                            <Typography variant="h5"mb="10px" >Spherical(SPH)</Typography>
                            <Field
                               as="select"
                               name="lsph"
                               id="lsph"
                               value={values.lsph}
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
                               onBlur={handleBlur}
                               onChange={handleChange}
                               sx={{gridColumn:"span 1"}}
                              >
                                {options(0,180,5)}
                            </Field>
                            </Box> */}


                            {/* LEFT EYE */}
                                
                                <Card
                                    display="grid"
                                    gap="50px"
                                    gridTemplateRows="repeat(3,minmax(0,2fr))"
                                    sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                                    backgroundColor: colors.primary[400], boxShadow: 3}}>
                                      <CardContent>
                                          <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Left Eye</Typography>

                                  <Box  display="grid" m="20px">
                                    <Typography variant="h5"mb="10px" >Spherical(SPH)</Typography>
                                    <Field
                                        as="select"
                                        name="sph"
                                        id="sph"
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
                                            name="cyl"
                                            id="cyl"
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
                                        name="axis"
                                        id="axis"
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
                            gridTemplateRows="repeat(3,minmax(0,2fr))"
                            sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                              backgroundColor: colors.primary[400], boxShadow: 3}}>
                                <CardContent>
                                <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Right Eye</Typography>
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
                                    name="axis"
                                    id="axis"
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
                                          placeHolder="DD-MM-YYYY"
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
                        

                          <Box display="flex" justifyContent="start" mt="30px">
                              <Button className="submitButton" type="submit" color="secondary" variant="contained">
                                    Add Prescription
                              </Button>
                          </Box>
                    </form>                )}

              </Formik>
        </Box>
    )
}

const initialValues = {
    lsph:" ",
    lcyl:" ",
    laxis:" ",
    rsph:" ",
    rcyl:" ",
    raxis:" ",
    visualAddition: " ",
    pd:" ",
    addition:" ",
    remarks:" ",
    testDate:" "
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