import ItemList from "./ItemList"
const ResturentTotalMenu=({data,showItems,setShowIndexs}) =>{
    
    console.log(showItems,"showIndex")
    const handelClick=() =>{
         setShowIndexs()
    }
    return(
        <div className="w-9/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 cursor-pointer" onClick={handelClick}>
            <div className="flex justify-between">
       <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
       <span>⬇️</span>
       </div>

      { showItems && <ItemList itemData={data.itemCards} />}

        </div>
    )
}
export default ResturentTotalMenu;