import React from 'react'
import { Button, Box, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import RecipeList from "../components/recipeComponents/RecipeList"
import LoginForm from '../forms/LoginForm'
import SignupForm from "../forms/SignupForm"



const HomePage = ({setIsLoggedIn}) => {
  return (
      <div>
        <h1>Home Page</h1>
        <RecipeList />
        <Link style={{textDecoration: 'none'}} to="/recipe?newrecipe">
          <Button variant="contained" color="primary">New Recipe</Button>
        </Link>
      </div>
  )
}

export default HomePage