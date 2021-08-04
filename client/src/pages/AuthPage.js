import { useState } from 'react'

import SignupForm from "../forms/SignupForm"
import LoginForm from "../forms/LoginForm"

const AuthPage = (props) => {
  const [ showLogin, setShowLogin ] = useState(false)

  const styles = {
    "border": "2px solid black",
    "display": "flex",
    "justify-content": "center",
  }

  return(
    <div style={styles}>
        {!showLogin &&  <SignupForm 
          setIsLoggedIn={props.setIsLoggedIn}
          history={props.history}
        />}
        {showLogin &&  <LoginForm
          setIsLoggedIn={props.setIsLoggedIn}
          history={props.history}
        />}
        <button onClick={() => setShowLogin(!showLogin)} >Switch to {showLogin ? 'Signup' : 'Login'}</button>
    </div>

  )
}

export default AuthPage 