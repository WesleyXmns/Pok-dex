import axios from "axios";

export function usePokedex() {
  const pokeApiURL = "https://pokeapi.co/api/v2/";
  const api = axios.create({ baseURL: pokeApiURL });

  return {
    all: async () => {
      const maxPokemons = 979;
      const pokemons: any = [];
      for (let i = 1; i <= maxPokemons; i++) {
        const response = await api.get(`pokemon/${i}`);

        if (response.status <= 204) {
          pokemons.push(response.data);
        }
      }
      return pokemons;
    },
    find: async (name: string) => {
      const response = await api.get(`pokemon/${name}`);
      if (response.status <= 204) {
        return response.data;
      }
    },
    findId: async (id: number) => {
      const response = await api.get(`pokemon/${id}`);
      if (response.status <= 204) {
        return response.data;
      }
    },
  };
}
