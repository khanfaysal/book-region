import React from 'react';
import SideNav from '../../SideNav/SideNav.js';

const Manage = (props) => {
    const {bookName} = props.manage;
    return (
        <div className = "container">
             <div className = "row">
             <div className = "col-md-2">
                 <SideNav></SideNav>
             </div>
                <div className = "col-md-10">
                    <h2 className = "text-warning fw-bold fs-3">Manage Book</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col">AuthorName</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{bookName}</th>
                                <td>J.K</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    );
};

export default Manage;