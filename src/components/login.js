import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Login=()=>{
    const[user,setUser]=useState('')
    const[password,setPassword]=useState('')

    return(
        <div>
        <div className='Container'>
            <h3>Login</h3>
            <input placeholder='User Name...' onBlur={(e)=>setUser(e.target.value)}/>
            <input placeholder='Password...' onBlur={(e)=>setPassword(e.target.value)}/>
            <button>Login</button>
            <h5>Forgot Password</h5>
        <Link to='/registration'><p>Register</p></Link>    
        </div>
    </div>
    )
 
}
export default Login;