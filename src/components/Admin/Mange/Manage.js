import React from 'react';
import SideNav from '../../SideNav/SideNav.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Manage = (props) => {
    const { books } = props;
    // console.log(books)
    const specificDeleteBook = (id) =>{
        const url = `https://obscure-caverns-56615.herokuapp.com/deleteBook/${id}`;
        fetch(url,{
            method: 'DELETE',
        })
        .then(res =>res.json())
        .then(data =>console.log(data))
        // console.log("clicked", id);
    };
    return (
        <div className = "container">
             <div className = "row">
             <div className = "col-md-3 col-sm-2">
                 <SideNav></SideNav>
             </div>
                <div className = "col-md-9 col-sm-10">
                    <h2 className = "text-danger fw-bold fs-3">Manage Book</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-danger">Book Name</th>
                                <th scope="col">Author Name</th>
                                <th scope="col" className="text-danger">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                    books.length === 0 && <div class="d-flex justify-content-center">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                            }
                            {
                             books.map(info => {
                                    const {bookName, authorName, price, _id} = info;
                                    return (
                                        <tr key={_id}>
                                            <th>{bookName}</th>
                                            <td>{authorName}</td>
                                            <td>{price}</td>
                                            <td><button onClick ={() => specificDeleteBook(_id)}>
                                                <FontAwesomeIcon style={{ border: 'none'}}  icon={faTrashAlt} color="#eb4d4b"/></button>
                                            </td>
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