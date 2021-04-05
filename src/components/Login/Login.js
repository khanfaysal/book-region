import React from 'react';
import GoogleAuthentication from '../GoogleAuthentication/GoogleAuthentication.js';
import './Login.css';

const Login = () => { 
    return (
        <div className = "loginBoxOuter">
          <div className = "loginBoxInner shadow">
            <GoogleAuthentication></GoogleAuthentication>
          </div>
        </div>
    );
};
export default Login;