import React,{useState,useContext} from 'react';
import logo from 
"../images/food-delivery-logo-with-bike-man-courier_1308-49222.avif"
import {Link} from "react-router-dom"
import useOnlineStatus from '../utlis/useOnlineStatus';
import UserContext from '../utlis/UserContext';
import { useSelector } from 'react-redux';


export const Header =()=>{
  const [btn, setBtn]= useState("LogIn")
const onlineStatus= useOnlineStatus()
const {loggedUser}= useContext(UserContext)
// subscribe to the store and get intems
const cartItems= useSelector((store)=> store.cart.items);

console.log(cartItems,"artItems=")
    return (
      <div className="flex justify-between m-2 shadow-md sm:bg-gray-400 lm:bg-green-100   bg-yellow-100" >
     <div>
          <img src={logo} className="w-32 p-1 m-4"/>
          </div>
        <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus && btn==="logOut" ?  "🟢":"🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4 bg-white "><Link to="/cart">🛒 ({cartItems.length} items)</Link></li>
          <li className="px-4"><button className='login' onClick={() => {
            btn==="LogIn"?  setBtn("logOut"): setBtn("LogIn") }}>
              {btn}
          </button>
          </li>
          <li>{loggedUser}</li>
        </ul>
        </div>

      </div>
    )
  }