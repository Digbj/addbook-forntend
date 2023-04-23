import React from "react";
import {Link} from 'react-router-dom'
// import { useState } from "react";
const Nav=()=>{
    // const [isLogin,setIsLogin]=useState('false')
    return(
        <div className="Nav-Bar">
           <div>
            <h5>Book App</h5>
           </div>
           <div>
           <span><Link to='/login'><p >Login</p></Link></span>
             <span><p>Logout</p></span>
           </div>
                
                     
                
            
           
            
            
        </div>
    )
}
export default Nav;