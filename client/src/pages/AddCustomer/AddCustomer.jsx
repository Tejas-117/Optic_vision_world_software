import * as React from 'react';
import { Box, Button, Card, TextField } from "@mui/material";
import {Formik, Field} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Addcustomer = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.table(values);
  };

  const [designation, setDesignation] = React.useState('');

  const handleChange = (event) => {
    setDesignation(event.target.value);
  };


  return (
    <Box m="20px">
      <Header title="New Customer Entry" subtitle="Create a New Customer Profile" />

      {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={designation}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}


      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(8 , minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span " },
              }}
            >
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Customer ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.customer_id}
                name="customer_id"
                error={!!touched.customer_id && !!errors.customer_id}
                helperText={touched.customer_id && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              /> */}


        <FormControl variant="filled" sx={{ minWidth: 120, gridColumn : "span 1" }}>
                <InputLabel id="demo-simple-select-filled-label">Designation</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={designation}
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
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 5" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Reference ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              /> */}
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
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact} 
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="date"
                label=""
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="DOB"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="date"
                label=""
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="Date of Entry"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
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
                type="text"
                label="Pincode"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="Pincode"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.categor}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 2" }}
              /> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  
const checkoutSchema = yup.object().shape({
    name: yup.string().required("Required"),
    // lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    address: yup.string().required("Required"),
    // customer_id: yup.string().required("Required"),
    age: yup.number().required("Required"),
    // category: yup.string().required("Required"),
  });

const initialValues = {
    // customer_id:"",
    name: "",
    // lastName: "",
    email: "",
    contact: "",
    address: "",
    age:"",
    DOB:"",
    // category:""    
  };
  
export default Addcustomer;