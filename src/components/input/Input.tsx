import React from "react";
import style from "./input.module.css";
const Input = ({
  label,
  onChange,
  value,
  placeHolder = "",
}: {
  label?: string;
  value?: any;
  onChange?: (dat: string) => void;
  placeHolder?: string;
}) => {
  return (
    <div className={`${style["div-container-input"]}`}>
      {label && <h6 className={`${style["h6-label"]}`}>{label} </h6>}
      <input
        placeholder={placeHolder}
        className={`${style["input-properties"]}`}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
