import React from "react";
const BookDetails=()=>{
    return(
        <div className="book-details">
            <button>Show Book List</button>
            <h3>Book Record</h3>
            <p>View Book Info</p>
           <div className="desc">
                <span>
                <label>Title : </label>
                <p>{"book"}</p>
                </span>
                <span>
                <label>ISBN : </label>
                <p>{"book"}</p>
                    </span>
                    <span>
                    <label>Author : </label>
                <p>{"book"}</p>
                    </span>
                    <span>
                    <label>Description : </label>
                <p>{"book"}</p>
                    </span>
                    <span>
                    <label>Published Date : </label>
                <p>{"book"}</p>
                    </span>
                
                <span>
                <label>Publisher : </label>
                <p>{"book"}</p>
                </span>  
                <div>
                    <button>Delete Book</button>
                    <button>EditBook</button>
                </div>
        </div>
        </div>
    )
}
export default BookDetails;