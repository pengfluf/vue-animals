import Vue from 'vue';
import Vuex from 'vuex';

import db from './utils/db.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    db,
  },
  mutations: {
    toggleCategory(state) {
      return state;
    },
  },
  getters: {
    enabledAnimals: (state) => {
      let arrays = [];
      arrays = state.db
      .filter(item => item.enabled)
        .map(item => item.units);
      const merged = [].concat(...arrays);
      return merged;
    },
    families: state =>
      state.db.map(item => item.family),
  },
});

export default store;
