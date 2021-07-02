import RecipeList from "./RecipeList";
import useFetch from "./useFetch";

const Home = () => {

  const {data: recipes, isPending, error} = useFetch('https://quick-recipes.herokuapp.com/recipes/');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipes && <RecipeList recipes={recipes} title="All recipes"></RecipeList>}
    </div>
  );
}
 
export default Home;