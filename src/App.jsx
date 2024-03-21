import { Routes, Route } from "react-router-dom";
import Favourite from "./pages/favourites/Favourite";
import Details from "./pages/details/Details";
import NavBar from "./components/NavBar";
import Home from "./pages/home/HomePage";
const App = () => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorite" element={<Favourite />} />
        <Route path="recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
