import React from 'react';
import SideNav from '../../SideNav/SideNav.js';

const Manage = (props) => {
    const {books} = props;
    return (
        <div className = "container">
             <div className = "row">
             <div className = "col-md-2">
                 <SideNav></SideNav>
             </div>
                <div className = "col-md-10">
                    <h2 className = "text-warning fw-bold fs-3">Manage Book</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-warning">Book Name</th>
                                <th scope="col">Author Name</th>
                                <th scope="col" className="text-warning">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(info => {
                                    const {bookName, authorName, price, _id} = info;
                                    return (
                                        <tr key={_id}>
                                            <th>{bookName}</th>
                                            <td>{authorName}</td>
                                            <td>{price}</td>
                                            <td>@mdo</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    );
};

export default Manage;