import { useState } from 'react'
import {Box, Button} from '@material-ui/core'
import SignupForm from "../forms/SignupForm"
import LoginForm from "../forms/LoginForm"


const AuthPage = (props) => {
  const [ showLogin, setShowLogin ] = useState(true)


  return(
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
        {!showLogin &&  <SignupForm 
          setIsLoggedIn={props.setIsLoggedIn}
          history={props.history}
          setToken={props.setToken}
        />}

        {showLogin &&  <LoginForm
          setIsLoggedIn={props.setIsLoggedIn}
          history={props.history}
          setToken={props.setToken}
        />}
        <Button variant="contained" color="secondary" onClick={() => setShowLogin(!showLogin)} >Switch to {showLogin ? 'Signup' : 'Login'}</Button>
    </Box>

  )
}

export default AuthPage 