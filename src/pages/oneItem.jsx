import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { globalContext } from "../context/context";

const OneItem = () => {
  const { id } = useParams();
  const context = useContext(globalContext);

  useEffect(() => {
    context.getOneData(id);
    return () => {
      context.clearOneMovieSerie();
    };
  }, []);

  // console.log("context.one_movie_serie.Poster");
  return (
    <div className="oneItem">
      <img src={context?.one_movie_serie?.Poster}></img>
      <h1 className="naslov">{context?.one_movie_serie?.Title}</h1>
    </div>
  );
};

export default OneItem;
