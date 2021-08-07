import { Link } from 'react-router-dom';
import { List, ListItem, ButtonBase, makeStyles } from '@material-ui/core';

import RecipeListItem from './RecipeListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%'
  }
}))

const RecipeList = ({ recipes }) => {

  const classes = useStyles()


  return (
    <>

      <List  >
        {recipes.map((rec, idx) => {
          return (
            
              <ListItem
              component={Link}
              to={`/recipe/${rec._id}`}
              key={idx}
              >
                <ButtonBase className={classes.root} onClick={() => console.log('clicked')}>
                  <RecipeListItem rec={rec} />
                </ButtonBase>
              </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default RecipeList;
