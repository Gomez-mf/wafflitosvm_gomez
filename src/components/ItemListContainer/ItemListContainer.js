const ItemListContainer = (props) => {
  return (
    <>
      
          <div className="card">
            <h2 className='titulos'>{props.nombre}</h2>
            <img src={props.imagen} alt="" />
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
            <button className="botonGral">Comprar</button>
        </div>
      </>
  )
}

export default ItemListContainer