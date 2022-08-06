import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList ";
import { productos } from '../Productos/productos';
import Spinner from'../Spinner/Spinner'
const ItemListContainer = ({ greeting }) => {

  const [waffles, setWaffles] = useState([]);
  const [cargando,setCargando] = useState(true)

  useEffect(()=>{
      new Promise((resolve, reject) => {
        setTimeout(()=>{
          setCargando(false)
          resolve(productos)
        }, 2000)
      }).then(
        data=>setWaffles(data))
  }, [])

  return (
    <>
    <section>
    <h2 className='titulos'>{greeting}</h2>
    <div className="contenedor">
      {
        cargando ? <span><Spinner /> Cargando...  </span> : <ItemList waffles={waffles} />
      }
    </div>    
    </section>
    </>
  )
}

export default ItemListContainer