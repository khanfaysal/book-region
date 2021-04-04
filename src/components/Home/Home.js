import React, { useEffect, useState } from 'react';
import Books from '../Books/Books.js';
import Manage from '../Admin/Mange/Manage';

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5055/books')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[])
    return (
            <div className = "container">
                <div className = "row">
                    {
                        books.map(book => <Books book={book}></Books>)
                    }
                    {
                        books.map(manage => <Manage manage={manage}></Manage>)
                    }
                </div>
            </div>
    );
};
export default Home;