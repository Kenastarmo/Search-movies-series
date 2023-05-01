import React from "react";
import { NavLink } from "react-router-dom";

export const Card = (props) => {
  return (
    <NavLink to={`/details/${props.id}`}>
      <div className="card_container">
        <img src={props.poster} alt="" />
        <h4>{props.title}</h4>
      </div>
    </NavLink>
  );
};

export default Card;
