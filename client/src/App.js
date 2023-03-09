import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Products from './pages/Products/Products';
import AddProduct from './pages/AddProduct/AddProduct';
import EditProduct from './pages/EditProduct/EditProduct';
import SidebarApp from  './pages/global/SidebarApp';
import Topbar from './pages/global/Topbar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Customers from "./pages/Customers/Customers";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <div className='App' >
         <SidebarApp />
          <main className='content'>
            <Topbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<Customers />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="/products/add" element={<AddProduct />} />        
        <Route path="/products/:id/edit" element={<EditProduct />} />        
      </Routes>
      </main>
    </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
