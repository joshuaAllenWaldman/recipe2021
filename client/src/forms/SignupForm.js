import React, { useRef } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'



const SignupForm = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
    const { confPassword, ...rest} = data
    fetch('http://localhost:4000/api/v1/users/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rest)
    })
    .then((res) => res.json())
    .then((jsonData) => console.log(jsonData))
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
      <div className="emailField">
        <label htmlFor="email">Email</label>
        <input 
          type="text"
          {...register("email")}
          id="email"
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
      <div className="confPasswordField">
        <label htmlFor="confPassword">Confirm Password</label>
        <input 
          type="text"
          {...register("confPassword")}
          id="confPassword"
        />

      </div>
      <button type="submit">Create Account</button>

    </form>
  )
}

export default SignupForm;