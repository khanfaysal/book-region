import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({book}) => {

    return (
        <div className="col-md-3">
            <div className="card shadow p-3 mb-3 bg-light rounded" style={{width: "20rem"}}>
            <img src={book.imageURL} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{book.bookName}</h5>
                <p className="card-text">{book.authorName}</p>
                <div className="d-flex justify-content-around">
                    <div><h3><span>${book.price}</span></h3></div>
                    <div> <Link to ={`/checkout/${book._id}`} className="btn btn-primary">Buy Now</Link></div>
                </div>
            </div>
         </div>
        </div>
    );
};
export default Books;