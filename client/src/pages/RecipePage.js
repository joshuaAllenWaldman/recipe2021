import NewRecipe from "../forms/NewRecipe";


const RecipePage = ({token}) => {

  return (
    <div>
      <NewRecipe token={token} />
    </div>
  )
}

export default RecipePage;