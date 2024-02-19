import React, { useState } from "react";
import style from "./home.module.css";
//import style from "../../";

const HomeModule = () => {
  const [cont, setcont] = useState<number>(2);
  const [color, setcolor] = useState<boolean>(false);
  const [input, setinput] = useState<string>("");

  let contador = 2;
  const algo = 2;

  //
  const contadorAumentar = () => {
    contador = contador + 1;
    setcont(cont + 1);
  };

  const mostrarNumero = () => {
    console.log("estoy impreso $sjdhjsdh ", contador);
  };
  const malCambio = () => {
    //setcolor("mi nombre es ");
  };
  const cambioDeColor = () => {
    //if (color === true) setcolor(false);
    //else setcolor(true);
    setcolor(!color);
  };
  console.log(color);
  //impri();

  //
  return (
    <div>
      <h1>hola mi nombre es:</h1>
      <h1>{input} </h1>
      <h1>soy el ejemplo de card user</h1>
      <div
        className={`${style["div-contenedor-card"]} 
        ${color ? style["color-green"] : style["color-red"]}`}
      ></div>
      <div>
        {color ? <h1>estoy de color verde</h1> : <h1>estoy de color rojo</h1>}
        <h1>Soy el contador {contador} </h1>
        <h1>Soy el contador {cont} </h1>
        <input
          value={input}
          onChange={(cxc) => setinput(cxc.target.value)}
          placeholder="ejemplo"
        />

        <button onClick={cambioDeColor}>cambio de color</button>
        <button
          onClick={() => {
            contadorAumentar();
            mostrarNumero();
          }}
        >
          presioname
        </button>
      </div>
    </div>
  );
};

export default HomeModule;
