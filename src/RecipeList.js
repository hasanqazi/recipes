import { Link } from 'react-router-dom';

const RecipeList = ({recipes, title}) => {

  return (
    <div className="recipe-list md:px-4 md:py-6 sm:px-4 px-3 h-full">
      <h2 className="text-gray-700 lg:text-6xl text-5xl font-semibold pt-6 pb-6 border-b border-gray-200 flex justify-center">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 sm:gap-5">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <div className="recipe-preview mt-8 card">
                <img className="w-full h-64 sm:h-64 object-cover" src={recipe.image}></img>
                <div className="m-4">
                  <h2 className="font-bold text-white">{recipe.title}</h2>
                  <p className="block text-gray-100 text-sm">Written by {recipe.author}</p>
                </div>
                <div className="badge">
                  <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{recipe.time}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mb-5"></div>
    </div>
  );
}

export default RecipeList;