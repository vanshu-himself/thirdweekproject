import React, { useEffect, useState } from "react";


const Profile=()=>{
     let id=localStorage.getItem('id');
     console.log("id",id);
let[userdata,setUserdata]=useState({});

    useEffect(()=>{
      
       async function implementProfile(){

    
      fetch(`https://dummyjson.com/users/${id}`).
      then((resp)=>resp.json()).
      then((data)=>{
      setUserdata((data))
      console.log(data)
       })

      
        }


        implementProfile();


  


    },[id])



    return(
        <div>

   {
    userdata &&
    
     <div className="data">
       { console.log(userdata)}


        <img style={{width:"500px"}} className="imagehere" src={userdata.image} alt="jsssssnbn"/>

        <h1> Full Name :{userdata.firstName} {userdata.maidenName} {userdata.lastName}  </h1>
        <h1> Gender : {userdata.gender}</h1>
        <h1> Email : {userdata.email}</h1>
        <h1> Birthdate : {userdata.birthDate}</h1>
        <h1>  Age : {userdata.age} </h1>
        <h1> phone : {userdata.phone}</h1>
        <h1> University : {userdata.university}</h1>
     

        </div>
}


        </div>

    )
}
export default Profile;