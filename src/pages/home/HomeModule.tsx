import React, { useState } from "react";

const HomeModule = () => {
  const [cont, setcont] = useState<number>(2);

  let contador = 2;
  const algo = 2;

  //
  const contadorUmentar = () => {
    contador = contador + 1;
    setcont(cont + 1);
  };
  const mostrarNumero = () => {
    console.log("estoy impreso ", contador);
  };
  
  //impri();

  //
  return (
    <div>
      <h1>hola</h1>
      <div>
        <h1>Soy ejemplo</h1>
        <h1>Soy el contador {contador} </h1>
        <h1>Soy el contador {cont} </h1>
        <button
          onClick={() => {
            contadorUmentar();
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
