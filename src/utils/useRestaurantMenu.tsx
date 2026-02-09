import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId: string) => {
  const [menu, setMenu] = useState<any>(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenu(json.data);
  };

  return menu;
};

export default useRestaurantMenu;
