import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { UserContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
const GoogleAuthentication = () => {
    const [user, setUser] = useState({})
    const [logInUser, setLogInUser] = useContext(UserContext);
    console.log(logInUser)
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: { pathname: "/"}};
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const handleGoogleSignIn = () =>{
         firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          console.log(user);
          setUser(user);
          setLogInUser(user);
          history.replace(from);
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode , errorMessage , email);
        });
    }
    const buttonStyle = {
        color: 'black',
        backgroundColor: '#eb4d4b',
        borderRadius: 5,
        border: 'none',
        margin: '25px 6px',
        padding: '10px',
        fontSize: '15px',
        cursor: 'pointer',
        width: '30%',
      }
    return (
     <div className="App">
        <button style ={buttonStyle} onClick = {handleGoogleSignIn}><FontAwesomeIcon icon={faPlus} color="#eb4d4b"/>Sign in Using Google</button>
    </div>
    );
};

export default GoogleAuthentication;