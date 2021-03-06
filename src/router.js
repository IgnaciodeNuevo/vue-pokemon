import Vue from 'vue';
import Router from 'vue-router';
import Pokemons from './views/Pokemons.vue';
import Pokemon from './views/Pokemon.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pokemons',
      component: Pokemons,
    },
    {
      path: '/:id',
      name: 'pokemon',
      component: Pokemon,
    },
  ],
});
