import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();
    const [book, setBook] = useState([]);
    const dateTime = new Date().toLocaleString();

    useEffect(() => {
        fetch('http://localhost:5055/books')
            .then((res) => res.json())
            .then((data) => {
                const info = data.filter((book) => _id == book._id);
                console.log(info , _id)
                setBook(info[0]);
            });
    }, [_id]);
    const handleChecked = () => {
        const {bookName, authorName, price, imageURL} = book;
        const newOrder = { loggedInUser, bookName, authorName, price, imageURL, dateTime };
        fetch('http://localhost:5055/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Your order has been placed successfully!')
            });
    };
    return (
        <div className='container py-3'>
            <h1 className = "text-danger">Checkout</h1>
            <h5 className = "text-danger">Date & Time: {dateTime}</h5>
            <div className='card mb-3 p-3 bg-dark shadow p-3 mb-5 bg-body rounded border-0'>
                <div className='row g-0'>
                    <div className='col-md-12'>
                        <div className='card-body '>
                        <img src={book.imageURL} alt={book.bookName} className='w-100 shadow p-3 mb-5 bg-body rounded' />
                            <h4 className='card-title fw-bold text-warning d-flex justify-content-center align-items-center '>{book.bookName}</h4>
                            <p className='card-text text-warning d-flex justify-content-center align-items-center'>{book.authorName}</p>
                            <p className='card-text fs-3 text-warning fw-bold d-flex justify-content-center align-items-center'>${book.price}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2">
                <button className='btn btn-dark text-danger fs-4 fw-bold' onClick={handleChecked}>Order Now</button>
            </div>
        </div>
    );
};

export default CheckOut;