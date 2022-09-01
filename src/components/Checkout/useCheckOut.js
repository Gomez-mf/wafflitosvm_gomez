import React from 'react'

const useCheckOut = () => {
  return (
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
            </form>
            <button type="submit" className='botonCarrito'>Finalizar compra</button>
            </div>
  )
}

export default useCheckOut