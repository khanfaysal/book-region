import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App.js';
import GoogleAuthentication from '../GoogleAuthentication/GoogleAuthentication.js';
import './Login.css';

const Login = () => {
    // const { register, handleSubmit, watch, errors,onSubmit } = useForm();
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <div className = "loginBoxOuter">
          <div className = "loginBoxInner shadow">
            <GoogleAuthentication></GoogleAuthentication>
          </div>
        </div>
    );
};

export default Login;