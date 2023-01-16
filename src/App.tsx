import { useState, useEffect, useCallback } from "react";
import { usePokedex } from "./hooks/usePokedex";

export function App() {
  const pokedex = usePokedex();

  const [pokemonList, setPokemonList] = useState<any>([]);

  async function getAllListPokemons() {
    const maxPokemons = 978;
    console.log(pokemonList.length);
    if (pokemonList.length <= maxPokemons) {
      const data = await pokedex.findId(pokemonList.length + 1);
      setPokemonList([...pokemonList, data]);
    }
  }
  console.log("??", pokemonList);

  useEffect(() => {
    getAllListPokemons();
  }, [pokemonList]);

  // console.log(pokemonList);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      {pokemonList.map((e: any) => {
        return <div key={e.id}>{e.name}</div>;
      })}
    </div>
  );
}
