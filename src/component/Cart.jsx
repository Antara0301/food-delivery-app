import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart =() =>{
    const cartItem= useSelector((store) => store.cart.items)
    return(
        <div className="h-screen">
        <div className="w-6/12 m-auto">
        <ItemList itemData={cartItem}/>
        </div>
        </div>
    )
}
export default Cart;