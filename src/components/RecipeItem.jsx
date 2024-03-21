import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden p-5 bg-white shadow-xl gap-5 border-2 rounded-2xl border-purple-400">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-gradient-to-r from-pink-400 to-purple-600 text-white duration-300 hover:bg-white hover:text-purple-800"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
