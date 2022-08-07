import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ( {nombre, imagen, descripcion,  precio, stock }) => {
  return (
    <div>
        <h2 className='titulos'>{nombre}</h2>
        <img className='imagenDetalle' src={imagen} alt="imagen del producto" />
        <p className='textosDetalle'>Precio ${precio}<br></br>Stock disponible: {stock}<br></br>{descripcion}</p>        
        <ItemCount stock={{stock}} initial={1} />
    </div>
  )
}
