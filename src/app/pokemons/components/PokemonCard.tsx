"use client";
import Link from "next/link";
import { SimplePokemon } from "@/app/pokemons";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toogleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();

  const onToogle = () => {
    dispatch(toogleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className=" flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className=" flex - flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>

          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToogle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          >
            <div className="text-red-600">
              {/* <IoHeartOutline />
              <IoHeart /> */}
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Es favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">{"click para cambiar"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
