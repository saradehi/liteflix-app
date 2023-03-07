import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import "../../index.css";
import { RxCross1 } from "react-icons/rx";
import { HiPaperClip } from "react-icons/hi2";
import {
  activeSubmit,
  changeImage,
  handleSubmit,
  handlerClick,
} from "../../controllers/movies";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [charging, setCharging] = useState(false);
  const [charged, setCharged] = useState("");
  const [status, setStatus] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#64eebc");
  const [result, setResult] = useState("Error");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let counter = document.querySelector("#counter");
    let contador = 0;
    setInterval(() => {
      if (contador === 100) {
        if (counter && status) {
          counter.textContent = "100% cargado";
        } else if (counter && !status) {
          counter.textContent = "¡ERROR!NO SE PUDO CARGAR LA PELÍCULA";
        }
        clearInterval();
      } else {
        contador += 2;
        if (counter) counter.textContent = "CARGANDO " + contador + " %";
      }
    }, 60);
  }, [charging, status]);

  return (
    <div className={style.background_blur}>
      <div className={style.main_container}>
        <span
        className={style.span_main}
          onClick={() => {
            handlerClick("hide_add_movie", "show_add_movie");
            setCharging(false);
            setCharged("");
            setResult("Error");
            setTitle("");
          }}
        >
          <RxCross1 className={style.close_icon}></RxCross1>
        </span>
        {!success ? (
          <>
            <p className={style.p_main}>AGREGAR PELÍCULA</p>
            {!charging ? (
              <div
                onDragOver={(event) =>
                  (document.getElementById(
                    "image_input"
                  ).className += ` on_drag`)
                }
                onDragLeave={(event) =>
                  document
                    .getElementById("image_input")
                    .classList.remove("on_drag")
                }
                id="image_input"
                className="image_input"
              >
                <input
                  className="image_upload"
                  type="file"
                  onChange={(event) => {
                    changeImage(
                      event,
                      setCharging,
                      setBackgroundColor,
                      setCharged,
                      setResult,
                      setStatus
                    );
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
                {charged === "false" && (
                  <div className={style.retry}>
                    <p
                      onClick={() => {
                        setCharging(false);
                        setBackgroundColor("#64eebc");
                        setCharged("");
                      }}
                    >
                      REINTENTAR
                    </p>
                  </div>
                )}
                {charged === "true" && (
                  <div className={style.ready}>
                    <p>¡LISTO!</p>
                  </div>
                )}
              </div>
            )}
            <div className={style.container_title_input}>
              <input
                type="text"
                className={style.title_input}
                placeholder="TITULO"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              ></input>
            </div>
            <button
              type="button"
              onClick={() => handleSubmit(title, result, setResult, setSuccess)}
              className={style.upload_button}
              disabled={activeSubmit(result, title)}
            >
              SUBIR PELÍCULA
            </button>
          </>
        ) : (
          <>
            <p className={style.p_success}>
              LITE<span>FLIX</span>
            </p>

            <p className={style.p_subtitle}>¡Felicitaciones!</p>
            <span className={style.success_message}>{title} FUE CORRECTAMENTE SUBIDA</span>
            <button
              type="button"
              onClick={() => {
                handlerClick("hide_add_movie", "show_add_movie");
                setCharging(false);
                setCharged("");
                setResult("Error");
                setTitle("");
              }}
              className={style.upload_button}
            >
              IR A HOME
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddMovie;
