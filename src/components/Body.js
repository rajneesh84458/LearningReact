import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
const Body = () => {
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
    <div className="body">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-btn" onClick={onSearchList}>
        Search
      </button>
      <button className="filter-btn" onClick={filterListOnRating}>
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {filterRestaurant.map((res) => {
          return (
            <Link key={res?.info.id} to={"/restaurantmenu/" + res?.info.id}>
              <RestaurantCard data={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
