import { useEffect, useState } from "react";
import style from "./home.module.css";
import { IpokemonInfo } from "../../interfaces/pokemonInformation/pokemon-interface";
import PokeCard from "./PokeCard";
import PokeCardParams from "./PokeCardParams";
import {
  getPokemonApiInfo,
  getPokemonNamesApi,
} from "../../services/pokeInfo-service";
import { useNavigate } from "react-router-dom";
import { ResultNamesPokemons } from "../../interfaces/pokemonInformation/pokemon-names-interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { aumentarContador, aumentarContadoren1, decrementarContadoren1 } from "../../redux/reducers/auth";
//import style from "../../";

const HomeModule = () => {
  const { contador: reduxContainer } = useSelector(
    (state: RootState) => state.ejemplo
  );
  const dispatch = useDispatch()
  
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

  const alPresionar = () => {
    console.log("soy el resultadode presionar");
    navigate(`pokemon/${15}`);
  };
  return (
    <div>
      <h1>
        hola soy el pokemon: {pokemonInfo !== null ? pokemonInfo.name : ""}
      </h1>


      <h1>redux container {reduxContainer} </h1>
      <button onClick={()=>dispatch(aumentarContadoren1())}>aumentar contador redux</button>
      <button onClick={()=>dispatch(decrementarContadoren1())}>decrementar contador redux</button>
      <button onClick={()=>dispatch(aumentarContador(10))}>aumentar en 10 contador redux</button>








      <h1>hola soy el pokemon: {pokemonInfo?.name} </h1>
      <h1>hola mi nombre es:</h1>
      <h1>{input} </h1>
      <h1 className={`${style["h1-clickeable"]}`} onClick={alPresionar}>
        soy el ejemplo de card user
      </h1>
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
