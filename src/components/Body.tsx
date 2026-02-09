import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_API);
      const json = await data.json();

      const resList =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants(resList);
      setFilteredRestaurants(resList);
    } catch (err) {
      console.error("API error:", err);
    }
  };

  // 🔍 Search
  const handleSearch = () => {
    const filtered = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  // ⭐ Top Rated
  const handleTopRated = () => {
    const filtered = restaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filtered);
  };

  // ⏳ SHIMMER
  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-6">
      {/* Search & Filter */}
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

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
