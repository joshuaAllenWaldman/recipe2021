import React, { useRef } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'



const LoginForm = ({setIsLoggedIn, history}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
    
    fetch('http://localhost:4000/api/v1/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((jsonData) => console.log(jsonData))
    .then(() => setIsLoggedIn(true))
    .then(() => history.push('/home'))
    .catch((err) => console.log(err))
  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="userNameField">
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          {...register("username")}
          id="name"
          />
      </div>
      <div className="passwordField">
        <label htmlFor="password">Password</label>
        <input 
          type="text"
          {...register("password")}
          id="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;