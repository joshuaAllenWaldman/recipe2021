import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import useApi from "../hooks/useApi";



const ShowRecipePage = () => {
  
  const { id } = useParams()
  const { get } = useApi()

  const fetchRecipe = () => {
    get('http://localhost:4000/api/v1/recipes/' + id)
    .then(res => res.json())
    .then((jsonData) => {
      console.log(jsonData)
    })
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ShowRecipePage;