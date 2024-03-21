import { useContext } from "react";
import RecipeItem from "../../components/RecipeItem";
import { GlobalContext } from "../../context/Context";
const Favourite = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
          {favoritesList.map((item) => (
            <RecipeItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourite;
