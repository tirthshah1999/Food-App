import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";

function Body() {
  const [searchInput, setSearchInput] = useState("");
  const isOnline = useOnline();

  const [restaurantList, filteredRestaurantList, setFilteredRestaurantList] =
    useRestaurants();

  const handleSearch = () => {
    const filteredData = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredRestaurantList(filteredData);
  };

  const handleFilter = () => {
    const newFilteredList = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );

    setFilteredRestaurantList(newFilteredList);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  if (!isOnline)
    return (
      <h1>
        Looks like you're not connected to internet. Please check your internet
        connection
      </h1>
    );

  return (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurantList.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          filteredRestaurantList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
