import { useCartContext } from "../../Context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import EmptyCart from "./EmptyCart";


const Cart = () => {
  const { carrito, removeItem, emplyCart, getItemPrice } = useCartContext()

  return (
    <section className="cart__contenedor">
      <h3 className="cart__titulos">Resúmen del carrito</h3>
      {carrito.length === 0 ? <EmptyCart />

      : <>
      <div className='cart__contenedorProductos'>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          {carrito.map(item => (
            <tbody key={item.id}>
              <tr>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio}</td>
                <td onClick={()=> removeItem(item.id)}><FontAwesomeIcon icon={faTrash}/></td>
              </tr>
            </tbody>
          ))}
        </table>
        <p className="cart__total">Total: ${getItemPrice()}</p>
      <div className="cart__footer">
        <button className="botonCarrito">Finalizar compra</button>
        <button className="botonCarrito" onClick={emplyCart}>Vaciar Carrito</button>
        <Link to="/">
        <button className="botonCarrito">Volver atrás</button>
        </Link>     
      </div>
      </div>
      </>}
      
    </section>
  )
}

export default Cart