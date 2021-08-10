import { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  List,
  ListItem,
  ButtonBase,
  makeStyles,
  InputBase,
  Button
} from '@material-ui/core';

import RecipeListItem from './RecipeListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
  },
  searchBar: {
    position: 'static',
  },
}));

const RecipeList = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const classes = useStyles();

  return (
    <>
      {recipes.length > 0 && <List>
        {recipes.map((rec, idx) => {
            return (
              <ListItem component={Link} to={`/recipe/${rec._id}`} key={idx}>
                <ButtonBase className={classes.root}>
                  <RecipeListItem rec={rec} />
                </ButtonBase>
              </ListItem>
            );
          })}
      </List>}
      {recipes.length === 0 && 
        <ListItem component={Link} to={`/recipe/new`}>
                <ButtonBase className={classes.root}>
                  <h3>No Recipes in Collection</h3>
                  <Button variant='contained' color='primary'  >Add New Recipe</Button>
                </ButtonBase>
              </ListItem>
      }
    </>
  );
};

export default RecipeList;
