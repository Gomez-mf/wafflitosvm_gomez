import { useState } from 'react';
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { useCartContext } from '../../Context/CartContext';
import { Order } from '../Order/Order';

const Checkout = () => {

    const {cart, getItemPrice, emplyCart} = useCartContext()
    const [orderId, setOrderId] = useState(null);
    const [order, setOrder] = useState()
    const [submit, setSubmit] = useState(false)

    const [dataForm, setDataForm ] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: ""
    
    })
    const handleChange = (e) => {
        e.preventDefault()
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const orden = {
            item: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: getItemPrice(),
            buyer: dataForm,
            date: serverTimestamp()
        }
        setOrder(orden)
        const orderColection = collection(db, "ordenes")
        const orderDoc = addDoc(orderColection, orden)
        
        
        setSubmit(true)
        orderDoc
        .then((res)=>{
            setOrderId(res.id)
            emplyCart()
        })
        .catch((error)=>{
            console.log('ERROR', error)
        })
        .finally(()=>{
            emplyCart()
        })
    
        } 
    
  return (
    submit ? <Order order={order} id={orderId} /> :
    <div className='formulario__contenedor'>
        <h3 className='formulario__titulos'>Ingrese sus datos</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
            <p className='formulario__campos'>
                <label >Nombre</label>
                <input type="text" 
                placeholder="Ingrese su nombre" 
                name='nombre' 
                value={dataForm.nombre} 
                onChange={handleChange}
                required                
                />
            </p>
            <p className='formulario__campos'>
            <label>Apellido</label>
            <input type="text" 
            name="apellido"
             placeholder="Ingrese su apellido" 
             value={dataForm.apellido} 
             onChange={handleChange} 
             required
             />
            </p>
            <p className='formulario__campos'>
            <label>Email</label>
            <input type="text" 
            name="email"
            placeholder="wafflitos@gmail.com"
            value={dataForm.email}
            onChange={handleChange}
            required
            />
            </p>
            <p className='formulario__campos'>
            <label>Telefono</label>
            <input type="tel" 
            name="telefono"
            placeholder="15-xxxxxxxx" maxLength="10" 
            value={dataForm.telefono} 
            onChange={handleChange} 
            required
            />
            </p>
            <button type="submit" className='botonCarrito'>Finalizar compra</button>
        </form>
        
    </div>
  )
}

export default Checkout