import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div>
            <h1>Book List</h1>
         <Link to='/AddBook'><p>+ Add New Book</p></Link>  
        </div>
    )
}
export default Home;