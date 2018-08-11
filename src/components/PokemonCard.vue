<template>
    <div>
        <h2 class="pokemon-name">{{pokemon.name}}</h2>
        <img class="pokemon-img" :src="getImage(pokemon.image)" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      values: {},
    },
  },
  template: '#pokemonCard',
  methods: {
    getImage(src) {
      return `/assets/${src}`;
    },
  },
};
</script>

<style scoped>

.pokemon-name {
    color: #9448b2;
    text-align: center;
}

.pokemon-name::first-letter {
    text-transform: uppercase;
}

.pokemon-img {
    width: 100%;
}
</style>
