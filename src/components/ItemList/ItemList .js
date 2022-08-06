import Item from "../Item/Item"

const ItemList = ({ waffles }) => {
    return (
        <>
            {waffles.map(producto => <Item key={producto.id} producto={producto} />)}
        </>
    )
}

export default ItemList