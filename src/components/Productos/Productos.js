import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import imagenes from '../../img/imagenesWaffles';
import ItemCount from '../ItemCount/ItemCount';

const Productos = () => {
  return (
    <main>
      <h1 className='titulos'>Nuestros waffles</h1>
      <div className='contenedor'>
        <div className='card'>
          <ItemListContainer nombre="Waffles con frutas" descripcion={`Waffles de avena.\nRellenos con: Dulce de leche, frutillas o nutella.\nAcompañalo con frutillas, kiwis o bananas.`} imagen={imagenes.img1} precio="Precio: $350" /><ItemCount stock={10} initial={0} />
        </div>
        <div className='card'>
          <ItemListContainer nombre="Waffles con golosinas" descripcion={`Waffles de avena.\nRellenos con: Dulce de leche, frutillas o nutella.\nAcompañalo con Rocklets, oreos, kit kat, ferrero rocher.`} imagen={imagenes.img3} precio="Precio: $350" /><ItemCount stock={3} initial={1} />
        </div>
        <div className='card'>
          <ItemListContainer nombre="Waffles de jamón y queso" descripcion={`Waffles de avena.\nRellenos con: jamón y queso.\nLo podes acompañar con tomate y aderezos.`} imagen={imagenes.img2} precio="Precio: $400" /><ItemCount stock={4} initial={0} />
        </div>
      </div>
    </main>
  )
}

export default Productos;


