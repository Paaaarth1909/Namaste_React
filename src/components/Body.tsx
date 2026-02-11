import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import restaurantData from "../utils/restaurantData.json";

const Body = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const resList = restaurantData.resList;
    setRestaurants(resList);
    setFilteredRestaurants(resList);
  }, []);

  const handleSearch = () => {
    const filtered = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = restaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(filtered);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-6">
      <div className="flex gap-4 my-6">
        <input
          className="border border-gray-400 px-3 py-1 rounded"
          type="text"
          placeholder="Search restaurant..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="px-4 py-1 bg-green-500 text-white rounded"
          onClick={handleSearch}
        >
          Search
        </button>

        <button
          className="px-4 py-1 bg-blue-500 text-white rounded"
          onClick={handleTopRated}
        >
          Top Rated
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
