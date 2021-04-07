import React from 'react';
import { Link } from 'react-router-dom';

const Books = (props) => {
    const {books} = props;
    return (
        <>
        {
            books.length === 0 && <div class="d-flex justify-content-center">
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        {
            books.map(info => {
                const {imageURL, bookName, authorName, price, _id} = info;
                return (
                    <div className="col-md-4" key={_id}>
                        <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "23rem"}} key={_id}>
                            <img src={imageURL} className="card-img-top img-fluid" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{bookName}</h5>
                                <p className="card-text text-danger">{authorName}</p>
                                <div className="d-flex justify-content-around">
                                    <div><h3><span>${price}</span></h3></div>
                                    <div> <Link to ={`/checkout/${_id}`} className="btn btn-danger text-dark">Buy Now</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </>
    );
};
export default Books;