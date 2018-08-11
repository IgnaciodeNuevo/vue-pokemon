const app = new Vue({
    el: '#app',
    data() {
        return {
            text: 'Vue Pokedex',
            pokemons: {}
        }
    },
    created() {
        fetch('http://localhost:3000/pokemons')
            .then(response => response.json())
            .then(pokemons => {
                    this.pokemons = pokemons
                    console.log(this.pokemons);
                }
            )
    }
})
