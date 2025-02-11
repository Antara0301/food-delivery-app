import React,{Component} from 'react'; 
import UserContext from '../utlis/UserContext';

class UserContact extends Component{
    constructor(props){
        super(props)
       }
    render(){
        const {name,location,contactno,email} = this.props
        return(
            <div className="h-screen">
            <h1>Name: {name}</h1>
            <h3>Location: {location}</h3>
            <h4 >Contact No: {contactno}</h4>
            <h4>Email: {email}</h4>
            <UserContext.Consumer>
                {({loggedUser}) => (<h1>{loggedUser}</h1>) }
            </UserContext.Consumer>
            </div>
        )
    }

}
export default UserContact;