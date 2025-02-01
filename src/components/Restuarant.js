import { RESTAURANT_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import React from "react";
import { RATINGS_IMAGE } from "../utils/constants";
const Restaurants = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [recommendedFood, setRecommendedFood] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    console.log(json);
    const restaurantDetails = json?.data?.cards[2]?.card?.card?.info;
    const food =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemsCards;
    setRecommendedFood(food);
    setRestaurantInfo(restaurantDetails);
  };
  const {
    name,
    avgRating,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
  } = restaurantInfo;
  return (
    <div className="info">
      <div>
        <h1>{name}</h1>
        <div className="RatingsAndOthers">
           <div> <img src={RATINGS_IMAGE}></img>
            <p>{avgRating}</p>
           </div>
           <div>
            <h2>Outlet</h2>
            <h3>{}</h3>
           </div>
        </div>
      </div>
    </div>
  );
};
export default Restaurants;
