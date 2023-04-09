import { useContext, useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import AddProduct from './pages/AddProduct/AddProduct';
import EditProduct from './pages/EditProduct/EditProduct';
import Topbar from './pages/global/Topbar';
import Calendar from './pages/Calendar';
import Bill from './pages/billing/bill';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import PrescriptionForm from './pages/AddPrescription';
import AlternateSidebar from './pages/global/AlternateSidebar';
import CustomerIndex from './pages/CustomerIndex';
import Invoices from './pages/Invoices';
import Addcustomer from './pages/AddCustomer/AddCustomer';
import CustomerPost from './pages/CustomerPost/CustomerPost';
import { AppContext } from './context/ContextProvider';
import ProductIndex from './pages/ProductIndex/ProductIndex';
import RequireAuth from './utils/RequireAuth';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, colorMode] = useMode();
  const [_,dispatch] = useContext(AppContext);
  const navigate = useNavigate();

  // Authenticate user on each refresh
  async function authenticateUser() {
    const res = await fetch(`/admin/authenticate`, {
      method: "GET",
      credentials: "include"
    });
    const data = await res.json();
    console.log(data);
    console.log(res.status);

    if(res.status !== 200) {
      // redirect user to login page
      dispatch({ type: "LOGOUT", payload: null });
      console.log('here');
      navigate("/login");
    } 
    else {
      // if user is already logged in, save it in context
      dispatch({ type: "LOGIN", payload: { user: data.user } })
    }

    setIsLoading(false);
  }

  useEffect(() => { authenticateUser() }, [])  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={theme.palette.mode === "dark" ? 'app-dark-mode' : 'app-light-mode'} >
          <AlternateSidebar />
            <main className='content'>
              <Topbar />

            {
              !isLoading && 

              <Routes>
                <Route path='/' element={<Login />} />
                <Route path="/login" element={<Login />} />
                
                <Route path="/calendar" element={
                  <RequireAuth>
                    <Calendar />
                  </RequireAuth>
                } />

                <Route path="/billing" element={
                  <RequireAuth>
                    <Bill />
                  </RequireAuth>
                } />
                <Route path="/products/add" element={
                  <RequireAuth>
                    <AddProduct />
                  </RequireAuth>
                } />        
                <Route path="/products/:productId/edit" element={
                  <RequireAuth>
                    <EditProduct />
                  </RequireAuth>
                } />    

                <Route path="/prescription" element={
                  <RequireAuth>
                    <PrescriptionForm />
                  </RequireAuth>
                } />       
                
                <Route path ="/customers" element={
                  <RequireAuth>
                    <CustomerIndex />
                  </RequireAuth>
                } />
                <Route path ="/customers/add" element={
                  <RequireAuth>
                    <Addcustomer />
                  </RequireAuth>
                } />
                <Route path ="/customers/:customerId" element={
                  <RequireAuth>
                    <CustomerPost />
                  </RequireAuth>
                } />
                <Route path ="/products" element={
                  <RequireAuth>
                    <ProductIndex />
                  </RequireAuth>
                } />
                
                <Route path ="/invoices" element={<Invoices />} />
              </Routes>
            }
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
