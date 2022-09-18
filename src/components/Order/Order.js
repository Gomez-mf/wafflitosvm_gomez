import { Link } from "react-router-dom"
export const Order = ({order,id}) => {
  const {nombre, email} = order.buyer;
  const {total} = order;

  return (
    <div className="orden__contenedor">
      <p className="orden__textos">Gracias  por tu compra {nombre}.<br></br>
      Te hemos enviado un correo a {email}  para continuar con el pago
      Tu identificador de compra es: {id}<br></br>
      Total a pagar $:{total}
      </p>
      <Link to="/">
      <button className="botonCarrito">Volver al inicio</button>
      </Link>
    </div>
  )
}
