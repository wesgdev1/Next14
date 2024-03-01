import {
  FavoritesPokemons,
  PokemonGrid,
  PokemonResponse,
  SimplePokemon,
} from "@/app/pokemons";

export const metadata = {
  title: "Pokemons",
  description: "Listado de Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemos Favoritos <small>Global State</small>
      </span>
      <FavoritesPokemons />
    </div>
  );
}
