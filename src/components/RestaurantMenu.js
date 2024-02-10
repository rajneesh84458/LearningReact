import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo: " + resInfo);

  if (resInfo === null) return <Shimmer />;
  const { name, avgRating, city, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      <h6>
        {avgRating} {city}
      </h6>

      {itemCards.map((item) => (
        <li key={item.id}>
          {item.card.info.name} Rs. {item.card.info.defaultPrice / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
