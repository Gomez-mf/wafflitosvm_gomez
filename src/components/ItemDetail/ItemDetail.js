import {useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import {useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({waffles}) => {
  const {nombre, imagen, descripcion,  precio, stock } = waffles;

  const [add, setAdd] = useState(true);
  const {addItem} = useCartContext()


   const addToCart = (cantidad)=>{
    addItem(waffles, cantidad)
    setAdd(false);

  }
  
  return (
    <div className='iteamDetail__contenedor'>
        <img className='itemDetail__imagen' src={imagen} alt="imagen del producto" />
        <div className='itemDetail__detalles'>
        <h2 className='itemDetail__titulo'>{nombre}</h2>
        <p className='itemDetail__textos'>{descripcion}<br></br>Stock disponible: {stock}<br></br>Precio ${precio}</p>
        {
          add ? <ItemCount stock={stock} initial={1} onAdd={addToCart}/> : 
          <Link to='/cart'>
          <button className='botonCarrito '>Ir al carrito</button>
          </Link>
          
        }                 
        </div> 
        
    </div>
  )
}
