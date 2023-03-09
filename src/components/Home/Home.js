import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { popularMovie } from "../../controllers/movies";
import NavBar from "../NavBar/nav";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import Movies from "../Movies/Movies";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState()

const title = popularMovies && popularMovies.original_title.split(' ')

  useEffect(() => {
    document.title = "Liteflix";
    popularMovie(setPopularMovies);
  }, []);

  return (
    <div className={style.main_container}>
      <div className={style.image_div}>
        <img
          className={style.image}
          // src={back}
          src={
            popularMovies &&
            `https://image.tmdb.org/t/p/w1280${popularMovies.backdrop_path}`
          }
          alt="img"
        />
        <div className={style.background}></div>
      </div>

      <NavBar></NavBar>
      <div className={style.movies_div_container}>
        <div className={style.second_container}>
          <div className={style.subtitle}>
            ORIGINAL DE{" "}
            <span style={{ fontWeight: 900, fontFamily: "Bebas Neue" }}>
              LITEFLIX
            </span>
          </div>
          <div className={style.movie_title}>
            {title && title.length === 1 ? (
              <p className={style.p_title_first}>
                {title[0]}
              </p>
            ) : (
              <>
                {" "}
                <p className={style.p_title_first}>
                  {title?.length > 3
                    ? title.slice(0, 2).join(" ")
                    : title && title[0]}
                </p>
                <p className={style.p_title_second}>
                  {title?.length > 3
                    ? title.slice(2).join(" ")
                    : title && title[1]}
                </p>
              </>
            )}
          </div>
          <div className={style.button_container}>
            <div className={style.button_listone}>
              <button className={style.button_app_play}>
                <div className={style.info_button_list}>
                  <FiPlay size={15}></FiPlay> REPRODUCIR
                </div>
              </button>
            </div>
            <div className={style.button_list}>
              <button className={style.button_app_list}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className={style.info_button_list}>
                  <AiOutlinePlus size={15}></AiOutlinePlus> MI LISTA
                </div>
              </button>
            </div>
          </div>
        </div>
        <Movies></Movies>
      </div>
    </div>
  );
};

export default Home;
