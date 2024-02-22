import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import {
  IdataApi,
  IpokemonInfo,
} from "../../interfaces/pokemonInformation/pokemon-interface";
import PokeCard from "./PokeCard";
import PokeCardParams from "./PokeCardParams";
//import style from "../../";

const HomeModule = () => {
  const [cont, setcont] = useState<number>(2);
  const [color, setcolor] = useState<boolean>(false);
  const [input, setinput] = useState<string>("");
  const [pokemonInfo, setpokemonInfo] = useState<IpokemonInfo | null>(null);

  async function getInfo() {
    try {
      const response: IdataApi = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/51"
      );
      console.log(response);
      console.log(response.data);
      setpokemonInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //first
    getInfo();
  }, []);
  //}, [cont,color,input]);

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
      <h1>
        hola soy el pokemon: {pokemonInfo !== null ? pokemonInfo.name : ""}
      </h1>
      <h1>hola soy el pokemon: {pokemonInfo?.name} </h1>
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
      <div style={{ display: "flex" }}>
        <PokeCard />
        {pokemonInfo !== null && (
          <PokeCardParams
            imagen={pokemonInfo.sprites.front_default}
            name={pokemonInfo.name}
          />
        )}
      </div>
    </div>
  );
};

export default HomeModule;
