import RestaurantCard, { withOpenRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { UserContext } from "../utils/context/UserContext";
const Body = () => {
  const RestaurantIsOpen = withOpenRestaurant(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState("");

  const filterListOnRating = () => {
    setResData(resData.filter((res) => res?.info.avgRating > 4));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const result = await data.json();
    setResData(
      result?.data.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurant(
      result?.data.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
    console.log("resData ====", resData);
  };

  const onSearchList = () => {
    console.log(searchText);
    const filteredRest = resData.filter((res) =>
      res?.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredRest);
  };

  if (onlineStatus === false)
    return <p>you are offline. Please check your internet connection !!</p>;

  // conditional rendering
  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            value={searchText}
            className="border border-solid border-black mx-5"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-5 py-1 bg-green-200 rounded-lg"
            onClick={onSearchList}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="filter px-4 py-1 bg-green-200 rounded-lg"
            onClick={filterListOnRating}
          >
            Top Rated Restaurant
          </button>
          <label className="mx-2">UserName : </label>
          <input
            className="border to-blue-200 p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRestaurant.map((res) => {
          return (
            <Link key={res?.info.id} to={"/restaurantmenu/" + res?.info.id}>
              {res.info.isOpen ? (
                <RestaurantIsOpen data={res} />
              ) : (
                <RestaurantCard data={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
