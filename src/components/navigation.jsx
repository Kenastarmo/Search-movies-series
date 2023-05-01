import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <NavLink
        className={location.pathname.includes("details") ? "none" : ""}
        activeclassname="active"
        to="/movies"
      >
        Movies
      </NavLink>
      <NavLink
        className={location.pathname.includes("details") ? "none" : ""}
        activeclassname="active"
        to="/tvshows"
      >
        Tv Shows
      </NavLink>
      <NavLink
        className={location.pathname.includes("details") ? "back" : "none"}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </NavLink>
    </>
  );
};

export default Nav;
