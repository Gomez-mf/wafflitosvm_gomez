
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const addToCart = () => {
        onAdd(cantidad)
    }
    const aumentar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const disminuir = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }

    }

    return (
        <div>
            <button disabled={cantidad === 0} className="botonCantidad" onClick={disminuir}>  -  </button><span>{cantidad}</span><button disabled={cantidad === stock} className="botonCantidad" onClick={aumentar} >  +  </button><br></br>
            <button disabled={cantidad === 0} className="botonCarrito" onClick={addToCart} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;

