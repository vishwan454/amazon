import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';


function App() {
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user is logged in
        dispatch({
          type : "SET_USER",
          user : authUser,
        })
      }else{
        //user is logged out 
        dispatch({
          type : "SET_USER",
          user : null

        })
      }
      return ()=>{
        unSubscribe()
      }
    })
  }, [])
  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>

    </Router>
    
  );
}

export default App;
