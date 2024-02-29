import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import {
  IdataApi,
  IpokemonInfo,
} from "../../interfaces/pokemonInformation/pokemon-interface";
import PokeCard from "./PokeCard";
import PokeCardParams from "./PokeCardParams";
import {
  getPokemonApiInfo,
  getPokemonNamesApi,
} from "../../services/pokeInfo-service";
import PokeCardApi from "./components/PokeCardApi";
import { useNavigate } from "react-router-dom";
import {
  IPokeNames,
  ResultNamesPokemons,
} from "../../interfaces/pokemonInformation/pokemon-names-interface";
//import style from "../../";

const HomeModule = () => {
  const navigate = useNavigate();

  const [cont, setcont] = useState<number>(1);
  const [color, setcolor] = useState<boolean>(false);
  const [input, setinput] = useState<string>("");
  const [pokemonInfo, setpokemonInfo] = useState<IpokemonInfo | null>(null);
  const [pokeNames, setpokeNames] = useState<null | ResultNamesPokemons[]>(
    null
  );

  useEffect(() => {
    //first
    /*
    getInfo().then((dat) => {
      console.log(dat);
    });
    */
    getPokemonNamesApi()
      .then((dat) => {
        //console.log(dat);
        setpokeNames(dat!.results);
      })
      .catch((e) => console.log(e));

    getPokemonApiInfo({ pokeId: cont })
      .then((dat) => {
        console.log("este es el resultado de la api");
        //console.log(dat);
        setpokemonInfo(dat!);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        //setLoading(false)
      });
  }, [cont]);
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
        onClick={() => navigate("pokemon")}
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
      <div>
        {pokemonInfo !== null && (
          <>
            <p>el numero en la pokedex es {pokemonInfo.id}</p>
            <p>
              {pokemonInfo.name} tiene una altura de {pokemonInfo.height}
            </p>
            <p>
              {pokemonInfo.name} pesa {pokemonInfo.weight}kg
            </p>
          </>
        )}
      </div>
      <div>
        {pokeNames !== null &&
          pokeNames.map((value, index) => {
            const iDpokemon = index + 1;
            return (
              <p key={index} onClick={() => navigate(`pokemon/${iDpokemon}`)}>
                {iDpokemon}.- {value.name}
              </p>
            );
          })}
      </div>
      {/** 
       
      <div>
        {Array.from({ length: 100 }, (_, index) => index + 1).map(
          (value, index) => {
            return (
              <div key={index}>
                <p>{value} </p>
               
                <PokeCardApi idPokemon={value} />
              </div>
            );
          }
        )}
      </div>
              */}
    </div>
  );
};

export default HomeModule;
