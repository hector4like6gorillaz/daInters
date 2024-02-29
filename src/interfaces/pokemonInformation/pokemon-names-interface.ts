export interface IdataApiNames {
  data: IPokeNames;
  status: number;
  statusText: string;
}

export interface IPokeNames {
  count: number;
  next: string;
  previous: null;
  results: ResultNamesPokemons[];
}

export interface ResultNamesPokemons {
  name: string;
  url: string;
}
