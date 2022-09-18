import { useState, useEffect } from "react";
import Spinner from '../Spinner/Spinner';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [waffles, setWaffles] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const products = collection(db, "productos");
        const docRef = doc(products, id)

        getDoc(docRef)
            .then((doc)=>{
                setWaffles({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id])
    return (
        <>
            <div className="itemList__contenedor"> {
                loading ? < Spinner /> : < ItemDetail waffles={waffles} />}
            </div>
        </>
    )
}

export default ItemDetailContainer