import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCreditCard, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { useCartContext } from '../../Context/CartContext';
import { Order } from '../Order/Order';

const Checkout = () => {

    const {carrito, getItemPrice, emplyCart} = useCartContext()
    const [ordenId, setOrdenId] = useState(null);
    const [order, setOrder] = useState([])
    const [enviar, setEnviar] = useState(false)

    const [datos, setDatos ] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: ""
    
    })
    const obtenerDatos = (e) => {
        e.preventDefault()
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    
    }
    const enviarFormulario = (e) =>{
        e.preventDefault()
        const orden = {
            item: carrito.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: getItemPrice(),
            buyer: datos,
            date: serverTimestamp()
        }
        const ordenesColeccion = collection(db, "ordenes")
        const consultaOrden = addDoc(ordenesColeccion, orden)
        
        setEnviar(true)
        consultaOrden
        .then((res)=>{
            setOrdenId(res.id)
            setOrder(orden)
        })
        .catch((error)=>{
            console.log('ERROR', error)
        })
        .finally(()=>{
            emplyCart()
        })
    
        } 
    
  return (
    enviar ? <Order order={order} id={ordenId} /> :
    <div className='formulario__contenedor'>
        <h3 className='formulario__titulos'>Ingrese sus datos</h3>
        <form onSubmit={(e) => enviarFormulario(e)}>
            <p className='formulario__campos'>
                <label >Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" name='nombre' value={datos.nombre} required onChange={obtenerDatos} />
            </p>
            <p className='formulario__campos'>
            <label>Apellido</label>
            <input type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" value={datos.apellido} onChange={obtenerDatos} required></input>
            </p>
            <p className='formulario__campos'>
            <label>Email</label>
            <input type="text" name="email" id="email" placeholder="wafflitos@gmail.com"  value={datos.email} onChange={obtenerDatos} required></input>
            </p>
            <p className='formulario__campos'>
            <label>Telefono</label>
            <input type="tel" name="telefono" id="telefono" placeholder="15-xxxxxxxx" maxLength="10" value={datos.telefono} onChange={obtenerDatos} required></input>
            </p>
            <p className='formulario__campos'>
            <input type="radio" name="metodo" required></input>
            <label>Tarjeta de crédito/débito <FontAwesomeIcon icon={faCreditCard}/></label>
            </p>
            <p className='formulario__campos'>
            <input type="radio" required ></input>
            <label>Transferencia bancaria <FontAwesomeIcon icon={faUniversity} /></label>
            </p>
            <button type="submit" className='botonCarrito'>Finalizar compra</button>
        </form>
        
    </div>
  )
}

export default Checkout