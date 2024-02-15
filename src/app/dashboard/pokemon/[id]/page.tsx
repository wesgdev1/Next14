import { Pokemon } from "@/app/pokemons";

interface Props {
  params: {
    id: string;
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((res) => res.json());
  console.log("se cargo " + pokemon.name);
  return pokemon;
};

export default async function PokemonPage(props: Props) {
  const { params } = props;

  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon: {params.id}</h1>
      <p>{JSON.stringify(pokemon)}</p>
    </div>
  );
}
