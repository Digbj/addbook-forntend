import React from "react";
const EditBook=()=>{
    return(
        <div className="Edit-book">
            <button className=".btn">Show Book List</button>
            <h3>Edit Book</h3>
            <h6>Update Book Info</h6>
            <div className="desc">
                <div>
                <label>Title : </label>
                <input placeholder=""/>
                </div>
                <div>
                <label>ISBN : </label>
                <input placeholder=""/>
                    </div>
                    <div>
                    <label>Author : </label>
                <input placeholder=""/>
                    </div>
                    <div>
                    <label>Description : </label>
                <input placeholder=""/>
                    </div>
                    <div>
                    <label>Published Date : </label>
                <input placeholder=""/>
                    </div>
                
                <div>
                <label>Publisher : </label>
                <input placeholder=""/>
                </div>
                
                
                
               
                <button>Update Book</button>
            </div>
        </div>
    )
}
export default EditBook;