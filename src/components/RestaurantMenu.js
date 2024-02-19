import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(false);
  // console.log("resInfo: " + resInfo);

  if (resInfo === null) return <Shimmer />;
  const { name, avgRating, city, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="text-center">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      {categories.map((c, index) => (
        // controlled componenet which are controlled by RestuaruantMenu
        <RestaurantCategory
          key={c.card.card.id}
          data={c?.card?.card}
          showItem={showIndex === index ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
