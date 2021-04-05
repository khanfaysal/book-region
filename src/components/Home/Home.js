import React, { useEffect } from 'react';
import Books from '../Books/Books.js';

const Home = (props) => {
    const {books, setBooks} = props;
    useEffect(() =>{
        fetch('http://localhost:5055/books')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[setBooks])
    return (
            <div className = "container">
                <div className = "row">
                    <Books books={books}></Books>
                </div>
            </div>
    );
};
export default Home;