import axios from 'axios'
import {useState } from 'react'
import { Route, Switch, Redirect, useHistory } from "react-router-dom";


import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

function App() {
  let history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  return (
    <div className="App">
      <Switch>
        {isLoggedIn && <Route path='/home' render={(props) => <HomePage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  {...props} /> } />}
        <Route path='/' render={(props) => <AuthPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} {...props} /> }  />


      </Switch>
    </div>
  );
}

export default App;
