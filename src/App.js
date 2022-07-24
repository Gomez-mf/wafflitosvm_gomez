import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import imagenes from'./img/imagenesWaffles';
import Footer from'./components/Footer/Footer';

function App(){
  return (
          <>
            <Navbar />
            <main>
              <h1 className='titulos'>Nuestros waffles</h1>
              <div className='contenedor'>
                <ItemListContainer nombre="Waffles con frutas" descripcion={`Waffles de avena.\nRellenos con: Dulce de leche, frutillas o nutella.\nAcompañalo con frutillas, kiwis o bananas.`} imagen={imagenes.img1} precio="Precio: $350"  />
                <ItemListContainer nombre="Waffles de jamón y queso" descripcion={`Waffles de avena.\nRellenos con: jamón y queso.\nLo podes acompañar con tomate y aderezos.`} imagen={imagenes.img2} precio="Precio: $400" />
                <ItemListContainer nombre="Waffles con golosinas" descripcion={`Waffles de avena.\nRellenos con: Dulce de leche, frutillas o nutella.\nAcompañalo con Rocklets, oreos, kit kat, ferrero rocher.`} imagen={imagenes.img3} precio="Precio: $350" />
                </div>
            </main>
            <Footer />
          </>
  )
}

export default App;
