import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/Context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="row-start-2 md:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt="Recipe"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex-1 flex-col gap-3 text-center">
        <span className="text-md text-pink-600 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-gray-800">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => {
              handleAddToFavorite(recipeDetailsData?.recipe);
            }}
            className={`p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider my-3 inline-block ${
              favoritesList &&
              favoritesList.length > 0 &&
              favoritesList.findIndex(
                (item) => item.id === recipeDetailsData?.recipe?.id
              ) !== -1
                ? "bg-red-600 text-white"
                : "bg-purple-600 text-white"
            } shadow-md`}
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-gray-800">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map(
              (ingredient, index) => (
                <li key={index}>
                  <span className="text-lg font-semibold text-gray-700">
                    {ingredient.quantity} {ingredient.unit}{" "}
                  </span>
                  <span className="text-lg text-gray-700">
                    {ingredient.description}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
