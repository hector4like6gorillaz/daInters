import React, { useEffect, useState } from "react";
import PokeCardParams from "../PokeCardParams";
import { IpokemonInfo } from "../../../interfaces/pokemonInformation/pokemon-interface";
import { getPokemonApiInfo } from "../../../services/pokeInfo-service";

const PokeCardApi = ({ idPokemon }: { idPokemon: number }) => {
  const [pokemonInfo, setpokemonInfo] = useState<IpokemonInfo | null>(null);

  useEffect(() => {
    getPokemonApiInfo({ pokeId: idPokemon })
      .then((dat) => {
        console.log("este es el resultado de la api");
        console.log(dat);
        setpokemonInfo(dat!);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        //setLoading(false)
      });
  }, []);
  return (
    <div>
      {pokemonInfo !== null && (
        <PokeCardParams
          imagen={pokemonInfo.sprites.front_default}
          name={pokemonInfo.name}
        />
      )}
    </div>
  );
};

export default PokeCardApi;
