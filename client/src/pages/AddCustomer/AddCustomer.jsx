import React,{useContext} from 'react';
import { Box, Button, Card, TextField, useTheme } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import { boxShadow } from '@mui/system';
import {Formik, Field} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import { token } from "../../theme";

const Addcustomer = () => {
  const [message, setMessage] = React.useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    const res = await fetch(`/customers/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(values),
    })

    const data = await res.json();
    
    // TODO: display the message from server.
    setMessage(data.message);

    if(res.status === 200) {
      setTimeout(() => {
        navigate("/customers");        
      }, 1500);
    }
  };
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="New Customer Entry" subtitle="Create a New Customer Profile" />

      <Card
        display="grid"
        m = "20px"
        sx = {{backgroundColor : colors.primary[400], boxShadow: 3}}>
        <CardContent>

        <Formik sx={{ m : 0 }}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Box onSubmit={handleSubmit} >
            <Box
              padding="10px"
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(8 , minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
              }}
            >

              <FormControl variant="filled" sx={{ minWidth: 120, gridColumn : "span 2" }}>
                <InputLabel id="demo-simple-select-filled-label">Designation</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={values.designation}
                  name="designation"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Pastor'}>Pastor</MenuItem>
                  <MenuItem value={'Ps.'}>Ps.</MenuItem>
                  <MenuItem value={'Mr.'}>Mr.</MenuItem>
                  <MenuItem value={'Mrs.'}>Mrs.</MenuItem>
                  <MenuItem value={'Ms.'}>Ms.</MenuItem>
                  <MenuItem value={'Mas.'}>Mas.</MenuItem>
                  <MenuItem value={'Shri.'}>Shri.</MenuItem>
                  <MenuItem value={'Smt.'}>Smt.</MenuItem>
                  <MenuItem value={'Dr.'}>Dr.</MenuItem>
                  <MenuItem value={'Baby'}>Baby.</MenuItem>
                  <MenuItem value={'Bro.'}>Bro.</MenuItem>
                  <MenuItem value={'Sis'}>Sis.</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 6" }}
              />

              {/* TODO: label overlaps inside input field */}
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date of birth"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dob}
                name="dob"
                sx={{ gridColumn: "span 4" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone} 
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                multiline
                maxRows={4}
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Entry date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.entry_date}
                name="entry_date"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Reference ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.reference_id}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone} 
                sx={{ gridColumn: "span 4" }}
              />              

            </Box>

          </Box>
        )}
      </Formik>
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="start" mt="40px">
                  <Button sx ={{ m : 0 }} className="submitButton" type="submit" color="secondary" variant="contained" >
                              Create new Customer
                  </Button>
              </Box>


    </Box>
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  
const checkoutSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    address: yup.string().required("Required"),
  });

const initialValues = {
    designation: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    dob:"",
    entry_date: "",
    reference_id: ""
};
  
export default Addcustomer;