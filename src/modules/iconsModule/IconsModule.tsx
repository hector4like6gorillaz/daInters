import React, { Fragment, useState } from "react";
import style from "./icons.module.css";

import Buscador from "../../components/buscador/Buscador";
import NavBar from "../../components/navBar/NavBar";

const IconsModule = () => {
  const [buscador, setbuscador] = useState("");
  console.log(buscador);
  const mandarAlBack = () => {
    if (buscador !== "") console.log("mandar la informacion al back");
    else console.log("no enviare al back porque estoy vacio");
  };

  return (
    <div className={`${style["div-container-module"]}`}>
      <div className={`${style["body-container"]}`}>
        <NavBar />
        <div className={`${style["body-container-on-red"]}`}></div>
        <Buscador
          value={buscador}
          onChange={setbuscador}
          onClickScope={mandarAlBack}
          onClickMic={() => console.log("soy el microfono")}
          onClickPicture={() => console.log("soy el picture")}
        />
        <Buscador
          value={buscador}
          onChange={setbuscador}
          onClickScope={mandarAlBack}
          cssCustom={`${style["buscador-fondo-green"]}`}
        />
      </div>
    </div>
  );
};

export default IconsModule;
