import { SimplePokemon } from "@/app/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../app/pokemons/interfaces/pokemon";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  // "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      // la doble negacion convierte el valor a boolean , esto significa si existe
      if (!!state[id]) {
        delete state[id];
        return;
      } else {
        state[id] = pokemon;
      }
    },
  },
});

export const { toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
