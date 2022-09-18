import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import { Order } from './components/Order/Order';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'} />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path ='/products/:id' element={<ItemDetailContainer />} />
        <Route path ='/cart' element={<Cart />} /> 
        <Route path ='/checkout' element={<Checkout />} />  
        <Route path ='/order' element={<Order />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;
