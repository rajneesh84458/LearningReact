import { CDN_LINK } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } =
    data.info;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_LINK + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{costForTwo}</h5>
      <h5>{avgRating}</h5>
      <h5>{cuisines}</h5>
    </div>
  );
};

export default RestaurantCard;
