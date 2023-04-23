import React, { useState } from "react";
import { Link } from "react-router-dom";
const Regist=()=>{
    const [user,setUser]=useState('');
    const[password,setPassword]=useState('');
    const[Confirmpass,setConfirmPassword]=useState('');
    const[err,setErr]=useState('')
    const Handle=()=>{
        if(password!==Confirmpass){
            setErr("password Didnot Matched")
        }else{
            console.log(user,password)
        }
    }
    return(
    <div className="Registration">
    <h1>Register</h1>
    <input placeholder="User-Name..." onBlur={(e)=>{setUser(e.target.value)}}/>
    <input type="password" placeholder="Password..." onBlur={(e)=>{setPassword(e.target.value)}}/>
    <input type="password" placeholder="Confirm-Password..." onBlur={(e)=>{setConfirmPassword(e.target.value)}}/>
    <button onClick={Handle}>Register</button>
<Link to='/login'><h5>Member Login</h5></Link>    
    <p>{err}</p>
    </div>
    )
    
}
export default Regist;