import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App.js';
import GoogleAuthentication from '../GoogleAuthentication/GoogleAuthentication.js';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, watch, errors,onSubmit } = useForm();
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <div style = {{textAlign: "center"}}>
          <form className ='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <input name="email" defaultValue = {logInUser.email} ref={register({ required: true })} placeholder ="Email" />
              {errors.email && <span className ='error'>Email is required</span>}
            <input type="password" ref={register({ required: true })} placeholder ="password" />
              {errors.address && <span className ='error'>Password is required</span>}
            <input type="submit" />
      </form>
      <p>--Or--</p>
      <GoogleAuthentication></GoogleAuthentication>
        </div>
    );
};

export default Login;