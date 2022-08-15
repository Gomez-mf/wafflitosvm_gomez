import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({waffles}) => {
  const {nombre, imagen, descripcion,  precio, stock } = waffles;
  return (
    <div className='iteamDetail__contenedor'>
        <img className='itemDetail__imagen' src={imagen} alt="imagen del producto" />
        <div className='.itemDetail__detalles'>
        <h2 className='itemDetail__titulo'>{nombre}</h2>
        <p className='itemDetail__textos'>{descripcion}<br></br>Stock disponible: {stock}<br></br>Precio ${precio}</p>
        <ItemCount stock={stock} initial={1} />   
        </div>          
        
    </div>
  )
}
