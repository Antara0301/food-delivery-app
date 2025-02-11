import {useState,useEffect} from "react"

const useResturentData = (resID) =>{
    const [resturentInfo, setResturentInfo]= useState(null)
    const [menu,setMenu]=useState([])
    const[totalMenu,setTotalMenu]=useState([])

    useEffect(() => {
        fetchMenu()
       }, [])
   
  const fetchMenu= async () =>{
           const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId="+resID+"&catalog_qa=undefined&submitAction=ENTER")
           const jsonData= await data.json();
           setResturentInfo(jsonData.data.cards[2]?.card.card.info)
           setMenu(jsonData.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards)
           const menudata=jsonData.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
           )
           setTotalMenu(menudata)
           console.log(jsonData.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards,"menu data")
       }
   
    return {info:resturentInfo,menu:menu, totalMenu:totalMenu};
}
export default useResturentData;