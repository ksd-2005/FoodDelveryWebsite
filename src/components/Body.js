import Card from "./Card";
import res_cards from "../utils/mockData";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import ShimmerUI from "./Shimmer";
import Search from "./Search";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [OrginalList,setOrginalList]=useState([]);

  const normalizeString = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "");


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const restaurants=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurants(restaurants);
    setOrginalList(restaurants);
  };
  if (listOfRestaurants.length == 0) {
    return <ShimmerUI />;
  }
  return (
    <div>
      <div className="parent">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurants = OrginalList.filter((res) =>
                normalizeString(res.info.name).includes(normalizeString(searchText))
              );

              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const newList = listOfRestaurants.filter(
                (x) => x.info.avgRating > 4.5
              );
              setListOfRestaurants(newList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="removefilter">
            <button onClick={()=>{
             setListOfRestaurants(OrginalList);
              
            }}>Remove-Filter</button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <Card key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
