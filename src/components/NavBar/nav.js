import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import style from "./styles.module.css";
import "../../index.css";
import imageUser from "../../img/no-image.jpg";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import AddMovie from "../AddMovie/AddMovie";
import { handlerClick } from "../../controllers/movies";

const NavBar = () => {


  return (
    <nav className={style.main_container}>
      <div id="hide_add_movie" className="hide_add_movie">
        <AddMovie></AddMovie>
      </div>
      <div className={style.second_container}>
        <div className={style.app_name_container}>
          <span className={style.app_name}>LITE</span>
          <span className={style.app_name2}>FLIX</span>
        </div>
        <div
          onClick={() => handlerClick("hide_add_movie", "show_add_movie")}
          className={style.add_movie}
        >
          <div className={style.icon_add_movie}>
            <AiOutlinePlus size={22}></AiOutlinePlus>
          </div>
          <p>AGREGAR PELÍCULA</p>
        </div>
      </div>
      <div className={style.other}>
        <div className={style.menu}>
          <Bars3BottomRightIcon className={style.heroicons} />
        </div>
        <div className={style.bell}>
          <div className={style.container_dot_1}>
            <div className={style.container_dot_2}></div>
            <FiBell size={28}></FiBell>
          </div>
        </div>
        <img className={style.user_image} src={imageUser} alt="user"></img>
      </div>
    </nav>
  );
};

export default NavBar;
