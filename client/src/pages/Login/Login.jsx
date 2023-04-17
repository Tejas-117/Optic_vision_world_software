import "./Login.css";
import logo from '../../assets/LOGO.svg';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/ContextProvider";
import { Box, Button, Card, TextField, useTheme } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Header from '../../components/Header'; 
import Typography from '@mui/material/Typography';
import { token } from '../../theme';
import { Form , Formik } from "formik";   


function Login() {
    const [message, setMessage] = useState('');
    const [state, dispatch] = useContext(AppContext);
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = token(theme.palette.mode);

    const initialValues = {
        name: "",
        password: ""
    }

    async function handleFormSubmit(values) {
        setMessage('');
        console.log(values);

        const res = await fetch(`/admin/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        });
        const data = await res.json();
        setMessage(data.message);

        if(res.status === 200) {
            // save the logged in user info in the context and/or localStorage of the browser.            
            dispatch({ type: "LOGIN", payload: { user: data.user } })

            setTimeout(() => {
                navigate("/calendar");
            }, 1500);
        }
    }

    return (
        <Box height="100vh" display="flex" justifyContent="center" alignItems="center">

            <Card display="flex" width="100" sx={{ p : 3, backgroundColor : colors.primary[400], boxShadow: 3,  borderRadius: '10px'}}>
                <CardContent>

        
                    <Header title="Welcome Back !" subtitle="Enter your login details to continue with your work..." />

                        <Formik 
                            onSubmit={handleFormSubmit} 
                            initialValues={initialValues}
                        >
                        {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        }) => (
                            <Form 

                            style={{marginLeft: '0px'}}
                            >

                                <Box                             
                                display="flex" 
                                flexDirection="column" 
                                gap="30px">
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        required
                                        type="text"
                                        label="Admin Email"
                                        value={values.name}
                                        name="name"
                                        onChange={handleChange}
                                    />  

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        required
                                        type="password"
                                        label="Password"
                                        value={values.password}
                                        name="password"
                                        onChange={handleChange}
                                    />

                                    <Button sx ={{ m : 0 , width : 1 }} 
                                    display="flex" type="submit" name="submitAll" color="secondary" variant="contained" >
                                        Login
                                    </Button>

                                    { message && <Typography display="flex" paragraph={true} justifyContent="center"
                                    sx={{m : 0 }}
                                    // className="d-flex flex-row justify-content-center py-2 ovw-text-color-2 "
                                    >{message}
                                    </Typography>}
                                </Box>
                            </Form>
                        )}
                        </Formik>            
                </CardContent>
            </Card>


            {/* <div className="row"> */}
                {/* <div className="col-sm-3">
                    <div className="d-flex pb-2 m-4 mb-2 h5 border-bottom border-3 ovw-text-color-3 ">
                        Administration & Management Services </div>
                    <div className="d-flex mx-4 mb-2" style={{width: 200 +'px'}}><img className="img-fluid" src={logo} alt=""/></div>
                </div> */}

                {/* <div className="col-sm-6 align-items-center jutify-content-center" style={{height: 100+'vh'}}>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: 100+'vh'}} > 
                        <form className="d-flex flex-column ovw-bg-color-0 p-5   rounded-4 shadow" onSubmit={handleSubmit}>
                            <h1 className="h2 ovw-text-color-3">Welcome back !</h1>
                            <h4 className="h6 ovw-text-color-2 mb-5">
                                Enter your login details to continue with your work...
                            </h4>
        
                            <div className="mb-4 inptbox ">
                                <input
                                    className="form-control ovw-border-color-3"
                                    type="email text"
                                    required
                                    name="user"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <span>Username</span>
                            </div>
        
                            <div className="mb-5 inptbox ">
                                <input
                                    className="form-control ovw-border-color-3"
                                    type="password" required
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span>Password</span>
                            </div>
        
                            <input
                                className="border-0 ovw-bg-color-3 py-1 rounded"
                                type="submit"
                                name="submitAll"
                                value="Login"
                            />
                            { message && <p className="d-flex flex-row justify-content-center py-2 ovw-text-color-2 ">{message}</p>}
                        </form>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div> */}
        </Box>
    );
}

export default Login;
