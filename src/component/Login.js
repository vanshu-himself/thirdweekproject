import React, { useState } from "react";

import { useNavigate } from "react-router-dom";



const Login=()=>{
 
    
let navigator=useNavigate();
    let[user,setUser]=useState({email:"",password:""});
    let[error,setError]=useState("");

    console.log(user)


    
  async  function LoginImplement(e){
 
    if(!user.email || !user.password){
        alert("email and password are mandatory property!!")
    }
        e.preventDefault();
       
        fetch('https://dummyjson.com/auth/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
username:user.email,
password:user.password,
})
})
.then((res) =>{
    if(!res.ok)throw new Error("something went wrong");
    return res.json()
})
.then((data)=>{
    
console.log(data)
localStorage.setItem("id",data.id)
// setSucess(data.message);
setError("")
navigator("/Profile")
alert("Login successful!!")

}
).catch((err)=>{
    console.log(err.message);
    setError("something wrong here");
})




}
    return(

        <div className="outer-div">
        <div className="login-form-content">

            <form onSubmit={LoginImplement}>
            <p>Welcome back!</p>
            <h1>
                Sign in to your account
            </h1>
            <label htmlFor="email">Your email</label>
            <input
            type="text"
            name="email"
            onChange={(e)=>setUser({...user,email:e.target.value})}
            />
             <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            onChange={(e)=>setUser({...user,password:e.target.value})}
            />
            <button type="submit">CONTINUE</button>
           <div className="forget"><a href="">Forget your password?</a></div> 
             <div className="signup-link">
                <span>Don't have an accout?</span>
                <a href="">Sign up</a>
                </div>
            </form>

               </div>
               <h1>{error}</h1>
             
        </div>
    )
}
export default Login;