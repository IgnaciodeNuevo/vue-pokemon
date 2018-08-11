<template>
  <div>
      <h1 class="title">{{appTitle}}</h1>
        <button class="btn"
                type="button"
                v-on:click="showAllPokemons()">
                    All
        </button>
        <button class="btn"
                :key="type"
                v-for="type in pokemonTypes"
                v-on:click="filterByTypes(pokemons, type)">
            {{type}}
        </button>
        <section class="pokemons" v-if="pokemons">
            <article class="pokemon" :key="pokemon.id" v-for="pokemon in filteredPokemons">
                <pokemon-card :pokemon="pokemon"></pokemon-card>
            </article>
        </section>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  name: 'Pokemons',
  data() {
    return {
      appTitle: 'Vue Pokedex',
      pokemons: [],
      filteredPokemons: [],
      pokemonTypes: [],
    };
  },
  created() {
    fetch('http://localhost:3000/pokemons')
      .then(response => response.json())
      .then((pokemons) => {
        this.pokemons = pokemons;
        this.filteredPokemons = pokemons;
        this.pokemonTypes = this.getPokemonUnicTypes(pokemons);
        console.log(this.pokemons);
        console.log(this.getPokemonUnicTypes(pokemons));
      });
  },
  methods: {
    getPokemonUnicTypes(pokemons) {
      const pokemonTypes = pokemons
        .map(pokemon => pokemon.types)
        .reduce((types, acc) => acc.concat(types), []);

      // See Set here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
      const unicTypes = Array.from(new Set(pokemonTypes));
      return unicTypes;
    },
    filterByTypes(pokemons, types) {
      this.filteredPokemons = pokemons.filter(pokemon => pokemon.types.includes(types));
    },
    showAllPokemons() {
      this.filteredPokemons = this.pokemons;
    },
  },
  components: {
    PokemonCard,
  },
};
</script>

<style>
html {
    font-family: 'Fredoka One', cursive;
}

.title {
    color: #9448b2;
    font-size: 3rem;
    text-align: center;
}

.btn {
    background-color: transparent;
    border: 2px solid #ffd057;
    border-radius: 8px;
    color: #333333;
    font-family: inherit;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.15s ease-in;
}

.btn:not(:last-of-type) {
    margin-right: 1rem;
}

.btn:hover {
    background-color: #ffd057;
    color: #ffffff;
    cursor: pointer;
}

.pokemons {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-auto-rows: minmax(320px, 1fr);
}

.pokemon {
    background-color: #ffd057;
    border: 2px solid #ffd057;
    border-radius: 8px;
}
</style>

