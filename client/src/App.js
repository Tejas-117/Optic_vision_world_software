import { useContext, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Products from './pages/Products/Products';
import AddProduct from './pages/AddProduct/AddProduct';
import EditProduct from './pages/EditProduct/EditProduct';
import SidebarApp from  './pages/global/SidebarApp';
import Topbar from './pages/global/Topbar';
import Calendar from './pages/Calendar';
import Bill from './pages/billing/bill';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import PrescriptionForm from './pages/AddPrescription';
import AlternateSidebar from './pages/global/AlternateSidebar';
import Contacts from './pages/Contacts';
import Invoices from './pages/Invoices';
import Addcustomer from './pages/AddCustomer/AddCustomer';
import CustomerPost from './pages/CustomerPost/CustomerPost';
import { AppContext } from './context/ContextProvider';

function App() {
  const [theme, colorMode] = useMode();
  const [_, dispatch] = useContext(AppContext);
  const navigate = useNavigate();

  // Authenticate user on each refresh
  async function authenticateUser() {
    const res = await fetch(`/admin/authenticate`, {
      method: "GET",
      credentials: "include"
    });
    const data = await res.json();

    if(res.status !== 200) {
      // redirect user to login page
      dispatch({ type: "LOGOUT", payload: null });
      navigate("/login");
    } 
    else {
      // if user is already logged in, save it in context
      dispatch({ type: "LOGIN", payload: { user: data.user} })
    }
  }

  useEffect(() => { authenticateUser() }, [])  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={theme.palette.mode === "dark" ? 'app-dark-mode' : 'app-light-mode'} >
          <AlternateSidebar />
          {/* <SidebarApp /> */}
            <main className='content'>
              <Topbar />

            <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/alternateSidebar" element={<AlternateSidebar />} /> */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/billing" element={<Bill />} />

              <Route path="/products" element={<Products />} /> 
              <Route path="/products/add" element={<AddProduct />} />        
              <Route path="/products/:productId/edit" element={<EditProduct />} />    

              <Route path="/prescription" element={<PrescriptionForm />} />       
              
              <Route path ="/customers" element={<Contacts />} />
              <Route path ="/customers/add" element={<Addcustomer />} />
              <Route path ="/customers/view" element={<CustomerPost />} />
              
              <Route path ="/invoices" element={<Invoices />} />
            </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
