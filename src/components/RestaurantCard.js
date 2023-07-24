import { CDN_URI } from "../utils/constants";

function RestaurantCard({ resData }) {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card">
      <img
        src={CDN_URI + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <div className="res-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{costForTwo}</h5>
        <h6>{avgRating} stars</h6>
        <h6>{deliveryTime} minutes</h6>
      </div>
    </div>
  );
}

export default RestaurantCard;
