import React, {useState,useEffect} from 'react';
import './App.css';
import { Header } from './component/Header';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';
import UserContext from './utlis/UserContext';
import { Provider } from 'react-redux';
import appStore from './utlis/appStore';


function App() {
// we want authcation in our app and logged inuser name everywhere so we use useContext 
// api call to gate userName
const[ userName, setUserName]= useState()

useEffect(() =>{
const data={
  name:"Antara Bhunia"
}
setUserName(data.name)
},[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedUser: userName,setUserName}}>
    <>
    <Header />
    <Outlet />
    <Footer/> 
    </>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
