import { useCartContext } from "../../Context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate } from 'react-router-dom';
import EmptyCart from "./EmptyCart";


const Cart = () => {
  const { cart, removeItem, emplyCart, getItemPrice } = useCartContext();
  
  const navigate = useNavigate()
  const handleVolver = () => {
      navigate(-1)
  }

  return (
    <section className="cart__contenedor">
      <h3 className="cart__titulos">Resúmen del carrito</h3>
      {cart.length === 0 ? <EmptyCart />

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
          {cart.map(item => (
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
        <Link to='/checkout'>
        <button className="botonCarrito">Finalizar compra</button>
        </Link>
      <div className="cart__footer">
        <button className="botonCarrito" onClick={emplyCart}>Vaciar Carrito</button>
        <button onClick={handleVolver} className="botonCarrito">Volver atrás</button>
      </div>
      </div>
      </>}
      
    </section>
  )
}

export default Cart