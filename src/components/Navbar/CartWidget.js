import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const {getItemQuantity} = useContext(CartContext)
  return (
    <span>{getItemQuantity()}<FontAwesomeIcon icon={faCartShopping}/></span>    
  )
}

export default CartWidget;