<template>
  <article class="pokemon-card">
        <h1 class="pokemon-title">{{pokemon.id}}</h1>
        <h2 class="pokemon-subtitle">{{pokemon.name}}</h2>
        <img class="pokemon-img" :src="getImage(pokemon.image)" :alt="pokemon.name">
        <p class="pokemon-types">Types: {{pokemon.types}}</p>
  </article>
</template>

<script>

export default {
  name: 'Pokemon',
  data() {
    return {
      pokemon: [],
    };
  },
  created() {
    fetch(`http://localhost:3000/pokemons/${this.$route.params.id}`)
      .then(response => response.json())
      .then((pokemon) => {
        this.pokemon = pokemon;
      });
  },
  methods: {
    getImage(src) {
      return `/assets/${src}`;
    },
  },
};
</script>

<style scoped>
    html {
        font-family: 'Fredoka One', cursive;
    }

    .pokemon-card {
        background-color: #ffd057;
        border: 2px solid #ffd057;
        border-radius: 8px;
        max-width: 25rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .pokemon-title {
        color: #9448b2;
        font-size: 2rem;
        text-align: center;
    }

    .pokemon-subtitle {
        text-align: center;
    }

    .pokemon-subtitle::first-letter {
        text-transform: uppercase;
    }

    .pokemon-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
</style>
