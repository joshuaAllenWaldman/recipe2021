import React, { useRef } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
} from '@material-ui/core';

const Signup2 = ({ setIsLoggedIn, history }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { confPassword, ...rest } = data;
    fetch('http://localhost:4000/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    })
      .then((res) => res.json())
      .then((jsonData) => console.log(jsonData))
      .then(() => setIsLoggedIn(true))
      .then(() => history.push('/home'))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <h1>Sign Up</h1>
        <FormControl className="userNameField">
          <TextField
            variant="outlined"
            margin="normal"
            {...register('username')}
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            type="text"
            id="username"
          />
        </FormControl>
        <FormControl className="emailField">
          <TextField
            variant="outlined"
            margin="normal"
            {...register('email')}
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            
            type="text"
            id="email"
          />
        </FormControl>
        <FormControl className="passwordField">
          <TextField
            variant="outlined"
            margin="normal"
            {...register('password')}
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            
            type="password"
            id="password"
          />
        </FormControl>
        <FormControl className="confPasswordField">
          <TextField
            variant="outlined"
            margin="normal"
            {...register('confPassword')}
            required
            fullWidth
            id="confPassword"
            label="Confirm Password"
            name="confPassword"
            
            type="password"
            id="confPassword"
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Create Account
        </Button>
      </Box>
    </form>
  );
};

export default Signup2;
