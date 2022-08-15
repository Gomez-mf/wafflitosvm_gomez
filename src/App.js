import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'} />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path ='/producto/:id' element={<ItemDetailContainer />} />
        <Route path ='/carrito' element={<Cart />} />   
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
