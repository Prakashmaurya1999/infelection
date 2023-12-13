import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./compenets/header/Home";
import Contact from "./compenets/header/Contact";
import About from "./compenets/header/About";
import { Link } from "react-router-dom";
import "./App.css";
import Drop from "./compenets/header";
import Generic from "./compenets/Geners";
import MoviesDetails from "./compenets/header/MoviesDetails";

const App = () => {
  const [fetchDrop, setDrop] = useState([]);
  const FetchList = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDrop(data.genres);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    FetchList();
  }, []);

  return (
    <>
      <header>
        <h1>Movies</h1>
        <div className="navmenu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Drop fetchDrop={fetchDrop} />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<All />} /> */}
        <Route path="/movies/gen/:id" element={<Generic />} />
        <Route path="/MoviesDetails/:id" element={<MoviesDetails />} />
      </Routes>
      <footer>THis is footer</footer>
    </>
  );
};
export default App;
