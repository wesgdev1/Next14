"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState(favoritePokemons);

  console.log(favoritePokemons);

  return (
    <>
      {pokemons.length === 0 ? (
        <FavoritePokemons />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const FavoritePokemons = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-600" />
      <span>No hay Favoritos</span>
    </div>
  );
};
