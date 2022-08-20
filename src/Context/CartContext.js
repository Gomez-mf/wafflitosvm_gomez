import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const isInCart = (id) => {
    carrito.some((producto) => producto.id === id)
  }

  const addItem = (producto, cantidad) => {

    if (isInCart(producto.id)) {
      const nuevoCarrito = carrito.map(item => {
        if (item.id === producto.id) {
          const nuevaCantidad = producto.cantidad + cantidad
          return { ...item, cantidad: nuevaCantidad }
        } else {
          return item
        }
      })
      setCarrito(nuevoCarrito)
    } else {
      const nuevoProducto = { ...producto, cantidad: cantidad }
      setCarrito([...carrito, nuevoProducto])
    }
  }


  const removeItem = (id) => {
    return setCarrito(carrito.filter(producto => producto.id !== id))

  }

  const emplyCart = () => {
    return setCarrito([])
  }

  const getItemQuantity = () => {
    return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)

  }

  const getItemPrice = () => {
    return carrito.reduce((acc, prod) => acc += prod.cantidad * prod.precio, 0)
  }


  return (<CartContext.Provider value={{
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

