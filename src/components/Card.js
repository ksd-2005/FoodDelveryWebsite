import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    deliverytime,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    
  } = resData?.info;
  return (
    <div className="res-card">
      <img className="foodimage" src={CDN_URL + cloudinaryImageId} /><br />
      <h3>{name}</h3>
      <h3>{avgRating}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliverytime}</h3>
    </div>
  );
};
export default Card;
