import { CDN_LINK } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } =
    data.info;
  return (
    <div className="w-[240] p-2  ml-10 mb-5 bg-gray-100 rounded-lg  hover:bg-gray-400">
      <img
        className="w-[240] h-40 rounded-lg "
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-bold py-1">{name}</h3>
      <h6 className="font-thin ">{costForTwo}</h6>
      <h6 className="font-thin ">{avgRating}</h6>
      <h6 className="font-thin ">{cuisines}</h6>
    </div>
  );
};

// Make a HOC function to display the resturant is opened or not

export const withOpenRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white ml-8 p-1 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
