import { Link } from "react-router-dom";

const Item = ({ producto}) => {
  const {nombre, imagen, precio , stock, id} = producto;
  return (
    <>
    <div className='item__card'>
    <h2 className='item__titulos'>{nombre}</h2>
    <img src={imagen} alt="" />
    <p className="item__textos">Precio: ${precio}</p>
    <Link to={`/producto/${id}`}>
    <button className="item__boton">Ver detalle del producto</button>
    </Link>
    <p className="item__textos">Stock disponible: {stock}</p>
    </div>
  </>
  )
}

export default Item