import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../components/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return <div className="text-center">Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex justify-center items-center">
      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
          {recipeList.map((item) => (
            <RecipeItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-center gap-2">
          <img src={"./iconn.png"} alt="icon" className="w-20 h-20" />
          <p className="lg:text-4xl text-xl text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
