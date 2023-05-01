import Movies from "./pages/Movies.jsx";
import Tvshows from "./pages/Tvshows.jsx";
import OneItem from "./pages/oneItem.jsx";
import Nav from "./components/navigation.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MovieProvider } from "./context/context.jsx";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <BrowserRouter>
          <div className="nav">
            <Nav />
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/movies" replace />} />
            <Route
              exact={true}
              path="/movies"
              element={<Movies type="movie" />}
            />
            <Route path="/tvshows" element={<Tvshows type="series" />} />
            <Route path="/details/:id" element={<OneItem />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
}

export default App;
