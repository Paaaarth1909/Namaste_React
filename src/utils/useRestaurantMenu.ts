import { useEffect, useState } from "react";

const useRestaurantMenu = (resId: string | undefined) => {
  const [resInfo, setResInfo] = useState<any>(null);

  useEffect(() => {
    if (!resId) return;
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${resId}`
    );

    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
