import React from "react";
import ItemList from "./ItemList";

function Accordion({ data, setShowItems, showItems }) {
  const handleClick = () => {
    setShowItems();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} - ({data.itemCards.length})
          </span>
          <span className="text-lg">{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && (
          <ItemList
            items={data.itemCards}
            btnText={"Add +"}
            btnMethod={"Add"}
          />
        )}
      </div>
    </div>
  );
}

export default Accordion;
