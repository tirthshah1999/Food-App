import { useEffect, useState } from "react";
import { MENU_URI } from "../utils/constants";

function useRestaurantMenu(id) {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URI + id);
    const json = await data.json();
    setResMenu(json?.data);
  };

  return resMenu;
}

export default useRestaurantMenu;
