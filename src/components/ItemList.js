import React from "react";
import { CDN_LINK } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left justify-between flex"
        >
          <div className="w-9/12">
            <span>{item.card.info.name}</span>
            <span>
              {" "}
              - ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-2">
            <div className="p-2 absolute">
              <button className="p-2 mt-20 shadow-lg  rounded-lg text-green-600 bg-white">
                Add +
              </button>
            </div>
            <img src={CDN_LINK + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
