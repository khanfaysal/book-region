import React from 'react';
import SideNav from '../../SideNav/SideNav';

const Add = () => {
    return (
        <div className = "container">
             <div className = "row">
             <div className = "col-md-2">
                 <SideNav></SideNav>
             </div>
             <div className = "col-md-10">
                <h2>Add Book</h2>
                <form action="" className = "mt-5">
                 <div className = "row">
                     <div className = "col">
                         <div className = "mb-3">
                            <label for="bookName" class="form-label">Book Name</label>
                            <input type="text" class="form-control" id="bookName" />
                         </div>
                     </div>
                     <div className = "col">
                         <div className = "mb-3">
                            <label for="authorName" class="form-label">Author Name</label>
                            <input type="text" class="form-control" id="authorName" />
                         </div>
                     </div>
                 </div>
                 <div className = "row">
                     <div className = "col">
                         <div className = "mb-3">
                            <label for="bookPrice" class="form-label">Add Price</label>
                            <input type="number" class="form-control" id="bookPrice" />
                         </div>
                     </div>
                     <div className = "col">
                         <div className = "mb-3">
                            <label for="addCover" class="form-label">Add Book Cover Photo</label>
                            <input type="file" class="form-control" id="addCover" />
                         </div>
                     </div>
                 </div>
             </form>
             </div>
             </div>
        </div>
    );
};

export default Add;