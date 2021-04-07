import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideNav from '../../SideNav/SideNav';
import './Add.css';

const Add = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://obscure-caverns-56615.herokuapp.com/addBookInfo`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log('server side response'))
    };
    
    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'defc38c8221f60aa89f0ade96a2e8342');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                
            });
    }
    return (
        <div className = "container">
             <div className = "row">
             <div className = "col-md-2">
                 <SideNav></SideNav>
             </div>
                <div className = "col-md-10">
                    <h2 className = "text-center fs-4 heading-color">Add Book</h2>
                    <hr className = "text-center"style={{ height: '2px', color: '#130f40', backgroundColor: 'red',}} />
                    <form className = "book-form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <label>
                            First Name :<br />
                            <input name="bookName" ref={register({ required: true })} placeholder ="Enter Name" />
                            {errors.bookName && <span className ='error'>Book name is required</span>}&nbsp;&nbsp;
                        </label>
                        
                        <input name="authorName" ref={register({ required: true })} placeholder ="Enter Name" />
                        {errors.AuthorName && <span span className ='error'>Author name required</span>}<br/>
                        </div>

                        <div>
                        <input name="price" type = "number" ref={register({ required: true })} placeholder ="Enter Price" />
                        {errors.price && <span className ='error'>Add price is required</span>}&nbsp;&nbsp;
                        
                        <input name="exampleRequired" type = "file" onChange = {handleImageUpload} />
                        {/* {errors.exampleRequired && <span>Upload image required</span>}<br/> */}
                        </div>
                        <input style = {{width: "100px"}} type="submit" />
                    </form>
                </div>
             </div>
        </div>
    );
};
export default Add;