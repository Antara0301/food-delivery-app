
import React,{useState, useEffect,useContext} from 'react';
import {Card,CardwithVegLabel} from "./Card"
import Simmer from "./Simmer"
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utlis/useOnlineStatus"
import UserContext from '../utlis/UserContext';



export const Body=() =>{
const [listOfResturent, setListOfResturent] = useState([])
const [serachText, setSearchTest] = useState("")
const [filterList, setFilterList] = useState([])
console.log(listOfResturent, "listOfResturent")

const CardwithVeg= CardwithVegLabel(Card)
const{loggedUser,setUserName} = useContext(UserContext)
useEffect(() =>{
    fetchData()
    
},[]);

const fetchData= async () => {
     //const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //const data= await fetch("https://corsproxy.io/?https://api-gtm.grubhub.com/topics-gateway/v1/topic/content?pageSize=25&pageSource=HOMEparameter=location.wkt:POINT(-75.58881379 39.57788848)&parameter=locationMode:DELIVERY&geohash=dr41puvvuvpk&operationId=ec07")
    const json= await data.json();
    console.log(json,"json")
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfResturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const onlineStatus= useOnlineStatus()
if(onlineStatus === false){
  return(
    <h1>Something wrong with your internet. Please check your internet.</h1>
  )
}
    return listOfResturent.length ===0 ? <Simmer /> : (
      <div className="body">
      <div className='serach m-4 p-4'>
      <input type="text" value={serachText} className='border border-solid border-black '
       onChange={(e) =>{
         setSearchTest(e.target.value)
       }}/>
      <button className='ps-4 py-2 ml-2 mx-2 bg-blue-700 w-28 text-white text-center rounded-lg '
      onClick={() =>{
        let filteredResturent= listOfResturent.filter((res) => res.info.name.toUpperCase().includes(serachText.toUpperCase()))
     setFilterList(filteredResturent)
    }   
    }

      >Search</button>
       UserName:<input type="text" value={loggedUser} className='border border-solid border-black m-2'
       onChange={(e) =>{
        setUserName(e.target.value)
       }}/>
    
      </div>
      
      <div className="flex flex-wrap pl-6">
        { 
        filterList.map((resturent)=> (
          resturent.info?.veg === true?
          <Link key={resturent?.info.id} to= {"/resturents/"+resturent?.info.id}><CardwithVeg resData={resturent?.info}/></Link>:
          <Link key={resturent?.info.id} to= {"/resturents/"+resturent?.info.id}> <Card  resData={resturent?.info}/></Link> 
         
        )) } 
      
      </div>
      </div>
    )
  }