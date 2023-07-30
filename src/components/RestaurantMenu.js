import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordion from "./Accordion";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(null);

  const { id } = useParams();
  const resMenu = useRestaurantMenu(id);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenu?.cards[0]?.card?.card?.info;

  const itemCategories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center my-4">
      <span className="font-bold text-2xl">{name}</span> -{" "}
      <span className="text-lg">{avgRating} ⭐</span>
      <p className="my-2 text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCategories.map((category, index) => (
        <Accordion
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowItems={() => {
            if (index === showIndex) setShowIndex(null);
            else setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
