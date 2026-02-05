import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState<any[]>([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState<any[]>([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();

    const restaurants =
      json?.data?.cards?.[2]?.data?.data?.cards ||
      json?.data?.cards?.[1]?.data?.data?.cards ||
      [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (onlineStatus === false) {
    return <h1>You are offline 🚫</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="res-container">
        {filteredRestaurant.map((restaurant: any) => (
          <Link
            key={restaurant.data.id}
            to={`/restaurants/${restaurant.data.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
