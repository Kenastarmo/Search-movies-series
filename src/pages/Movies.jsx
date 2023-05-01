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

export const Movies = ({ type }) => {
  const context = useContext(globalContext);

  //State
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  //Handlers
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (value.length >= 3) {
      context.fetchMoviesSeries(value, type);
    } else {
      context.clearMoviesSeries();
    }
  }, [value]);

  return (
    <div className="main_container">
      <div className="search_container">
        <div>
          <BiSearch />
        </div>

        <input onChange={handleSearch} placeholder="Search..." />
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

export default Movies;
