import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import { Order } from './components/Order/Order';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'} />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path ='/producto/:id' element={<ItemDetailContainer />} />
        <Route path ='/carrito' element={<Cart />} /> 
        <Route path ='/checkout' element={<Checkout />} />  
        <Route path ='/orden' element={<Order />} />
      </Routes>
      <Footer />
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;
