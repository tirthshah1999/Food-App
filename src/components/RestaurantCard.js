import React from "react";
import { CDN_URI } from "../utils/constants";

function RestaurantCard({ resData }) {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } = resData;
  const { deliveryTime } = resData.sla;

  return (
    <div
      data-testid="resCard"
      className="mt-4 w-56 bg-[#f0f0f0] h-[520px]  rounded-lg hover:scale-[1.05] transition ease-in-out delay-100 "
    >
      <img
        src={CDN_URI + cloudinaryImageId}
        alt="res-logo"
        className="w-full h-52 p-3 rounded-[1.2rem]"
      />
      <div className="ml-4 mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="mt-2">{cuisines.join(", ")}</h4>
        <h5 className="mt-2">{costForTwo}</h5>
        <h6 className="mt-2">{avgRating} stars</h6>
        <h6 className="mt-2">{deliveryTime} minutes</h6>
      </div>
    </div>
  );
}
export default RestaurantCard;

// HOC
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute right-0 p-1 bg-orange-500 text-white z-10 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
