/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext(null);
const Context = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}`
        );
        const data = await res.json();
        if (data?.data?.recipes) {
          setRecipeList(data?.data?.recipes);
          setLoading(false);

          setInput("");
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
        setInput("");
      }
    };
    fetchRecipe();
  };

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavoritesList(cpyFavoritesList);
  }

  console.log(recipeList);
  return (
    <GlobalContext.Provider
      value={{
        input,
        setInput,
        handleSubmit,
        loading,
        recipeList,
        handleAddToFavorite,
        recipeDetailsData,
        setRecipeDetailsData,
        navigate,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { Context, GlobalContext };
