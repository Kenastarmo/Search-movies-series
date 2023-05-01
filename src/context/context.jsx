import React, { createContext, useReducer } from "react";
import { serviceapi } from "../service/serviceapi";
import reducer from "./reducer";

const initialState = {
  data: [],
  error: "",
  one_movie_serie: {},
};

export const globalContext = createContext(initialState);

export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMoviesSeries = async (value, type) => {
    const response = await serviceapi(`type=${type}&s=${value}`);

    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: response,
    });
  };

  const getOneData = async (data) => {
    const response = await serviceapi(`i=${data}`);

    dispatch({
      type: "GET_ONE_MOVIE_SERIE",
      payload: response,
    });
  };

  const clearMoviesSeries = () => {
    dispatch({ type: "CLEAR_MOVIES" });
  };
  const clearOneMovieSerie = () => {
    dispatch({ type: "CLEAR_ONE_MOVIE_SERIE" });
  };

  return (
    <globalContext.Provider
      value={{
        fetchMoviesSeries,
        getOneData,
        clearMoviesSeries,
        clearOneMovieSerie,
        data: state.data,
        one_movie_serie: state.one_movie_serie,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};
