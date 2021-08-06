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

import useApi from '../hooks/useApi';

const NewRecipe = ({ setIsLoggedIn, history, token }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const {post} = useApi();
  const onSubmit = (data) => {
    console.log(data);
    post('http://localhost:4000/api/v1/recipes/new',
    {
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((jsonData) => console.log(jsonData))
      .then(() => history.push('/home'))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column">
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            {...register('name')}
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoFocus
            type="text"
            id="name"
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            {...register('url')}
            required
            fullWidth
            id="url"
            label="url"
            name="url"
            autoFocus
            type="text"
            id="url"
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            {...register('notes')}
            required
            fullWidth
            id="notes"
            label="notes"
            name="notes"
            autoFocus
            type="text"
            id="notes"
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Recipe
        </Button>
      </Box>
    </form>
  );
};

export default NewRecipe;
