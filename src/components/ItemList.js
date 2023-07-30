import React from "react";
import { CDN_URI } from "../utils/constants";

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12 py-4">
            <h1 className="font-semibold text-gray-800">
              {item.card.info.name}
            </h1>
            <h5 className="text-sm text-gray-700 font-medium">
              ₹{item.card.info.price / 100}
            </h5>
            <p className="text-xs text-gray-400">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 flex justify-center items-center">
            <div className="relative ml-2 flex justify-center">
              <img
                src={CDN_URI + item.card.info.imageId}
                alt="food-item"
                className="w-28 rounded-md h-20"
              />
              <button className="absolute -bottom-2 px-2 py-1 rounded bg-white shadow-lg text-green-600 text-sm">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
