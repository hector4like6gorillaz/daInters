import axios from "axios";
import { IdataApi } from "../interfaces/pokemonInformation/pokemon-interface";

async function getPokemonApiInfo({
  pokeId = 1,
  name,
}: {
  pokeId?: number;
  name?: string;
}) {
  console.log(pokeId, name);
  try {
    const response: IdataApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    );
    //setpokemonInfo(response.data);
    //console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getPokemonApiInfo };
