import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="container">
            <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-around">

                    <div><h3><span>$230</span></h3></div>
                    <div> <Link to ="/add" className="btn btn-primary">Go somewhere</Link></div>

                </div>
                    
                   
                    {/* <Link to ="/add" className="btn btn-primary">Go somewhere</Link> */}
            </div>
        </div>
        </div>
    );
};

export default Product;