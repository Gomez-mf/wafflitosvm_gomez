import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {carrito, getItemQuantity} = useCartContext()
  return (<Link to="/carrito">
  {
    carrito.length === 0 ? <span><FontAwesomeIcon icon={faCartShopping}/></span> : <span>{getItemQuantity()}<FontAwesomeIcon icon={faCartShopping}/></span>  
  }
  </Link>
)
}

export default CartWidget;