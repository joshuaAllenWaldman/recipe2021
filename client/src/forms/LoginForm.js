import React, { useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
} from '@material-ui/core';

const LoginForm = ({ setIsLoggedIn, history }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch('http://localhost:4000/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((jsonData) => console.log(jsonData))
      .then(() => setIsLoggedIn(true))
      .then(() => history.push('/home'))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column">
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
            autoFocus
            type="password"
            id="password"
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </Box>
    </form>
  );
};

export default LoginForm;
