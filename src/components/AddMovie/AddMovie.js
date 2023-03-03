import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import "../../index.css";
import { RxCross1 } from "react-icons/rx";
import { HiPaperClip } from "react-icons/hi2";
import { changeImage, handlerClick } from "../../controllers/movies";

const AddMovie = () => {
  const [title, setTitle] = useState();
  const [charging, setCharging] = useState(false);
  const [charged, setCharged] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#64eebc");


  useEffect(() => {
    let counter = document.querySelector("#counter");
    let contador = 0;
    setInterval(() => {
      if (contador === 100) {
        if (counter && charged) {
          counter.textContent = "100% cargado";
        } else if (counter && !charged) {
          counter.textContent = "¡ERROR!NO SE PUDO CARGAR LA PELÍCULA";
        }
        clearInterval();
      } else {
        contador += 2;
        if (counter) counter.textContent = "CARGANDO " + contador + " %";
      }

    }, 60);
  }, [charging, charged]);
  return (
    <div className={style.background_blur}>
      <div className={style.main_container}>
        <span
          onClick={() => {
            handlerClick("hide_add_movie", "show_add_movie");
            setCharging(false);
            setCharged();
          }}
        >
          <RxCross1 className={style.close_icon}></RxCross1>
        </span>
        <p>AGREGAR PELÍCULA</p>
        {!charging ? (
          <div
            onDragOver={(event) =>
              (document.getElementById("image_input").className += ` on_drag`)
            }
            onDragLeave={(event) =>
              document.getElementById("image_input").classList.remove("on_drag")
            }
            id="image_input"
            className="image_input"
          >
            <input
              className="image_upload"
              type="file"
              onChange={(event) => {
                changeImage(event, setCharging, setBackgroundColor, setCharged);
              }}
            />
            <div className={style.input_text_info}>
              <HiPaperClip className={style.clip_icon}></HiPaperClip>
              <span>AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ</span>
            </div>
          </div>
        ) : (
          <div className={style.progress_bar}>
            <p id="counter">0%</p>
            <div className={style.container_bar}>
              <hr className={style.background_bar}></hr>
              <div
                id="container_bar2"
                className="container_bar2"
                style={{
                  backgroundColor: backgroundColor,
                }}
              ></div>
            </div>
            {!charged && (
              <div className={style.retry}>
                <p
                  onClick={() => {
                    setCharging(false);
                    setBackgroundColor("#64eebc");
                  }}
                >
                  REINTENTAR
                </p>
              </div>
            )}
          </div>
        )}
        <div className={style.container_title_input}>
          <input
            type="text"
            className={style.title_input}
            placeholder="TITULO"
          ></input>
        </div>
        <button type="button" className={style.upload_button} disabled={true}>
          SUBIR PELÍCULA
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
