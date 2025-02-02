import { useState, useEffect } from "react";
import React from "react";
import { RATINGS_IMAGE,RESTAURANT_URL } from "../utils/constants";
import Menu from "./Menu";
const Restaurants = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [recommendedFood, setRecommendedFood] = useState([]);
const [orginalrecommendedFood,setOrginalRecommendedFood]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    console.log(json);
    const restaurantDetails = json?.data?.cards[2]?.card?.card?.info;
    const food =json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
   
    setRecommendedFood(food);
    setRestaurantInfo(restaurantDetails);
    setOrginalRecommendedFood(food);
  };
  const {
    name,
    avgRating,
    areaName,
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
            <p>Rating : {avgRating}</p>
           </div>
           <div>
            <h2>Outlet : {areaName}</h2>
           </div>
           <h2 style={{cursor:"pointer"}} onClick={()=>{
            recommendedFood.length==0?setRecommendedFood(orginalrecommendedFood)
            :setRecommendedFood([])}}>Recommended({recommendedFood.length})</h2>
           {recommendedFood.map((dish)=>{
              return (<Menu key={dish?.card?.info?.id} dishInfo={dish?.card?.info}/>);}
           )}
        </div>
      </div>
    </div>
  );
};
export default Restaurants;
