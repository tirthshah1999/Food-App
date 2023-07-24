import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

function Body() {
  const [restaurantList, setRestaurantList] = useState(resList);

  const handleFilter = () => {
    const newFilteredList = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );

    setRestaurantList(newFilteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
