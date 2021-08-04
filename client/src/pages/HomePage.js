import React from 'react'
import { Button } from '@material-ui/core'

import RecipeList from "../components/recipeComponents/RecipeList"
import LoginForm from '../forms/LoginForm'
import SignupForm from "../forms/SignupForm"




const HomePage = ({setIsLoggedIn}) => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Button onClick={() => setIsLoggedIn(false)} >Logout</Button>
      </div>
    </>
  )
}

export default HomePage