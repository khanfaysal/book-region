import React from 'react';
import { useForm } from "react-hook-form";
import SideNav from '../../SideNav/SideNav';

const Add = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className = "container">
             <div className = "row">
             <div className = "col-md-2">
                 <SideNav></SideNav>
             </div>
                <div className = "col-md-10">
                    <h2>Add Book</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="example" defaultValue="test" ref={register} />
                        <input name="exampleRequired" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                </div>
             </div>
        </div>
    );
};

export default Add;