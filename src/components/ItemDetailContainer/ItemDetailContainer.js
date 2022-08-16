import { useState, useEffect } from "react";
import { productos } from '../Productos/Productos';
import Spinner from '../Spinner/Spinner';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [waffles, setWaffles] = useState({});
    const [cargando, setCargando] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        }).then(res => {
            setWaffles(res.find(item => item.id === parseInt(id)))
        })
            .catch(error => console.log(error))
            .finally(() => setCargando(false))
    }, [id])
    return (
        <>
            <div className="itemList__contenedor"> {
                cargando ? < Spinner /> : < ItemDetail waffles={waffles} />}
            </div>
        </>
    )
}

export default ItemDetailContainer