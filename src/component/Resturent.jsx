import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import Simmer from "./Simmer"
import useResturentData from '../utlis/useResturentData.js'
import ResturentTotalMenu from "./ResturentTotalMenu.jsx"
const Resturent = () => {
   const {resID} = useParams()
   const {info,totalMenu} =  useResturentData(resID)
   const [showIndex,setShowIndex] = useState(null)
    console.log(totalMenu, "totalmenu")
   if(info === null) return <Simmer />
console.log(info,"info")
  return (

    <div className="">
       <h1 className="font-bold py-4 text-center "> Name of the Resturent: {info.name}-{info.areaName}</h1>  
        <h2 className="font-bold py-2 text-center">Cuisines:{info.cuisines.join(",")}</h2>
             {totalMenu.map((category,index)  =>  (
              <div key={category?.card?.card.id}>
              <ResturentTotalMenu 
              data={category?.card?.card} 
              showItems={index === showIndex ? true : false}
              setShowIndexs={() => setShowIndex(index)}
              />
            </div>
             ))}
        </div>
  )
}

export default Resturent;