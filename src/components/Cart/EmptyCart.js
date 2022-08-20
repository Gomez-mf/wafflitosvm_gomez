import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className='emplycart__contenedor'>
            <h3 className='cart__titulos'>¡Tu carrito está vacío!</h3>
            <p className='cart__textos'>¿Por qué no agregas algo?</p>
            <Link to="/" className='botonCarrito'>Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart