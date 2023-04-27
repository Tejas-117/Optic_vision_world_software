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
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function Dashboard() {
    const [invoiceBalance, setInvoiceBalances] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    const theme = useTheme();
    const colors = token(theme.palette.mode);

    async function fetchData(url, setData) {
        const res = await fetch(url, {
            credentials: 'include'
        });

        const { data } = await res.json(); 

        if(res.status === 200) {
            setData(data);
        }
    }

    useEffect(() => {
        fetchData('/bills/balance', setInvoiceBalances);
        fetchData('/customers', setCustomers);
        fetchData('/products', setProducts);
    }, [])

    function compareCustomers(customerA, customerB) {
        if(parseInt(customerA.customer_id) < parseInt(customerB.customer_id)) {
            return 1;
        }

        return -1;
    }

    function compareInvoices(invoiceA, invoiceB) {
        if(parseInt(invoiceA.bill_id) < parseInt(invoiceB.bill_id)) {
            return 1;
        }

        return -1;
    }

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
                {/* <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Login time: </Typography>
                            <Typography variant="h2" fontWeight="bold"> 12:56 AM </Typography>
                        </CardContent>
                    </Card>
                </Grid> */}

                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} >Number of customers: </Typography>
                            <Typography variant="h2" fontWeight="bold"> { customers?.length } </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} > Number of products: </Typography>
                            <Typography variant="h2" fontWeight="bold"> 
                                { products?.length }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[500]} sx={{ my : 1 }} > New customers added: </Typography>
                            <Typography variant="h2" fontWeight="bold">
                                { 
                                    customers?.reduce((count, customer, idx, customers) => {
                                        const customerJoinDate = new Date(customer.joined_on);
                                        const currDate = new Date();
                                        let addedToday = false;

                                        if((currDate.getFullYear() === customerJoinDate.getFullYear())
                                            && (currDate.getMonth() === customerJoinDate.getMonth()) 
                                            && (currDate.getDate() - customerJoinDate.getDate() <= 1)) {
                                            addedToday = true;
                                        }

                                        return (addedToday ? count + 1 : count)
                                    }, 0)
                                }
                            </Typography>
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
                                            {
                                                customers?.sort(compareCustomers).slice(0, 5).map((customer, idx) => {
                                                    return ( 
                                                        <TableRow key={customer.customer_id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor : colors.blueAccent[800]}}>
                                                            <TableCell> { customer.customer_id } </TableCell>
                                                            <TableCell> { (customer.designation ? customer.designation : "") + " " + customer.name } </TableCell>
                                                            <TableCell> { customer.phone } </TableCell>
                                                            <TableCell> { customer.email } </TableCell>
                                                            <TableCell> { customer.joined_date }  </TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
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

                                            {
                                                invoiceBalance?.sort(compareInvoices).slice(0, 5).map((invoice, idx) => (
                                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor : colors.redAccent[800]}}>
                                                        <TableCell> { invoice.bill_id } </TableCell>
                                                        <TableCell> { (invoice.designation ? invoice.designation : "") + " " + invoice.name } </TableCell>    <TableCell> { invoice.phone } </TableCell>
                                                        <TableCell> { invoice.email } </TableCell>
                                                        <TableCell> Rs. { invoice.balance } </TableCell>
                                                    </TableRow>
                                                ))
                                            }
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
