
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="mens" />} />
          <Route path='/womens' element={<ShopCategory category="womens" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          <Route path='/product/:productID' element={<Product/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<LoginSignup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
