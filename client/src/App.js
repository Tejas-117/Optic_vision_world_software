import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Customers from "./pages/Customers/Customers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Customers" element={<Customers />} />          
      </Routes>
    </div>
  );
}

export default App;
