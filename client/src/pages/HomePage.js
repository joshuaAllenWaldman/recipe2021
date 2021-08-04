import React from 'react'
import RecipeList from "../components/RecipeList"
import LoginForm from '../forms/LoginForm'
import SignupForm from "../forms/SignupForm"

const styles = {
  "border": "2px solid black",
  "display": "flex",
  "justify-content": "center",
}


const HomePage = ({setIsLoggedIn}) => {
  return (
    <>
      <div style={styles}>
        <h1>Home Page</h1>
        <button onClick={() => setIsLoggedIn(false)} >Logout</button>
      </div>
    </>
  )
}

export default HomePage