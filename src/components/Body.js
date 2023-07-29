import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
