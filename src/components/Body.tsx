import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import type { Restaurant } from "../utils/Types";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    [],
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999",
      );

      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurants(restaurants || []);
      setFilteredRestaurants(restaurants || []);
    } catch (error) {
      console.error("API failed", error);
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
    }
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) => {
              const rating = Number(res.info.avgRatingString);
              return !isNaN(rating) && rating > 4.5;
            });

            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant, info) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
