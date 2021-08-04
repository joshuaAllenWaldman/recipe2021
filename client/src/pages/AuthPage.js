import { useState } from 'react'
import {Box, Button} from '@material-ui/core'
import SignupForm from "../forms/SignupForm"
import LoginForm from "../forms/LoginForm"


const AuthPage = (props) => {
  const [ showLogin, setShowLogin ] = useState(false)

  const styles = {

    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
  }

  return(
    <Box 
      maxWidth="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
        {!showLogin &&  <SignupForm 
          setIsLoggedIn={props.setIsLoggedIn}
          history={props.history}
        />}

        {showLogin &&  <LoginForm
          setIsLoggedIn={props.setIsLoggedIn}
          history={props.history}
        />}
        <Button variant="contained" color="secondary" onClick={() => setShowLogin(!showLogin)} >Switch to {showLogin ? 'Signup' : 'Login'}</Button>
    </Box>

  )
}

export default AuthPage 