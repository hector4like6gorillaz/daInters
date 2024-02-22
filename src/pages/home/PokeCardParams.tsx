import React from "react";
import style from "./card.module.css";

const PokeCardParams = ({ imagen, name }: { imagen: string; name: string }) => {
  return (
    <div className={`${style["container-div"]}`}>
      <div className={`${style["div-name"]}`}>
        <p className={`${style["p-name"]}`}> {name} </p>
      </div>
      <div className={`${style["div-img-container"]}`}>
        <img className={`${style["img-poke"]}`} src={imagen} />
      </div>
    </div>
  );
};

export default PokeCardParams;
