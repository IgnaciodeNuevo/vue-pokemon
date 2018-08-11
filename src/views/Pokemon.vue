<template>
  <article class="pokemon-card">
        <h1 class="pokemon-title">{{pokemon.id}}</h1>
        <h2 class="pokemon-subtitle">{{pokemon.name}}</h2>
        <img class="pokemon-img" :src="getImage(pokemon.image)" :alt="pokemon.name">
        <p>Experience: {{pokemon.experience}}</p>
        <p>Height: {{pokemon.height}}</p>
        <p>Weight: {{pokemon.weight}}</p>
        <ul class="list">
            <li class="list-item">Types: </li>
            <li class="list-item"
                :key="type"
                v-for="type in pokemon.types">{{type}}.
            </li>
        </ul>
        <ul class="list">
            <li class="list-item">Abilities: </li>
            <li class="list-item"
                :key="ability"
                v-for="ability in pokemon.abilities">{{ability}}.
            </li>
        </ul>

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

    .list-item::first-letter,
    .pokemon-subtitle::first-letter {
        text-transform: uppercase;
    }

    .pokemon-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    .list {
        margin-bottom: 1rem;
        margin-top: 1rem;
        padding: 0;
        overflow: hidden;
    }

    .list-item {
        float: left;
        list-style-type: none;
        margin-right: 0.25rem;
    }
</style>
