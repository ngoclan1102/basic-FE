import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './login/login.jsx';
import Wishlist from './wishlist/wishlist.jsx';
import Order from './order/order.jsx';
import Account from './account/account.jsx';
import Product from './product/listProduct.jsx';
import Detail from './product/productDetail.jsx';
import Home from './home/home.jsx';
import Cart from './cart/cart.jsx';
import Contact from './contact/contact.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/account" element={<Account />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/product" element={<Product />} />
                <Route path="/order" element={<Order />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
