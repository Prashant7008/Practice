import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";



const BasicFrom = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");     
     const navigate = useNavigate();
     useEffect(() => {
        const userS = JSON.parse(localStorage.getItem("user"));
        if (email==="" && password ===""){
            setEmail
        }
     })
     useEffect (() =>{
        window.localStorage.setItem("user", JSON.stringify(email,password));
     }, [email, password])
  return (
    <>
        <from action="">    
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete="off" value={email}
                 onChange= {(e) => setEmail(e.target.value)}/>
                 </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="passwordl" id="password"  value={password} 
                onChange= {(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={()=>{
                navigate("/home")
            }}> login</button>
        </from>
    </>
  );
        }

export default BasicFrom ;
