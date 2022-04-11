import React from "react";
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

const App = () => {

  const [{},dispatch]=useStateValue();


  useEffect(() => {
    
    auth.onAuthStateChanged(authUser=>{   //this thing refiles the code if we login or logout
      console.log('THE USER IS >>', authUser);
      if(authUser)
      {
        //the user just logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //the user is logout out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })    //this will only run once when the app component loads 
  }, [])

  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/login">
             <Login />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
