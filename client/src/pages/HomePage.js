import React, { useEffect, useState } from 'react'
import { Button, Box, makeStyles, InputBase } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useApi from '../hooks/useApi'

import RecipeList from "../components/recipeComponents/RecipeList"
import LoginForm from '../forms/LoginForm'
import SignupForm from "../forms/SignupForm"

const useStyles = makeStyles(() => ({
  box: {
    overflowY: "scroll",
    maxHeight: "70vh",
    border: "2px solid black",
    marginBottom: '10px',
    scrollbarColor: 'inherit'
  },
  homePageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}))

const HomePage = ({setIsLoggedIn}) => {
  const [recipes, setRecipes] = useState([])

  const classes = useStyles()
  const { get } = useApi()

  const fetchRecipes = () => {
    get('http://localhost:4000/api/v1/recipes/')
    .then(res => res.json())
    .then((jsonData) => {
      console.log(jsonData)
      setRecipes([...jsonData])
    })
  }

  useEffect(() => {
    fetchRecipes()
  }, [])



  return (
      <div className={classes.homePageContainer} >
        <h1>My Recipes</h1>
        <div>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
        <Box className={classes.box} overflow="scroll" maxHeight="30%" >
          <RecipeList recipes={recipes}/> 
        </Box>
        <Link style={{textDecoration: 'none'}} to="/recipe/new">
          <Button variant="contained" color="primary">New Recipe</Button>
        </Link>
      </div>
  )
}

export default HomePage