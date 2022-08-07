import Navbar from './components/Navbar/Navbar';
import Footer from'./components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App(){
  return (
          <>
            <Navbar />
            <ItemListContainer greeting={"Nuestros productos"}/>
            <ItemDetailContainer />
            <Footer />
          </>
  )
}

export default App;
