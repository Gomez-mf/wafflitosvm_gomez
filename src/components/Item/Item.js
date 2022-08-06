const Item = ({ producto}) => {
  return (
    <>
    <div className='card'>
    <h2 className='titulos'>{producto.nombre}</h2>
    <img src={producto.imagen} alt="" />
    <p>Precio: ${producto.precio}</p>
    <button className="botonGral">Ver detalle del producto</button>
    <p>Stock disponible: {producto.stock}</p>
    </div>
  </>
  )
}

export default Item