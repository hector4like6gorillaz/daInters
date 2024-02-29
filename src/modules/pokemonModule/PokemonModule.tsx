import React, { useEffect, useState } from "react";
import PokeCard from "../../pages/home/PokeCard";
import PokeCardParams from "../../pages/home/PokeCardParams";
import { IpokemonInfo } from "../../interfaces/pokemonInformation/pokemon-interface";
import { getPokemonApiInfo } from "../../services/pokeInfo-service";
import { useNavigate, useParams } from "react-router-dom";

const PokemonModule = () => {
  const navigate = useNavigate();
  const [pokemonInfo, setpokemonInfo] = useState<IpokemonInfo | null>(null);

  useParams();

  const { id } = useParams();

  console.log(id, "soy el del ejempñlo");
  console.log(id ?? "vacio", "soy el del ejempñlo");
  const elId = id ?? "vacio";

  //const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    let idDelPokemon = 7;
    if (elId !== "vacio") {
      idDelPokemon = parseInt(elId);
    }

    getPokemonApiInfo({ pokeId: idDelPokemon })
      .then((dat) => {
        setpokemonInfo(dat!);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {});
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => navigate("/")}>atras</button>
      <PokeCard />
      {pokemonInfo !== null && (
        <PokeCardParams
          imagen={pokemonInfo.sprites.front_default}
          name={pokemonInfo.name}
        />
      )}
    </div>
  );
};

export default PokemonModule;
