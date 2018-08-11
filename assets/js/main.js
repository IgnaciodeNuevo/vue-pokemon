const app = new Vue({
    el: '#app',
    data() {
        return {
            appTitle: 'Vue Pokedex',
            pokemons: [],
            filteredPokemons: [],
            pokemonTypes: []
        }
    },
    created() {
        fetch('http://localhost:3000/pokemons')
            .then(response => response.json())
            .then(pokemons => {
                this.pokemons = pokemons;
                this.filteredPokemons = pokemons;
                this.pokemonTypes = this.getPokemonUnicTypes(pokemons);
                    console.log(this.pokemons);
                    console.log(this.getPokemonUnicTypes(pokemons));
                }
            )
    },
    methods: {
        getImage(imgSrc) {
            return `assets/${imgSrc}`
        },
        getPokemonUnicTypes(pokemons) {
            const types = pokemons
                    .map(pokemon => pokemon.types)
                    .reduce((types, acc) => acc.concat(types), []);

            // See Set here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
            const unicTypes = Array.from(new Set(types));
            return unicTypes;
        },
        filterByTypes(pokemons, types) {
            this.filteredPokemons = pokemons.filter(pokemon => pokemon.types.includes(types));
        },
        showAllPokemons() {
            this.filteredPokemons = this.pokemons;
        }
    }
})
