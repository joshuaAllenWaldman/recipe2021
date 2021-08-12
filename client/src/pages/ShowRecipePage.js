import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  ButtonGroup,
  CardHeader,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { spacing } from '@material-ui/system';

import useApi from '../hooks/useApi';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const ShowRecipePage = ({ history }) => {
  const { id } = useParams();
  const { get, del } = useApi();
  const [recipe, setRecipe] = useState({});

  const classes = useStyles();

  const fetchRecipe = () => {
    get('http://localhost:4000/api/v1/recipes/' + id)
      .then((res) => res.json())
      .then((jsonData) => {
        setRecipe(jsonData);
      });
  };

  const deleteRecipe = () => {
    del('http://localhost:4000/api/v1/recipes/' + id)
      .then(() => setRecipe({}))
      .then(() => history.push('/home'))
      .then(() => console.log('made it this far'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const { tags, name, url, notes } = recipe;

  return (
    <Card className={classes.card}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="subtitle1" component={Link} to={url}>
          Go to Recipe Page
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h4">Notes:</Typography>
        <Typography variant="subtitle1">{notes}</Typography>
      </CardContent>

      <CardContent>
        <ButtonGroup fullWidth>
          <Button
            size="large"
            m={1}
            component={Link}
            to={`/recipe/${id}/edit`}
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            size="large"
            m={1}
            onClick={deleteRecipe}
            variant="outlined"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardContent>
      <Button
        size="small"
        component={Link}
        to={'/home'}
        variant="contained"
        color="secondary"
      >
        Back
      </Button>
    </Card>
  );
};

export default ShowRecipePage;
