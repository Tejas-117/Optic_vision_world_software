import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

  return (
    <div>
      Home 

      <Link to="/login">Login</Link>
      <Link to="/products">Products</Link>
      <Link to="/products/add">Add Product</Link>
      <Link to="/products/5/edit">Edit Product</Link>
    </div>
  )
}

export default Home