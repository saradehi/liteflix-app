import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import "../../index.css";
import { allMovies, deleteMovie, handlerClick } from "../../controllers/movies";
import { AiFillStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsSuitDiamondFill } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import { RxPlay } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [myMovies, setMyMovies] = useState();
  const [error, setError] = useState();
  const [dropdown, setDropdown] = useState("POPULARES");

  useEffect(() => {
    allMovies(setMovies, setError, setMyMovies);
  }, [movies, myMovies]);

  return (
    <div className={style.main_container}>
      <div className={style.container_select}>
        <p>VER: </p>
        <p
          onClick={() => handlerClick("dropdown_container", "view")}
          className={style.selected}
        >
          {dropdown}
          <BiChevronDown className={style.arrow_icon} size={25}></BiChevronDown>
        </p>
      </div>
      <div className={style.main_dropdown}>
        <div id="dropdown_container" className="dropdown_container">
          <div className={style.dropdown}>
            <div className={style.point}>
              <BsSuitDiamondFill></BsSuitDiamondFill>
            </div>
            <p
              onClick={() => setDropdown("POPULARES")}
              style={{ fontFamily: dropdown === "POPULARES" && "Bebas Neue" }}
            >
              POPULARES{" "}
              {dropdown === "POPULARES" && <CgCheck size={25}></CgCheck>}
            </p>
            <p
              onClick={() => setDropdown("MIS PELICULAS")}
              style={{
                fontFamily: dropdown === "MIS PELICULAS" && "Bebas Neue",
              }}
            >
              MIS PELÍCULAS{" "}
              {dropdown === "MIS PELICULAS" && <CgCheck size={25}></CgCheck>}
            </p>
          </div>
        </div>
      </div>

        {dropdown === "POPULARES" ? (
          <div className={style.movies_list}>
            {movies?.slice(0, 4).map((element, index) => {
              return (
                <div
                  className={style.movies_main_container}
                  // style={{
                  //   animationDelay: index -0.5 + "s",
                  // }}
                >
                  <div
                    className={style.movie_container}
                    key={index}
                    style={{
                      animationDuration: index === 0 ? index + 1 + "s" : index +0.8 + "s",
                      backgroundImage: `url('https://image.tmdb.org/t/p/w300/${element.poster_path}')`,
                    }}
                  >
                    <div className={style.movie_main_container}>
                      <div
                        className={style.movie_title}
                        // style={{
                        //   animationDelay: "2s",
                        // }}
                      >
                        <div className={style.play_icon_div}>
                          <RxPlay className={style.play_icon}></RxPlay>
                        </div>
                        <p className={style.title}>{element.original_title}</p>
                      </div>
                      <div className={style.display_info}>
                        <div className={style.movie_info}>
                          <div>
                            <AiFillStar className={style.icon}></AiFillStar>
                            <p>{element.vote_average}</p>
                          </div>
                          <p>{element.release_date.slice(0, 4)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={style.movies_list}>
            {myMovies?.slice(0, 4).map((ele, index) => {
              return (
                <div
                  className={style.mymovie_container}
                  key={index}
                  style={{
                    backgroundImage: `url('${ele.result}')`,
                  }}
                >
                  <div className={style.movie_main_container}>
                    <div
                      className={style.delete_mymovie}
                      onClick={() => deleteMovie(ele.title)}
                    >
                      <IoClose></IoClose>
                    </div>
                    <div className={style.movie_title}>
                      <div className={style.play_icon_div}>
                        <RxPlay className={style.play_icon}></RxPlay>
                      </div>
                      <p className={style.title}>{ele.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>)
        }
      </div>
  );
};

export default Movies;
