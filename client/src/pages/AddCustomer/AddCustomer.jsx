import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
const Addcustomer = () => {
  const [form, setForm] = useState({
    Customer_id: '',
    First_name: '',
    Last_name: '',
    Contact_n: 0,
    Age: 0,
    Address: '',
    email: '',
    category: 0,
 });
 function handleChange(e, type = 'string') {
  setForm({ ...form, [e.target.name]: (type === 'string') ?  e.target.value : parseInt(e.target.value) || 0 });
}
async function addCustomer(e) {
  e.preventDefault();
  
  const res = await fetch(`http://localhost:8000/customer/add`, {
     method: 'POST',
     headers: {
        "Content-Type": "application/json",
     },
     body: JSON.stringify(form)
  });

  const data = await res.json();
  console.log(data);
}
useEffect(() => {
  console.table(form)
}, [form])

  const unique_id = uuid();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="New Customer Entry" subtitle="Create a New Customer Profile" />

      <Formik
        onSubmit={addCustomer}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <form onSubmit={addCustomer}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span " },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="customer id"
                
                onChange={handleChange}
                
                value={form.Customer_id}
                name="customerid"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                
                onChange={handleChange}
                value={form.First_name}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                
                onChange={handleChange}
                value={form.Last_name}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                
                onChange={handleChange}
                value={form.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                
                onChange={handleChange}
                value={form.Contact_n}
                name="contact"
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                
                onChange={handleChange}
                value={form.Address}
                name="address"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Age"
                
                onChange={handleChange}
                value={form.Age}
                name="Age"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Category"
                
                onChange={handleChange}
                value={form.category}
                name="category"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
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
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  
export default Addcustomer;