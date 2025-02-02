import { RECOMMENDED_URL } from "../utils/constants";
const Menu=(props)=>{
    const {dishInfo}=props;
  const {description,isVeg,name,defaultPrice,price,imageId}=dishInfo
    return(
        <div>
            <h3>{name}</h3>
            
            {dishInfo.hasOwnProperty('defaultPrice') ? 
                <h5>Rs. {defaultPrice/100}</h5> : 
                <h5>Rs. {price/100}</h5>
            }
            
            <p>{description}</p>
            <img src={RECOMMENDED_URL+imageId}></img>
            <hr />
        </div>
    )
}
export default Menu;