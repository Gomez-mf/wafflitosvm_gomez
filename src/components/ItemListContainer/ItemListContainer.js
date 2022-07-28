const ItemListContainer = (props) => {
  return (
    <>
      <h2 className='titulos'>{props.nombre}</h2>
      <img src={props.imagen} alt="" />
      <p>{props.descripcion}</p>
      <p>{props.precio}</p>

    </>
  )
}

export default ItemListContainer