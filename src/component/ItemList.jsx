import { useDispatch } from "react-redux"
import { addItem } from "../utlis/CartSlice";
const ItemList=({itemData}) =>{
    console.log(itemData,"item data")
const dispatch= useDispatch();

    const handleClick= (item) =>{
   dispatch(addItem(item));

    }


return(
    <div>
        {itemData.map((item) => (
           <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-4 text-left flex justify-between" >
           
            <div className="w-9/12">
            <div className="p-2">
                <span className="">{item.card.info.name}</span>
                <span>-₹{item.card.info.price/100 || item.card.info.defaultPrice/100 }</span>
                
            </div>
            
            <p className="text-xs p-2">{item.card.info.description}</p>
           
           </div> 
           <div className="w-3/12"> 
           <div className="absolute">
            <button className="p-2  bg-black text-white rounded-lg shadow-lg mx-28 m-auto" onClick={() => handleClick(item)}>Add + </button>
           </div>
           <img alt="image" className="w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ item.card.info.imageId}/>
           </div>
           </div>
        ))}
    </div>
)
}
export default ItemList;