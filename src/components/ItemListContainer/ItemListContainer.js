import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where} from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList ";

const ItemListContainer = ({ greeting }) => {

  const [waffles, setWaffles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const {categoria} = useParams();

  useEffect(() => {
    setCargando(true)

    const productos = collection(db, "productos");
    const filtro = categoria ? query(productos, where('categoria', '==', categoria)) : productos;
    const mostrarProductos = getDocs(filtro)
    
    mostrarProductos
      .then(res=>{
        const productoCompleto = res.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
        setWaffles(productoCompleto)
      })
      .catch((error)=>{
        console.log('ERROR', error);
      })
      .finally(()=>{
        setCargando(false)
      }) 
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