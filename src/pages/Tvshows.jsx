//React
import React, { useState, useEffect, useContext } from "react";
import "../App.css";

//Components
import Card from "../components/card";

//React icons
import { BiSearch } from "react-icons/bi";

//Debounce
import { useDebounce } from "use-debounce";

//Context
import { globalContext } from "../context/context";

export const Tvshows = ({ type }) => {
  const context = useContext(globalContext);
  const [searchtvshows, setSearchtvshows] = useState("");
  const [value] = useDebounce(searchtvshows, 1000);

  const handleSearchTvshows = (event) => {
    setSearchtvshows(event.target.value);
  };

  useEffect(() => {
    if (value.length >= 3) {
      context.fetchMoviesSeries(value, type);
    }
  }, [value]);

  return (
    <div className="main_container">
      <div className="search_container">
        <div>
          <BiSearch />
        </div>
        <input
          type="search"
          value={searchtvshows}
          onChange={handleSearchTvshows}
          placeholder="Search..."
        ></input>
      </div>
      <div className="results_container">
        {context.data?.map((item) => {
          return (
            <Card
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              poster={item.Poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tvshows;
