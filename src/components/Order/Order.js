import { Link } from "react-router-dom"
export const Order = ({id}) => {
  return (
    <div className="orden__contenedor">
      <p className="orden__textos">Gracias por tu compra.<br></br>
      Tu identificador de compra es.{id}</p>
      <Link to="/">
      <button className="botonCarrito">Volver al inicio</button>
      </Link>
    </div>
  )
}
