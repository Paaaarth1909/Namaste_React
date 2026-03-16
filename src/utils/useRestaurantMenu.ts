import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  defaultPrice?: number;
  description?: string;
  imageId?: string;
}

export interface MenuCard {
  card: {
    card: {
      title?: string;
      itemCards?: {
        card: {
          info: MenuItem;
        };
      }[];
    };
  };
}

interface RestaurantInfo {
  id: string;
  name: string;
  cuisines: string[];
  avgRating: number;
  costForTwoMessage: string;
  sla: {
    deliveryTime: number;
  };
}

const useRestaurantMenu = (resId?: string) => {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo | null>(
    null
  );
  const [menuCards, setMenuCards] = useState<MenuCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!resId) return;

    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();

      const info = json?.data?.cards?.[2]?.card?.card?.info;

      const menu =
        json?.data?.cards
          ?.find((c: any) => c?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      setRestaurantInfo(info);
      setMenuCards(menu);
      setLoading(false);
    } catch (error) {
      console.error("Menu API error:", error);
    }
  };

  return { restaurantInfo, menuCards, loading };
};

export default useRestaurantMenu;