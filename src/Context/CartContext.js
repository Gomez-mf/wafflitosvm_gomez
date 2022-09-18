import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const useCartContext = () =>{
  return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = (id) => {
    cart.some((producto) => producto.id === id)
  }

  const addItem = (producto, cantidad) => {
    toast('Producto agregado con éxito 😀 ', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    const newProduct = { 
      ...producto, 
      cantidad}

    if (isInCart(producto.id)) {
      const newCart = cart.map(item => {
        if (item.id === producto.id) {
          const newQuality = producto.cantidad + cantidad
          return { ...item, cantidad: newQuality}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newProduct])
    }
  }


  const removeItem = (id) => {
    toast('Producto eliminado ❌ ', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    return setCart(cart.filter(producto => producto.id !== id))

  }

  const emplyCart = () => {
    return setCart([])
  }

  const getItemQuantity = () => {
    return cart.reduce((acc, prod) => acc += prod.cantidad, 0)

  }

  const getItemPrice = () => {
    return cart.reduce((acc, prod) => acc += prod.cantidad * prod.precio, 0)
  }


  return (<CartContext.Provider value={{
    cart,
    isInCart,
    addItem,
    removeItem,
    emplyCart,
    getItemQuantity,
    getItemPrice
  }}>
    {children}
  </CartContext.Provider>)

}

export default CartContextProvider;

