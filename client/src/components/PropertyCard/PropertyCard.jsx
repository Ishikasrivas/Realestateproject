import React from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
// import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <AiFillHeart size = {24} color="white"/>
      {/* <Heart id={card?.id}/> */}
      <img src={card.image || '/r1.png'} alt="home" onError={e => {e.target.onerror=null; e.target.src='/r1.png';}} />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText"> { truncate(card.title, {length:15})}</span>
      <span className="secondaryText">{ truncate(card.description, {length:80 })}</span>
    </div>
  );
};

export default PropertyCard;