import React, { useState } from "react";
import style from "./style.module.css";
import "../../index.css"
import { RxCross1 } from "react-icons/rx";
import { HiPaperClip } from "react-icons/hi2";
import { handlerClick } from "../../controllers/movies";

const AddMovie = () => {
  const [title, setTitle] = useState();

  // const drop = document.getElementById("image_input");
  // drop.addEventListener('dragover')

  const changeImage = (e) => {

    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        console.log(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };
  return (
    <div className={style.background_blur}>
      <div className={style.main_container}>
        <span onClick={() => handlerClick("hide_add_movie", "show_add_movie")}>
          <RxCross1 className={style.close_icon}></RxCross1>
        </span>
        <p>AGREGAR PELÍCULA</p>
        <div
          onDragOver={(event) =>
            (document.getElementById("image_input").className += ` on_drag`)
          }
          onDragLeave={(event) =>
            (document.getElementById("image_input").classList.remove("on_drag"))
          }
          id="image_input"
          className="image_input"
        >
          <input
            className="image_upload"
            type="file"
            onChange={(e) => {
              changeImage(e);
            }}
          />
          <div className={style.input_text_info}>
            <HiPaperClip className={style.clip_icon}></HiPaperClip>
            <span>AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ</span>
          </div>
        </div>
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
