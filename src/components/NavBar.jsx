import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Context"; // Import named export GlobalContext

const NavBar = () => {
  const { input, setInput, handleSubmit } = useContext(GlobalContext); // Use GlobalContext here

  return (
    <nav className="flex justify-between items-center py-8 mx-auto container flex-col lg:flex-row gap-5 lg:gap-0 ">
      <h2 className="text-5xl font-semibold">
        <NavLink
          to={"/"}
          className="hover:text-gray-700 duration-700"
        >
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            RecipeRealm
          </span>
        </NavLink>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search here"
          className="bg-white/75 p-3 px-8 rounded-lg outline-none shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-700"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorite"}
            className="text-black hover:text-gray-700 duration-700"
          >
            Favourites
          </NavLink>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default NavBar;
