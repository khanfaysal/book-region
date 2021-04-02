import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import product from './components/Product/Product'
import Admin from './components/Admin/Admin';
import Manage from './components/Admin/Mange/Manage';
import Add from './components/Admin/Add/Add';
import Customize from './components/Admin/Customize/Customize';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import SideNav from './components/SideNav/SideNav';
import NotFound from './components/NoFound/NoFound'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Product from './components/Product/Product';
// import Form from './components/Form/Form';

export const UserContext = createContext()

function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <UserContext.Provider  value = {[logInUser, setLogInUser]}>
      <Router>
      <Header></Header>
        <Switch>
            <Route path = '/home'>
              <Home></Home>
            </Route>

            <Route exact path = '/'>
              <Home></Home>
            </Route>

            <Route path = '/admin'>
              <Admin></Admin>
            </Route>

            <Route path = '/admin/customize'>
              <Customize></Customize>
            </Route>

            <Route path = '/add'>
              <Add></Add>
            </Route>

            <PrivateRoute path = '/manage'>
              <Manage></Manage>
            </PrivateRoute>

            <Route path = '/checkout'>
              <CheckOut></CheckOut>
            </Route>

            <Route path = '/login'>
              <Login></Login>
            </Route>

            <Route path = '/sidenav'>
              <SideNav></SideNav>
            </Route>

            <Route path = '/product'>
              <Product></Product>
            </Route>

            <Route path = '*'>
              <NotFound></NotFound>
            </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
