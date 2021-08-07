import { useParams } from "react-router";

import NewRecipeForm from "../forms/NewRecipeForm";


const NewRecipePage = ({token, history}) => {
  const { } = useParams()
  

  return (
    <div>
      <NewRecipeForm token={token} history={history}/>
    </div>
  )
}

export default NewRecipePage;