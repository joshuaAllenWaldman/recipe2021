import { useState, useEffect } from 'react'
import { useParams, } from "react-router";
import { Link } from 'react-router-dom';
import {Card, Button, CardHeader, CardContent, makeStyles, Typography } from "@material-ui/core"

import useApi from "../hooks/useApi";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: '100%'
  }
}))


const ShowRecipePage = ({ history }) => {
  
  const { id } = useParams()
  const { get, del } = useApi()
  const [recipe, setRecipe] = useState({})

  const classes = useStyles() 

  const fetchRecipe = () => {
    get('http://localhost:4000/api/v1/recipes/' + id)
    .then(res => res.json())
    .then((jsonData) => {
      setRecipe(jsonData)
    })
  }

  const deleteRecipe = () => {
    del('http://localhost:4000/api/v1/recipes/' + id)
    .then(() => setRecipe({}))
    .then(() => history.push('/home'))
    .then(() => console.log('made it this far'))
    .catch(err => console.log(err))
  }


  useEffect(() => {
    fetchRecipe()
  }, [])


  const { tags, name, url, notes } = recipe;

  return (
    <Card className={classes.card} >
      <CardHeader title={name} />
      <CardContent>
        <a href={url} target="_blank" >Go to Recipe website</a>
      </CardContent>
      <CardContent>
      <h3>Notes:</h3>
        <p>{notes}</p>
      </CardContent>
      <Link to='/home' style={{textDecoration: 'none'}} >
        <Button variant="contained" color="secondary" >Back</Button>
      </Link>
      <Link to={`/recipe/${id}/edit`} style={{textDecoration: 'none'}} >
        <Button variant="contained" color="primary" >Edit</Button>
      </Link>
      <Button onClick={deleteRecipe} variant="contained" color="secondary" >Delete Recipe</Button>
    </Card>
  )
}

export default ShowRecipePage;