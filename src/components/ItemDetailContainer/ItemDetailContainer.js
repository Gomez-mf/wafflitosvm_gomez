import { useState, useEffect } from "react";
import { productos } from '../Productos/productos';
import Spinner from '../Spinner/Spinner'
import { ItemDetail } from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [waffles, setWaffles] = useState([]);
  const [cargando, setCargando]= useState(true)

  useEffect(()=>{
    new Promise((resolve, reject) => {
      setTimeout(()=>{
        setCargando(false)
        resolve(productos)
      }, 2000)
    }).then(res =>{
      setWaffles(res.find(item => item.id === 4))
    })
}, [waffles])
return (
  <>
    <div className="contenedor">
      {cargando ? <Spinner/> : <ItemDetail nombre={waffles.nombre} imagen={waffles.imagen} descripcion={waffles.descripcion} precio={waffles.precio} stock={waffles.stock}/> }
    </div>
    
  </>
)
}

  export default ItemDetailContainer