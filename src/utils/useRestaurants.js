import { useState, useEffect } from "react";
import { RESTAURANTS_URI } from "./constants";

function useRestaurants() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANTS_URI);

    const restaurants = await data.json();

    setRestaurantList(
      restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurantList(
      restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return [restaurantList, filteredRestaurantList, setFilteredRestaurantList];
}

export default useRestaurants;
