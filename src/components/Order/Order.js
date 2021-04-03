import React from 'react';

const Order = () => {
    return (
        <div className = "container">
            <h2>CheckOut Page Test</h2>
            <div className = "row">
                <div className = "col-md-12">
                <table class="table">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    
                </tr> 
               </tbody>
              </table>
            </div>
        </div>
    </div>
    );
};

export default Order;