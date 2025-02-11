import React from "react"
import UserContact from "./User-contact";

const About =() =>{
    return (
        <div className="about">
            <h1>About Us</h1>
         <h5>It is Food delivery app using live Swaggiy Api</h5>
         <UserContact name={"Antara Bhunia"} location={"Middletown, Delaware"}
         contactno={"6144406046"} email={"antara.wilmu2021@gmail.com"}/>
        </div>
    )
}
export default About;