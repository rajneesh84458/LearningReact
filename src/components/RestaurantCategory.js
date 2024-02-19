import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItem = false,
  setShowIndex = () => {},
}) => {
  //   const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    console.log("click", !showItem);
    setShowIndex();
  };

  return (
    <div>
      {/* header */}
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="justify-between flex">
          <span className="font-bold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
