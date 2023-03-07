import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { allMovies } from "../../controllers/movies";
import back from "../../img/back1.png";
import NavBar from "../NavBar/nav";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import Movies from "../Movies/Movies";
import AddMovie from "../AddMovie/AddMovie";

const Home = () => {
  return (
    <div className={style.main_container}>
      <div className={style.image_div}>
        <img className={style.image} src={back} alt="img" />
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
          <div className={style.movie_title}>BABYLON</div>
          <div className={style.button_container}>
            <button className={style.button_app_play}>
              <FiPlay size={15}></FiPlay> REPRODUCIR
            </button>
            <button className={style.button_app_list}>
              <AiOutlinePlus size={15}></AiOutlinePlus> MI LISTA
            </button>
          </div>
        </div>
        <Movies></Movies>
      </div>
    </div>
  );
};

export default Home;
