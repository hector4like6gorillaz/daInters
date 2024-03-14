import React from "react";
import style from "./buscador.module.css";
import {
  CameraIcon,
  MagnifyingGlassCircleIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

const Buscador = ({
  value = "",
  onChange,
  onClickScope,
  onClickMic,
  onClickPicture,
  cssCustom,
}: {
  value?: string;
  onChange?: (dat: string) => void;
  onClickScope?: () => void;
  onClickMic?: () => void;
  onClickPicture?: () => void;
  cssCustom?: any;
}) => {
  return (
    <div
      className={`${style["container-searcher"]} ${
        cssCustom ? cssCustom : style["backgroud"]
      }`}
    >
      <MagnifyingGlassCircleIcon
        className={`${style["icons-search"]} ${style["icons-grey"]}`}
        onClick={() => onClickScope && onClickScope()}
      />
      <input
        value={value}
        onChange={(w) => {
          onChange && onChange(w.target.value);
        }}
        placeholder="buscar por matricula"
        className={`${style["buscador-google"]}`}
      />
      {onClickMic && (
        <MicrophoneIcon
          className={`${style["icons-search"]} ${style["icons-red"]}`}
          onClick={() => onClickMic && onClickMic()}
        />
      )}
      {onClickPicture && (
        <CameraIcon
          className={`${style["icons-search"]} ${style["icons-red"]}`}
          onClick={() => onClickPicture && onClickPicture()}
        />
      )}
    </div>
  );
};

export default Buscador;
