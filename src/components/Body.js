import React, { useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";

function Body() {
  const [searchInput, setSearchInput] = useState("");
  const isOnline = useOnline();
  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  const [restaurantList, filteredRestaurantList, setFilteredRestaurantList] =
    useRestaurants();

  const handleSearchInput = (e) => {
    if (e.target.value === "") {
      setFilteredRestaurantList(restaurantList);
    }
    setSearchInput(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
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

  if (!isOnline)
    return (
      <h1 className="mt-4 text-center">
        Looks like you're not connected to internet. Please check your internet
        connection
      </h1>
    );
  return (
    <div className="body mx-4">
      <div className="flex mt-4">
        <div className="search">
          <input
            type="text"
            placeholder="Pizza..."
            className="px-3 border border-black border-solid rounded"
            value={searchInput}
            onChange={handleSearchInput}
            onKeyUp={handleKeyUp}
          />
          <button
            className="px-4 py-1 bg-[#4681f4] text-white m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-1 bg-[#4681f4] text-white m-4 rounded-lg"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {filteredRestaurantList.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          filteredRestaurantList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating < 4 ? (
                <RestaurantPromotedCard resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
