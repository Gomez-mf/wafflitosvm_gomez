import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList ";
import { productos } from '../Productos/productos.js';
import Spinner from'../Spinner/Spinner'
const ItemListContainer = ({ greeting }) => {

  const [waffles, setWaffles] = useState([]);
  const [cargando,setCargando] = useState(true)

  useEffect(()=>{
      new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(productos)
        }, 2000)
      }).then(
        data=>setWaffles(data))
        .catch(error=>console.log(error))
        .finally(()=>setCargando(false))
  }, [])

  return (
    <>
    <section>
    <h2 className='titulos'>{greeting}</h2>
    <div className="contenedor">
      {
        cargando ? <span><Spinner /> Cargando...Espere, por favor  </span> : <ItemList waffles={waffles} />
      }
    </div>    
    </section>
    </>
  )
}

export default ItemListContainer