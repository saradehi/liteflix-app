import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import style from "./styles.module.css";
import imageUser from "../../img/no-image.jpg";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <nav className={style.main_container}>
      <div className={style.second_container}>
        <div style={{ width: "5rem", height: "2rem", objectFit: "cover" }}>
          <span className={style.app_name}>LITE</span>
          <span className={style.app_name2}>FLIX</span>
        </div>
        <div className={style.add_movie}>
          <AiOutlinePlus size={22}></AiOutlinePlus>
          <p>AGREGAR PELÍCULA</p>
        </div>
      </div>
      <div className={style.other}>
        <Bars3BottomRightIcon className={style.heroicons} />
        <div>
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
