import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Order = () => {
    const [order, setOrder] = useState({});
    useEffect(() => {
        const url = 'http://localhost:5055/orders'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setOrder(data))
    }, [])

    return (
        <div className = "container">
        
            <div className = "row">
                <div className = "col-md-12">
                <table class="table">
            <thead>
                <tr>
                    <th scope="col">Book Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">price</th>
                </tr>
            </thead>
                {
                    order.length > 0 ? order.map(singleOrder =>
                    <tbody>
                        <tr>
                            <th scope="row">{singleOrder.bookName}</th>
                            <td>Quantity</td>
                            <td>{singleOrder.price}</td>
                        </tr>
                    </tbody>) : <Spinner className="d-flex justify-content-center align-items-center" animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                                </Spinner>
                }
              </table>
            </div>
        </div>
    </div>
    );
};

export default Order;