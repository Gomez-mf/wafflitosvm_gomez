import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from '../Productos/Productos';
import Spinner from '../Spinner/Spinner';
import ItemList from "../ItemList/ItemList ";

const ItemListContainer = ({ greeting }) => {

  const [waffles, setWaffles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const {categoria} = useParams();

  useEffect(() => {
    setCargando(true)
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    }).then(res=>{
      categoria ? setWaffles(res.filter(item => item.categoria === categoria )) : setWaffles(res)
    })
    .catch(error => console.log(error))
    .finally(() => setCargando(false))
  }, [categoria])

  return (
    <>
      <section>
       <h2 className="itemList__titulo">{greeting}</h2>
        <div className="itemList__contenedor">
          {
           cargando ? <Spinner /> : <ItemList waffles={waffles} />
          }
        </div>
      </section>
    </>
  )
}

export default ItemListContainer