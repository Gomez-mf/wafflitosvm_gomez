import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where} from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList ";

const ItemListContainer = ({ greeting }) => {

  const [waffles, setWaffles] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  useEffect(() => {
    setLoading(true)

    const products = collection(db, "productos");
    const filter = category ? query(products, where('categoria', '==', category)) : products;
    const mostrarProductos = getDocs(filter)
    
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
        setLoading(false)
      }) 
  }, [category])

  return (
    <>
      <section>
       <h2 className="itemList__titulo">{greeting}</h2>
        <div className="itemList__contenedor">
          {
           loading ? <Spinner /> : <ItemList waffles={waffles} />
          }
        </div>
      </section>
    </>
  )
}

export default ItemListContainer