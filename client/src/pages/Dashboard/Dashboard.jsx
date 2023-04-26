import { Box, Card, CardContent, Typography, useTheme, Button } from '@mui/material';
import Header from "../../components/Header";
import Grid from '@mui/material/Grid';
import { token } from "../../theme";
import './Dashboard.css';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [invoices, setInvoices] = useState([]);

    const theme = useTheme();
    const colors = token(theme.palette.mode);

    async function fetchData(url, setData) {
        const res = await fetch(url, {
            credentials: 'include'
        });

        const data = await res.json();        
        console.log(data);

        if(res.status === 200) {
            setData(data);
        }
    }

    useEffect(() => {
        fetchData('/products/', setProducts);            
        fetchData('/bills/balance', setInvoices);
    }, [])

    return (
        <Box 
            display="flex" 
            flexDirection="column"
            gap={3}
            m = "10px"
            p = "10px"
        >
            <Header title="Welcome Back !" subtitle="You have full access to the shop's database"/>
            {/* 
                The data this page needs :
                The login time 
                number of customers visited that day
                number of bills made that day
                number of new customers made that day
                previous 5 invoice balance
                previous 5 customers visited
             */}

            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Login time: </Typography>
                            <Typography variant="h2" fontWeight="bold"> 12:56 AM </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Number of customers visited: </Typography>
                            <Typography variant="h2" fontWeight="bold"> 13 </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} > Number of bills made: </Typography>
                            <Typography variant="h2" fontWeight="bold"> 07 </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} > New customers added: </Typography>
                            <Typography variant="h2" fontWeight="bold"> 03 </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} > Recently addded Customers </Typography>
                                <TableContainer component={Paper} sx={{ my: 3 }}> 
                                    <Table aria-label='simple table'
                                    sx={{ backgroundColor : colors.blueAccent[500]}}>
                                        <TableRow>
                                            <TableCell><b>Customer ID</b></TableCell>
                                            <TableCell><b>Name</b></TableCell>
                                            <TableCell><b>Phone Number</b></TableCell>
                                            <TableCell><b>Email</b></TableCell>
                                            <TableCell><b>Entry Date</b></TableCell>
                                        </TableRow>

                                        <TableBody>

                                            {/* TODO : Iterate the recently added 5 customer info here   */}

                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor : colors.blueAccent[800]}}>
                                                <TableCell> 69 </TableCell>
                                                <TableCell> Mr. Tejas C.S. </TableCell>    {/* Concatinate the designation and the Name */}                                             <TableCell> 6784047374 </TableCell>
                                                <TableCell> Tejaschad@gmail.com </TableCell>
                                                <TableCell> 01-04-2023 </TableCell>
                                            </TableRow>
                                        </TableBody>
                                        

                                    </Table>
                                
                                </TableContainer>

                                <Box 
                                display= "flex"
                                justifyContent="end"
                                >
                                <Link to="/customers" 
                                    style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>
                                    <Button sx={{ my : 0 }} color="secondary" variant="contained">
                                        <b>Open Customer Index</b>
                                    </Button>
                                </Link>
                                </Box>                            
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Recently added invoice balances </Typography>
                            <TableContainer component={Paper} sx={{ my: 3 }}> 
                                    <Table aria-label='simple table'
                                    sx={{ backgroundColor : colors.redAccent[500]}}>
                                        <TableRow>
                                            <TableCell><b>Bill ID</b></TableCell>
                                            <TableCell><b>Name</b></TableCell>
                                            <TableCell><b>Phone Number</b></TableCell>
                                            <TableCell><b>Email</b></TableCell>
                                            <TableCell><b>Balance</b></TableCell>
                                        </TableRow>

                                        <TableBody>

                                            {/* TODO : Iterate the recently added 5 invoice balances here   */}

                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor : colors.redAccent[800]}}>
                                                <TableCell> 69 </TableCell>
                                                <TableCell> Mr. Tejas C.S. </TableCell>    {/* Concatinate the designation and the Name */}                                             <TableCell> 6784047374 </TableCell>
                                                <TableCell> Tejaschad@gmail.com </TableCell>
                                                <TableCell> Rs. 420 </TableCell>
                                            </TableRow>
                                        </TableBody>
                                        

                                    </Table>
                                
                                </TableContainer>

                                <Box 
                                display= "flex"
                                justifyContent="end"
                                >

                                <Link to="/due-reminders" 
                                    style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>
                                    <Button sx={{ my : 0 }} color="secondary" variant="contained">
                                        <b>Open Invoice Balances</b>
                                    </Button>
                                </Link>

                                </Box>                             
                        </CardContent>
                    </Card>
                </Grid>



            </Grid>
        </Box>
    )
}

export default Dashboard
