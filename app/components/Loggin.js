// lib
import React from 'react'
var sha1 = require('sha1');
import { Message } from 'semantic-ui-react'

import Layout from './Layout'



// components

 
// other

class Loggin extends React.Component {
    constructor(){
 super()

this.state={
email :"",
password:"",
islogin:0

}
    }
// 
    HandleChange = e=> {
        
        this.setState({ [e.target.name]:e.target.value} );
        
      }

      Handlesubmit = e=> {
        e.preventDefault();
        let {email, password}=this.state
        fetch('http://builder.hereofamily.com/core.svc/LoginUser', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:email,
                hashedPassword:sha1(password)})
        
        }).then(res => res.json())
        .then((data)=>{
        if(data.LoginUserResult==-3 ||data.LoginUserResult==-2){
            this.setState({
                islogin:-1
            })}
            
            if(data.LoginUserResult>0){
              const userToken=   data.userToken
                localStorage.setItem("hereoToken",userToken);
                
                this.setState({
                    islogin:1
                })}
                


       
                
            })
     

        
        
      }
  
    render() {
let {email,password,islogin} =this.state

let msg= ""
if(islogin==-1){
msg = 

<Message warning>
    <Message.Header></Message.Header>
    <p>wrong password or email</p>
  </Message>

}


if(islogin==1){

   
        return <div><Layout/> </div>
    
    
  
    }
       
    
    return (

            <div className ="conitner">
       
             <div className ="loggin-Box">
         
             <img src={require('../assets/img/hereo-icon.png')}/> 
              <form onSubmit={this.Handlesubmit}>
               <input type="email" placeholder="Email" value={email} name="email" onChange={this.HandleChange} />
               <input type="password" placeholder="Password" value={password} name="password" onChange={this.HandleChange}/>
               <button>Login</button>
              
              </form>
              {msg}


             </div>
         

             </div>
          
            
        )
    }
}

export default Loggin;

