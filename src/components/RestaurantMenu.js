import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { id } = useParams();
  const resMenu = useRestaurantMenu(id);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <>
      <span style={{ fontWeight: "bold" }}>{name}</span> -{" "}
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
