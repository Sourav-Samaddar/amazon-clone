import './App.css';
import React, { useEffect } from "react";
import Header from './HeaderComponent/Header';
import Home from './HomeComponent/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './CheckoutComponent/Checkout';
import Login from './LoginComponent/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './PaymentComponent/Payment';

function App() {
  const[{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header /> 
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header /> 
            <Payment />
          </Route>
          <Route path="/">
            <Header /> 
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
