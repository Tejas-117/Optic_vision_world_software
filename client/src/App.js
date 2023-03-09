import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Customers from "./pages/Customers/Customers";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<Customers />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="/products/add" element={<AddProduct />} />        
        <Route path="/products/:productId/edit" element={<EditProduct />} />        
      </Routes>
    </div>
  );
}

export default App;
