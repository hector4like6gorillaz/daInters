import React from "react";
import style from "./card.module.css";

const PokeCard = () => {
  return (
    <div className={`${style["container-div"]}`}>
      <div className ={`${style['div-name']}`}>
        <p className ={`${style['p-name']}`}>Pikachu</p>
      </div>
      <div className={`${style["div-img-container"]}`}>
        <img
          className={`${style["img-poke"]}`}
          src="https://pm1.aminoapps.com/6314/67248b708c022a1b4a5cefda3a9afb74d27efc4d_00.jpg"
        />
      </div>
    </div>
  );
};

export default PokeCard;
