import React,{useState} from "react";
import { Link } from "react-router-dom";



const AddBook=()=>{
    const [book,setBook]=useState({
        title:'',
        ISBN:'',
        Author:'',
        Description:'',
        Date:'',
        Publisher:''
    });

    const Submit=()=>{
        console.log(book);
    }
    return(
        <>
         <div className="AddBook">
    <Link to='/'><p>Show Book List</p> </Link> 
            <h3>Add Book</h3>
            <h6>Create New Book</h6>
            <input placeholder="Titel of The book" onChange={(e)=>{setBook({...book,title:e.target.value})}}/>
            <input placeholder="ISBN" onChange={(e)=>{setBook({...book,ISBN:e.target.value})}}/>
            <input placeholder="Author" onChange={(e)=>{setBook({...book,Author:e.target.value})}}/>
            <input placeholder="Describe this book" onChange={(e)=>{setBook({...book,Description:e.target.value})}}/>
            <input placeholder="Published_Date" onChange={(e)=>{setBook({...book,Date:e.target.value})}}/>
            <input placeholder="Publisher of the book" onChange={(e)=>{setBook({...book,Publisher:e.target.value})}}/>
            <button onClick={Submit}>Submit</button>
        </div>
        </>
       
    )
}
export default AddBook;