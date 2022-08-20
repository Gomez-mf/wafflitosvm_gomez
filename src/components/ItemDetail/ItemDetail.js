import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';

export const ItemDetail = ({waffles}) => {
  const {nombre, imagen, descripcion,  precio, stock } = waffles;

  const [agregar, setAgregar] = useState(true);
  const {addItem} = useContext(CartContext)


   const agregarAlCarrito = (cantidad)=>{
    addItem(waffles, cantidad)
    setAgregar(false);
    console.log(cantidad)

  }
  
  return (
    <div className='iteamDetail__contenedor'>
        <img className='itemDetail__imagen' src={imagen} alt="imagen del producto" />
        <div className='itemDetail__detalles'>
        <h2 className='itemDetail__titulo'>{nombre}</h2>
        <p className='itemDetail__textos'>{descripcion}<br></br>Stock disponible: {stock}<br></br>Precio ${precio}</p>
        {
          agregar ? <ItemCount stock={stock} initial={1} onAdd={agregarAlCarrito}/> : 
          <Link to='/carrito'>
          <button className='botonCarrito '>Ir al carrito</button>
          </Link>
          
        }                 
        </div> 
        
    </div>
  )
}
