import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState<any>(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const url =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6917476&lng=77.3296634&restaurantId=" +
        resId;

      const data = await fetch(
        "https://api.allorigins.win/raw?url=" + encodeURIComponent(url)
      );

      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Menu API error:", error);
    }
  };

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
    </div>
  );
};

export default RestaurantMenu;