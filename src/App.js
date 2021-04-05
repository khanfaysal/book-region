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
import Admin from './components/Admin/Admin';
import Manage from './components/Admin/Mange/Manage';
import Add from './components/Admin/Add/Add';
import Customize from './components/Admin/Customize/Customize';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import SideNav from './components/SideNav/SideNav';
import NotFound from './components/NoFound/NoFound'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Books from './components/Books/Books';
import Order from './components/Order/Order';


export const UserContext = createContext()

function App() {
  const [books, setBooks] = useState([]);
  const [logInUser, setLogInUser] = useState({});
  return (
    <UserContext.Provider  value = {[logInUser, setLogInUser]}>
      <Router>
        {/* <h3>Context api use : {logInUser.email}</h3> */}
      <Header></Header>
        <Switch>
            <Route path = '/home'>
              <Home books={books} setBooks={setBooks}></Home>
            </Route>

            <Route exact path = '/'>
              <Home books={books} setBooks={setBooks}></Home>
            </Route>

            <PrivateRoute path = '/admin'>
              <Admin></Admin>
            </PrivateRoute>

            <Route path = '/customize'>
              <Customize></Customize>
            </Route>
            
            <PrivateRoute path = '/order'>
              <Order></Order>
            </PrivateRoute>

            <PrivateRoute path = '/add'>
              <Add></Add>
            </PrivateRoute>

            <PrivateRoute path = '/manage'>
              <Manage books={books}></Manage>
            </PrivateRoute>

            <PrivateRoute path = '/checkout/:_id'>
              <CheckOut></CheckOut>
            </PrivateRoute>

            <Route path = '/login'>
              <Login></Login>
            </Route>

            <Route path = '/sidenav'>
              <SideNav></SideNav>
            </Route>

            <Route path = '/books'>
              <Books books={books}></Books>
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
