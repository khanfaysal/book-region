import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
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
        const userInfo = {
            name: logInUser.displayName,
            email:logInUser.email
        }
        // console.log(userInfo)
        const newOrder = { userInfo, bookName, authorName, price, imageURL, dateTime };
        // console.log(newOrder);
        fetch('http://localhost:5055/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert('Order placed successfully!')
            });
    };
    return (
        <div className='container py-5'>
            <h1 className = "text-danger text-center">Checkout</h1>
            <h5 className = "text-danger text-end">Date & Time: {dateTime}</h5>
            <div className='card mb-3 p-3 bg-dark shadow p-3 mb-5 bg-body rounded border-0'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <div className='card-body '>
                        <img src={book.imageURL} alt={book.imageURL} className='w-100 shadow p-3 mb-5 bg-body rounded' />
                            <h4 className='card-title fw-bold text-warning d-flex justify-content-center align-items-center '>{book.bookName}</h4>
                            <p className='card-text text-warning d-flex justify-content-center align-items-center'>{book.authorName}</p>
                            <p className='card-text fs-3 text-warning fw-bold d-flex justify-content-center align-items-center'>${book.price}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2">
                <button className='btn btn-dark text-danger fs-4 fw-bold' onClick={handleChecked}>Order Now</button>
            </div>
        </div>
    );
};
export default CheckOut;