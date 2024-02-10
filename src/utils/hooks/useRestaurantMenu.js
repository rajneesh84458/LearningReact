import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const result = await fetch(RESTAURANT_MENU + resId);
      const res = await result.json();
      setResInfo(res.data);
      console.log("res =====", res);
    } catch (error) {
      console.log("error =====", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
