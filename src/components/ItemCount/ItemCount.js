import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [numero, setNumero] = useState(initial);

    const agregarAlCarrito = () => {
        onAdd(numero)
    }
    const aumentar = () => {
        if (numero < stock) {
            setNumero(numero + 1)
        }
    }

    const disminuir = () => {
        if (numero > 0) {
            setNumero(numero - 1)
        }

    }

    return (
        <div>
            <button disabled={numero === 0} className="botonCantidad" onClick={disminuir}>  -  </button><span>{numero}</span><button disabled={numero === stock} className="botonCantidad" onClick={aumentar} >  +  </button><br></br>
            <button disabled={numero === 0} className="botonGral" onClick={agregarAlCarrito} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;

