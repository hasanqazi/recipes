import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch('https://quick-recipes.herokuapp.com/recipes/'+id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://quick-recipes.herokuapp.com/recipes/'+recipe.id, {
      method: 'DELETE'
    }).then(()=> {
      history.push('/');
    })
  }

  return (
    <div className="h-full">
      <div className="recipe-details lg:max-w-6xl mx-auto md:pt-8 pt-0">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div>}
        { recipe && (
          <article className="card pb-10">
            <img className="w-full lg:h-96 object-cover" src={ recipe.image } alt="" />
            <h2 className="flex justify-center pt-5 text-5xl text-white">{ recipe.title }</h2>
            <p className="flex justify-center text-gray-100">Written by { recipe.author }</p>
            <div className="recipe-body pl-5 pr-5 pb-10 pt-10 lg:pl-10 pr-10 text-gray-100">{ recipe.body }</div>
            <button className="btn flex mx-auto" onClick={handleClick}>delete</button>
          </article>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;