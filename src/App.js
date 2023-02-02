import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import { Route, Routes } from 'react-router-dom';
import Product from './components/product/Product';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import SignupSuccessful from './components/signup/SignupSucessful';
import Favorites from './components/favorites/Favorites';
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-success" element={<SignupSuccessful />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
