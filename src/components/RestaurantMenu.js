import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resMenu, setResMenu] = useState(null);
  const { id } = useParams();
  // const resId = 108424;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setResMenu(json?.data);
  };

  if (resMenu === null) {
    return <Shimmer />;
  }

  // const { name } =
  //   resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[14]?.card
  //     ?.card;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <>
      <span style={{ fontSize: " bold" }}>{name}</span> -{" "}
      <span>{avgRating}</span>
      <p>{cuisines.join(", ")}</p> - <span>{costForTwoMessage}</span>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs. " + item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RestaurantMenu;
